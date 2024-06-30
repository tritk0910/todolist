import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...inputs) {
  // merge code tailwind theo điều kiện thôi, cái này t sẽ giải thích sau
  return twMerge(clsx(inputs));
}
