// app/components/patient/StatCards.tsx
"use client";

import React from "react";

interface StatCardProps {
  title: string;
  value: number | string;
}

export default function StatCards({ title, value }: StatCardProps) {
  return (
    <div className="border border-gray-300 p-4 rounded-lg transition hover:shadow-lg bg-white/50">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-700 text-xl font-bold">{value}</p>
    </div>
  );
}
