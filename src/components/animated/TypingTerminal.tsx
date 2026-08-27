"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useReducedMotion } from "motion/react";

interface TypingTerminalProps {
  lines: string[];
  speed?: number;
  lineDelay?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypingTerminal({
  lines,
  speed = 40,
  lineDelay = 300,
  className,
  onComplete,
}: TypingTerminalProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const shouldReduce = useReducedMotion();

  const completeInstantly = useCallback(() => {
    setDisplayedLines(lines);
    setIsComplete(true);
    onComplete?.();
  }, [lines, onComplete]);

  useEffect(() => {
    if (shouldReduce) {
      completeInstantly();
      return;
    }

    if (currentLine >= lines.length) {
      setIsComplete(true);
      onComplete?.();
      return;
    }

    const line = lines[currentLine];

    if (currentChar < line.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          newLines[currentLine] = line.substring(0, currentChar + 1);
          return newLines;
        });
        setCurrentChar((c) => c + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, lineDelay);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, lines, speed, lineDelay, shouldReduce, completeInstantly]);

  return (
    <div
      className={`font-mono text-sm ${className ?? ""}`}
      onClick={completeInstantly}
    >
      {displayedLines.map((line, i) => (
        <div key={i} className="flex">
          <span className="text-primary mr-2 select-none">&gt;</span>
          <span className="text-foreground/90">{line}</span>
        </div>
      ))}
      {!isComplete && (
        <motion.span
          className="inline-block w-2 h-4 bg-primary ml-2"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}
    </div>
  );
}
