/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from "tailwindcss"
import design from "./lib/design.json"

function flattenObject(
  obj: any,
  parentKey = "",
  result: Record<string, any> = {}
) {
  Object.keys(obj).forEach((key) => {
    const newKey = parentKey ? `${parentKey}-${key}`.toLowerCase() : key
    if (obj[key] && typeof obj[key] === "object") {
      flattenObject(obj[key], newKey, result)
    } else {
      result[newKey] = obj[key]
    }
  })
  return result
}

function FontSize(fontMap: Record<string, any>) {
  return Object.keys(fontMap).reduce(
    (fsMap, key) => {
      const fs = fontMap[key]
      fsMap[key] = [
        `${fs.fontSize}px`,
        {
          lineHeight: `${fs.lineHeight * fs.fontSize}px`,
          fontWeight: `${fs.fontWeight}`,
        },
      ]
      return fsMap
    },
    {} as Record<string, any>
  )
}

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./storybook/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: flattenObject(design.color),
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      fontSize: (() => {
        const typography = { ...design.typography } as any
        // delete typography['fontFamily'];
        return FontSize(typography)
      })(),
    },
  },
  plugins: [],
}
export default config
