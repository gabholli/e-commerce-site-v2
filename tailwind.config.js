/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'arial': ['Arial', 'Helvetica', 'sans-serif'],
    },
    extend: {
      minHeight: {
        screen: ["100vh", "100svh"]
      },
      gridTemplateAreas: {
        "productDetail": [
          ". image title . .",
          ". image price . .",
          ". image desc desc ."
        ]
      },
      gridTemplateColumns: {
        'layout': 'repeat(5, 1fr)',
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}