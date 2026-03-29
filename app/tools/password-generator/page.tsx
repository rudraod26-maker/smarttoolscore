import type { Metadata } from "next";
import PasswordGeneratorClient from "./PasswordGeneratorClient";

export const metadata: Metadata = {
  title: "Free Password Generator | SmartToolsCore",
  description:
    "Generate strong and secure passwords instantly with our free online password generator tool.",
};

export default function PasswordGeneratorPage() {
  return <PasswordGeneratorClient />;
}