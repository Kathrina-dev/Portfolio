"use client"

import { EncryptedText } from "@/components/ui/encrypted-text";
import React from "react";

export default function EncryptedTextDemoSecond() {
  const statements = [
    "Hi! I'm Kathrina",
    "I'm a developer",
    "I make cool stuff",
    "Welcome",
  ];

  return (
    <div className="w-full max-w-lg py-8 flex justify-center items-center align-middle text-center text-3xl bg-black px-4">
      <EncryptedText
        texts={statements}
        encryptedClassName="text-neutral-300"
        revealedClassName="dark:text-white text-white"
        revealDelayMs={50}
        cycleDelayMs={3500}
      />
    </div>
  );
}
