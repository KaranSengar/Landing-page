/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",  // Next.js App Router ke liye
      "./pages/**/*.{js,ts,jsx,tsx}", // Old pages router ke liye
      "./components/**/*.{js,ts,jsx,tsx}", // Components ke liye
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  