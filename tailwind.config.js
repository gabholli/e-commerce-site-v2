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
        // "productDetailMedium": [
        //   ". image title . .",
        //   ". image price . .",
        //   ". image desc desc .",
        //   ". image button . ."
        // ],
        "productDetailMedium": [
          ". . image . .",
          ". . title . .",
          ". . price . .",
          ". desc desc desc .",
          ". . button . ."
        ],
        "productDetailMobile": [
          "image",
          ".",
          "title",
          "price",
          "desc",
          "button"
        ],
        "allProducts": [
          ". products sidemenu ."
        ]
      },
      gridTemplateColumns: {
        'layoutMedium': 'repeat(5, 1fr)',
        "layoutMobile": "1fr"
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}