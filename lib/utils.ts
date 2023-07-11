import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomDelay() {
  const numbers = [100, 200, 300, 500, 700, 1000];
  const randomIndex = Math.floor(Math.random() * 6);
  const num = numbers[randomIndex];
  return `delay-${num}`;
}
