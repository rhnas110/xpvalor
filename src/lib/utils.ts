import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";
import null_image from "@/assets/null.png";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

interface Data {
  uuid: string | number;
}
export const generateDummyData = (val: number) => {
  const data: Data[] = [];
  for (let i = 0; i < val; i++) {
    const uuid = uuidv4();
    data.push({ uuid });
  }
  return data;
};

export const generateImageIfNull = (val: string | null) => {
  let image;
  if (val) image = val;
  else image = null_image;
  return image;
};

export function generateUsername(email: string): string {
  const res = email.split("@")[0];
  const withNoDigits = res.replace(/\d+/g, "");
  const randomNumber = randomIntFromInterval(100000, 999999);
  return withNoDigits + randomNumber;
}

function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const minimizeString = (str: string, num: number): string => {
  if (str?.length > num) return str.slice(0, num) + "...";
  return str;
};
