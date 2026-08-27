"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Bot, Send, Sparkles, X, Database, MessageSquare } from "lucide-react";
import { answerQuery, type RagSource } from "@/lib/rag";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
  sources?: RagSource[];
}

const SUGGESTIONS = [
  "What projects has Atharva built?",
  "What are his skills?",
  "Tell me about his robotics work",
  "What about his experience?",
];

export default function AIChatPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm Atharva's AI assistant. I use Retrieval-Augmented Generation (RAG) over his portfolio knowledge base to answer your queries.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const shouldReduce = useReducedMotion();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || isTyping) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setIsTyping(true);

    await new Promise((r) => setTimeout(r, 550 + Math.random() * 600));

    const result = answerQuery(text);
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: result.answer,
        sources: result.sources,
      },
    ]);
    setIsTyping(false);
  };

  return (
    <>
      {/* Floating trigger button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
        className="fixed bottom-6 right-6 z-[80] w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg glow-box cursor-pointer"
      >
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
        {isOpen ? <X size={22} /> : <MessageSquare size={22} />}
      </motion.button>

      {/* Popup panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={
              shouldReduce
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.9, y: 20 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={
              shouldReduce
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.9, y: 20 }
            }
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-4 left-4 sm:left-auto sm:right-6 z-[70] sm:w-[400px] glass rounded-2xl overflow-hidden flex flex-col shadow-2xl"
            style={{ height: "min(600px, calc(100vh - 8rem))" }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-border shrink-0">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Bot size={18} className="text-primary" />
              </div>
              <div>
                <div className="text-sm font-mono text-foreground flex items-center gap-2">
                  ATHARVA AI
                  <span className="px-1.5 py-0.5 rounded bg-primary/15 text-[9px] font-mono text-primary tracking-wider">
                    RAG
                  </span>
                </div>
                <div className="text-[10px] font-mono text-success">
                  ● KNOWLEDGE BASE ONLINE
                </div>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <Sparkles
                  size={14}
                  className="text-primary animate-glow-pulse"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close"
                  className="text-muted hover:text-foreground transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "flex flex-col",
                      msg.role === "user" ? "items-end" : "items-start"
                    )}
                  >
                    <div
                      className={`max-w-[85%] rounded-lg px-4 py-3 text-sm whitespace-pre-line ${
                        msg.role === "user"
                          ? "bg-primary text-white rounded-br-sm"
                          : "bg-surface border border-border text-foreground rounded-bl-sm"
                      }`}
                    >
                      {msg.content}
                    </div>
                    {msg.sources && msg.sources.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2 max-w-[85%]">
                        {msg.sources.map((s) => (
                          <span
                            key={s.title}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-mono text-primary"
                          >
                            <Database size={9} />
                            {s.title}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              {isTyping && (
                <div className="flex items-start">
                  <div className="bg-surface border border-border rounded-lg px-4 py-3">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-primary"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-muted ml-2 self-end mb-1">
                    RETRIEVING…
                  </span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-5 py-4 border-t border-border shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about projects, skills, experience..."
                  className="flex-1 px-4 py-2.5 bg-surface border border-border rounded-lg text-sm text-foreground font-mono focus:border-primary focus:outline-none transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  aria-label="Send"
                  className="px-4 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-30 cursor-pointer"
                >
                  <Send size={16} />
                </motion.button>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {SUGGESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      setInput(q);
                    }}
                    className="px-2 py-1 text-[10px] font-mono text-muted border border-border rounded hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}