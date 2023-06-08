/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'buy-img' : "url('https://hously-react.vercel.app/static/media/01.22de4da0428b035e9d2b.jpg')",
      },
      fontFamily: {
        'LeagueSpartan' : "'League Spartan', sans-serif",
      }
    },
  },
  plugins: [],
}

