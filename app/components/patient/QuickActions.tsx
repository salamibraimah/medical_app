"use client";

import React from "react";

interface QuickAction {
  label: string;
  icon: string;
  color: string;
}

interface Props {
  actions: QuickAction[];
}

export default function QuickActions({ actions }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {actions.map((action, index) => (
        <button
          key={index}
          className={`flex items-center gap-3 p-4 rounded-xl text-white font-medium shadow-sm hover:shadow-md transition ${action.color}`}
        >
          <span className="text-xl">{action.icon}</span>
          {action.label}
        </button>
      ))}
    </div>
  );
}
