import { type ClassValue, clsx } from "clsx";
import { title } from "process";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomDelay() {
  const numbers = [100, 200, 300, 500, 700, 1000];
  const randomIndex = Math.floor(Math.random() * numbers.length);
  const num = numbers[randomIndex];
  return `delay-${num}`;
}

export function randomTitle() {
  const titles = [
    "Senior Software Engineer",
    "Senior Software Developer",
    "Engineering Leader",
    "Software Engineering Manager",
    "Engineering Cat Dad",
    "Developer of Things",
  ];

  const randomIndex = Math.floor(Math.random() * titles.length);
  return titles[randomIndex];
}
