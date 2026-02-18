"use client";

import React from "react";

interface Appointment {
  doctor: string;
  type: string;
  date: string;
  status: string;
}

interface Props {
  appointments: Appointment[];
}

export default function Appointments({ appointments }: Props) {
  return (
    <div className="space-y-4">
      {appointments.map((appt, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
        >
          {/* Left Section */}
          <div>
            <div className="text-lg font-semibold text-gray-800">
              {appt.doctor}
            </div>
            <div className="text-gray-600">{appt.type}</div>
            <div className="text-sm text-gray-500 mt-1">
              {appt.date}
            </div>
            <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600">
              {appt.status}
            </span>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <button className="text-gray-400 hover:text-gray-600">
              ⋮
            </button>
            <button className="px-4 py-2 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100">
              Cancel
            </button>
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Reschedule
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
