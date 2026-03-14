"use client";

import { useState, useEffect } from "react";

export default function PasswordGeneratorClient() {
  const [length, setLength] = useState(14);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [passwords, setPasswords] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const generatePassword = () => {
    let charset = "";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+[]{}|;:,.<>?";

    if (!charset) return;

    const newPasswords: string[] = [];

    for (let j = 0; j < 5; j++) {
      let generated = "";
      for (let i = 0; i < length; i++) {
        generated += charset.charAt(
          Math.floor(Math.random() * charset.length)
        );
      }
      newPasswords.push(generated);
    }

    setPasswords(newPasswords);
  };

  const calculateStrength = () => {
    let score = 0;
    if (length >= 8) score++;
    if (length >= 12) score++;
    if (length >= 16) score++;
    if (includeUppercase) score++;
    if (includeLowercase) score++;
    if (includeNumbers) score++;
    if (includeSymbols) score++;

    if (score <= 3)
      return { label: "Weak", width: "25%", gradient: "from-red-500 to-red-700" };
    if (score <= 5)
      return { label: "Medium", width: "50%", gradient: "from-yellow-400 to-yellow-600" };
    if (score <= 7)
      return { label: "Strong", width: "75%", gradient: "from-green-400 to-green-600" };
    return { label: "Very Strong", width: "100%", gradient: "from-emerald-400 to-emerald-600" };
  };

  const strength = calculateStrength();

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  useEffect(() => {
    generatePassword();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-300 px-6 py-16">
      <div className="w-full max-w-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">
          🔐 Premium Password Generator
        </h1>

        {/* Length */}
        <div className="mb-6">
          <label className="font-semibold">
            Password Length: {length}
          </label>
          <input
            type="range"
            min="6"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full mt-2 accent-emerald-500"
          />
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <label><input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} className="mr-2" /> Uppercase</label>
          <label><input type="checkbox" checked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)} className="mr-2" /> Lowercase</label>
          <label><input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} className="mr-2" /> Numbers</label>
          <label><input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} className="mr-2" /> Symbols</label>
        </div>

        {/* Strength Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span>Password Strength</span>
            <span className="font-semibold">{strength.label}</span>
          </div>
          <div className="w-full h-3 bg-white/20 rounded">
            <div
              className={`h-3 rounded bg-gradient-to-r ${strength.gradient} transition-all duration-500`}
              style={{ width: strength.width }}
            ></div>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={generatePassword}
          className="w-full bg-gradient-to-r from-emerald-500 to-green-600 py-2 rounded-xl font-semibold hover:scale-[1.02] transition-transform duration-200 mb-6"
        >
          Generate 5 Secure Passwords
        </button>

        {/* Password List */}
        <div className="space-y-3">
          {passwords.map((pwd, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white/10 px-4 py-3 rounded-lg font-mono"
            >
              <span className="break-all">{pwd}</span>
              <button
                onClick={() => copyToClipboard(pwd, index)}
                className="ml-4 bg-emerald-600 px-3 py-1 rounded hover:bg-emerald-700 transition"
              >
                {copiedIndex === index ? "Copied!" : "Copy"}
              </button>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-white/70 text-center">
          Strong passwords include uppercase, lowercase, numbers, and symbols.
          Longer passwords provide better security protection.
        </p>

          <section style={{ marginTop: "50px" }}>
  <h2>About This Password Generator</h2>

  <p>
    The SmartToolsCore Password Generator helps users create strong and secure
    passwords instantly. Strong passwords are essential for protecting online
    accounts from hacking attempts, brute-force attacks, and data breaches.
  </p>

  <p>
    This tool allows you to customize password length and include uppercase
    letters, lowercase letters, numbers and symbols. Using a combination of
    characters makes passwords significantly harder to crack.
  </p>

  <h2>Why Strong Passwords Are Important</h2>

  <p>
    Weak passwords remain one of the most common causes of account compromise.
    Cybersecurity experts recommend using long and complex passwords for
    important accounts such as email, banking and social media platforms.
  </p>

  <p>
    A secure password should contain a mix of letters, numbers and special
    characters. It should also be unique for every account you use.
  </p>

  <h2>How to Use This Password Generator</h2>

  <ul>
    <li>Select the desired password length.</li>
    <li>Choose whether to include uppercase letters, lowercase letters, numbers and symbols.</li>
    <li>Click the "Generate Password" button.</li>
    <li>Copy the generated password and use it for your account.</li>
  </ul>
</section>

      </div>
    </div>
  );
}