"use client";

import { motion } from "motion/react";
import { SYSTEM_STATUS, SITE } from "@/lib/constants";

export default function SystemStatus() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="glass rounded-xl p-4 w-full max-w-xs"
    >
      <div className="text-xs font-mono text-primary mb-3 tracking-widest">
        SYSTEM STATUS
      </div>
      <div className="space-y-2">
        {SYSTEM_STATUS.map((item) => (
          <div key={item.label} className="flex items-center justify-between">
            <span className="text-xs text-muted font-mono">{item.label}</span>
            <div className="flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${item.color === "text-emerald-400" ? "bg-emerald-400" : "bg-violet-400"} animate-glow-pulse`} />
              <span className={`text-xs font-mono ${item.color}`}>
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-border">
        <div className="text-[10px] font-mono text-muted">
          Last deployment: 2m ago
        </div>
      </div>
    </motion.div>
  );
}
