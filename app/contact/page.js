"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Turnstile } from "@marsidev/react-turnstile";

const initialForm = {
  name: "",
  email: "",
  message: "",
  website: "", // honeypot
};

const COOLDOWN_MS = 60 * 1000;

const BLOCKED_EMAILS = [
  "spam@example.com",
  "bot@fake.com",
  "test@tempmail.com",
];

const BLOCKED_DOMAINS = [
  "tempmail.com",
  "mailinator.com",
  "guerrillamail.com",
  "10minutemail.com",
  "yopmail.com",
  "sharklasers.com",
];

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function getDomain(email) {
  return email.split("@")[1]?.toLowerCase() || "";
}

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [cooldownLeft, setCooldownLeft] = useState(0);

  useEffect(() => {
    emailjs.init({
      publicKey: "YOUR_PUBLIC_KEY",
      blockHeadless: true,
      blockList: {
        watchVariable: "email",
        list: BLOCKED_EMAILS,
      },
      limitRate: {
        id: "contact-page",
        throttle: 60000,
      },
    });
  }, []);

  useEffect(() => {
    const updateCooldown = () => {
      const lastSent = Number(localStorage.getItem("contact_last_sent_at") || 0);
      const remaining = Math.max(0, COOLDOWN_MS - (Date.now() - lastSent));
      setCooldownLeft(remaining);
    };

    updateCooldown();
    const interval = setInterval(updateCooldown, 1000);
    return () => clearInterval(interval);
  }, [success]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
    setSuccess("");
    setErrorMsg("");
  };

  const validate = () => {
    const newErrors = {};

    const name = form.name.trim();
    const email = form.email.trim().toLowerCase();
    const message = form.message.trim();

    if (!name) {
      newErrors.name = "Name cannot be empty.";
    }

    if (!email) {
      newErrors.email = "Email cannot be empty.";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Enter a valid email like xyz@abc.kl";
    } else if (BLOCKED_EMAILS.includes(email)) {
      newErrors.email = "This email address is blocked.";
    } else if (BLOCKED_DOMAINS.includes(getDomain(email))) {
      newErrors.email = "Temporary email addresses are not allowed.";
    }

    if (!message) {
      newErrors.message = "Message cannot be empty.";
    } else if (message.length < 15) {
      newErrors.message = "Message is too short.";
    } else if (message.length > 3000) {
      newErrors.message = "Message is too long.";
    }

    if (!captchaToken) {
      newErrors.captcha = "Please verify that you are human.";
    }

    const lastSent = Number(localStorage.getItem("contact_last_sent_at") || 0);
    if (Date.now() - lastSent < COOLDOWN_MS) {
      newErrors.submit = "Please wait before sending another message.";
    }

    if (form.website.trim() !== "") {
      newErrors.submit = "Spam detected.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setErrorMsg("");

    if (!validate()) return;

    setLoading(true);

    try {
      const templateParams = {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        message: form.message.trim(),
        "cf-turnstile-response": captchaToken,
      };

      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams
      );

      localStorage.setItem("contact_last_sent_at", String(Date.now()));

      setSuccess("Message sent successfully!");
      setForm(initialForm);
      setErrors({});
      setCaptchaToken("");
      setCooldownLeft(COOLDOWN_MS);
    } catch (error) {
      const errorText = String(error?.text || error?.message || "");

      if (errorText.includes("429")) {
        setErrorMsg("Too many requests. Please wait and try again.");
      } else if (errorText.includes("451")) {
        setErrorMsg("Headless browser blocked.");
      } else if (errorText.includes("403")) {
        setErrorMsg("This submission was blocked.");
      } else {
        setErrorMsg("Failed to send message. Please try again.");
      }

      console.error("EMAILJS_ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  const isCoolingDown = cooldownLeft > 0;

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Contact Us
        </h1>
        <p className="text-gray-600">
          Have questions, feedback, or suggestions? We&apos;d love to hear from you.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm space-y-6"
      >
        {/* Honeypot */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="text"
            tabIndex="-1"
            autoComplete="off"
            value={form.website}
            onChange={(e) => handleChange("website", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            rows="5"
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <div>
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
            onSuccess={(token) => {
              setCaptchaToken(token || "");
              setErrors((prev) => ({ ...prev, captcha: "" }));
            }}
            onExpire={() => setCaptchaToken("")}
            onError={() => setCaptchaToken("")}
          />

          {errors.captcha && (
            <p className="text-red-500 text-sm mt-2">{errors.captcha}</p>
          )}
        </div>

        {errors.submit && (
          <p className="text-red-500 text-sm">{errors.submit}</p>
        )}

        {isCoolingDown && (
          <p className="text-gray-500 text-sm">
            Please wait {Math.ceil(cooldownLeft / 1000)}s before sending another message.
          </p>
        )}

        <button
          type="submit"
          disabled={loading || isCoolingDown}
          className="bg-blue-600 text-white px-6 py-2.5 rounded-xl hover:bg-blue-700 transition shadow disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && <p className="text-green-600 text-sm">{success}</p>}
        {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}
      </form>
    </main>
  );
}