"use client"

import { EncryptedText } from "@/components/ui/encrypted-text";
import React from "react";

export default function EncryptedTextDemoSecond() {
  return (
    <p className="mx-auto max-w-lg py-10 text-left text-3xl">
      <EncryptedText
        text="Hello I'm Kathrina"
        encryptedClassName="text-neutral-500"
        revealedClassName="dark:text-white text-black"
        revealDelayMs={50}
      />
    </p>
  );
}
