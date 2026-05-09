"use client"

import { EncryptedText } from "@/components/ui/encrypted-text";
import React from "react";

export default function EncryptedTextDemoSecond() {
  const statements = [
    "Hello I'm Kathrina",
    "I'm a developer",
    "I build cool things",
    "Welcome to my portfolio",
  ];

  return (
    <p className="mx-auto max-w-lg py-8 flex justify-center text-center text-3xl bg-black">
      <EncryptedText
        texts={statements}
        encryptedClassName="text-neutral-300"
        revealedClassName="dark:text-white text-white"
        revealDelayMs={50}
        cycleDelayMs={3500}
      />
    </p>
  );
}
