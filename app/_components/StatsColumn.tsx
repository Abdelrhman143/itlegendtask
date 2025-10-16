import { Clock, Globe, LibraryBig, UsersRound } from "lucide-react";
import React from "react";

type Stats = {
  icon: React.ReactNode;
  title: string;
  content: string;
};

export default function StatsColumn() {
  const stats: Stats[] = [
    {
      icon: <Clock />,
      title: "Duration",
      content: "3 Weeks",
    },
    {
      icon: <LibraryBig />,
      title: "Lessons",
      content: "8",
    },
    {
      icon: <UsersRound />,
      title: "Enrolled",
      content: "65 Student",
    },
    {
      icon: <Globe />,
      title: "Language",
      content: "English",
    },
  ];

  return (
    <>
      <ul className="flex-1 divide-y divide-gray-300">
        {stats.map((stat) => (
          <li
            key={stat.title}
            className="flex justify-between items-center py-5"
          >
            <div className="flex justify-between items-center gap-2">
              <span>{stat.icon}</span>
              <span>{stat.title}</span>
            </div>
            <span className="font-semibold">{stat.content}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
