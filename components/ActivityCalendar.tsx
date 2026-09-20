"use client";

import { cloneElement } from "react";
import { GitHubCalendar } from "react-github-calendar";

const greyTheme = {
  light: ["#eeeeee", "#a0a0a0", "#444444", "#2c2c2c", "#131313"],
  dark: ["#e9e6e6", "#888888", "#424242", "#252525", "#0e0e0e"],
};


export const ActivityCalendar = ({ username }: { username: string }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="mb-6">
        <h2 className="text-xl md:text-4xl text-black">
          GitHub Activity
        </h2>
      </div>
      <div className="bg-white dark:bg-neutral-200 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl border border-neutral-200 dark:border-neutral-800 transition-all duration-300 w-full flex justify-center">
        <GitHubCalendar
          username={username}
          theme={greyTheme}
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          colorScheme="light"
        />
      </div>
    </div>
  );
};
