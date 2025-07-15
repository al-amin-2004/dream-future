"use client";

import { useState } from "react";
import { CopyIcon } from "../icons/icons";

export const CopyBox = ({ content }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // 1.5 sec পরে copied message off হবে
    });
  };

  return (
    <div className="flex items-center gap-2 px-1.5 py-1" title="Copy UID">
      <span>{content}</span>
      <button onClick={handleCopy} className="cursor-pointer">
        <CopyIcon />
      </button>
      {copied && <span className="text-green-500 text-sm">Copied!</span>}
    </div>
  );
};
