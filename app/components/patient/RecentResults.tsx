"use client";

import React from "react";

interface Result {
  test: string;
  result: string;
  date: string;
}

interface Props {
  results: Result[];
}

export default function RecentResults({ results }: Props) {
  return (
    <div className="bg-white border rounded-2xl p-6 shadow-sm overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b text-gray-600 text-sm">
            <th className="py-3">Test</th>
            <th>Result</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, index) => (
            <tr
              key={index}
              className="border-b last:border-none hover:bg-gray-50"
            >
              <td className="py-3 font-medium text-gray-800">{r.test}</td>
              <td>{r.result}</td>
              <td>{r.date}</td>
              <td>
                <button className="text-gray-400 hover:text-gray-600">
                  ⋮
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
