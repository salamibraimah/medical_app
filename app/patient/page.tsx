"use client";

import React from "react";
import SideMenu from "../components/patient/SideMenu";
import StatCards from "../components/patient/StatCards";
import Appointments from "../components/patient/Appointments";
import RecentResults from "../components/patient/RecentResults";
import QuickActions from "../components/patient/QuickActions";

export default function PatientDashboard() {
  const stats = [
    { title: "Upcoming Appointments", value: 4 },
    { title: "Lab Results", value: 5 },
    { title: "Prescriptions", value: 2 },
    { title: "Messages", value: 1 },
  ];

  const appointments = [
    { doctor: "Dr. Smith", type: "Consultation", date: "20 Feb 2026", status: "Upcoming" },
    { doctor: "Dr. Lee", type: "Lab Test", date: "22 Feb 2026", status: "Upcoming" },
    { doctor: "Dr. Adams", type: "Review", date: "25 Feb 2026", status: "Confirmed" },
    { doctor: "Dr. Brown", type: "Follow-up", date: "28 Feb 2026", status: "Pending" },
  ];

  const recentResults = [
    { test: "Blood Sugar", result: "Normal", date: "15 Feb 2026" },
    { test: "Cholesterol", result: "Slightly High", date: "10 Feb 2026" },
  ];

  const quickActions = [
    {
      label: "Book Appointment",
      icon: "📅",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      label: "Upload Lab Result",
      icon: "📤",
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      label: "Request Prescription",
      icon: "💊",
      color: "bg-purple-600 hover:bg-purple-700",
    },
    {
      label: "Start Consultation",
      icon: "💬",
      color: "bg-orange-500 hover:bg-orange-600",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideMenu />

      <main className="flex-1 p-8 space-y-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Patient Dashboard
        </h1>

        {/* Quick Actions */}
        <QuickActions actions={quickActions} />

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <StatCards key={idx} title={s.title} value={s.value} />
          ))}
        </div>

        {/* Appointments */}
        <Appointments appointments={appointments} />

        {/* Results */}
        <RecentResults results={recentResults} />
      </main>
    </div>
  );
}
