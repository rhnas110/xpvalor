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
