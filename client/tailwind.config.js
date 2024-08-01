/** @type {import('tailwindcss').Config} */ 
module.exports = {
  "content": [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
    "extend": {
      "colors": {
        "white": "#fff",
        "black": "#000",
        "darkblue": "#16008b",
        "violet": "#ff66f0",
        "dodgerblue": "#6691ff",
        "darksalmon": "#f19576",
        "darkturquoise": "#43e6fc",
        "pink": "#ffc0c0",
        "darkslategray": {
          "100": "#353535",
          "200": "rgba(47, 47, 47, 0.17)"
        },
        "mediumblue": "#0047ff",
        "mediumpurple": "#b38bfa",
        "lavender": "#dae5f5",
        "gray": "rgba(0, 0, 0, 0.63)",
        "lightgray": "#ccc",
        "darkgray": "#9a9a9a",
        "midnightblue": "#001f8b"
      },
      "spacing": {},
      "fontFamily": {
        "roboto": "Roboto"
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      "borderRadius": {
        "mini": "15px",
        "7xs-5": "5.5px",
        "8xs": "5px",
        "4xs": "9px"
      }
    },
    "fontSize": {
      "5xl-1": "24.1px",
      "lgi": "19px",
      "5xl": "24px",
      "lg": "18px",
      "inherit": "inherit"
    },
    "screens": {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "mq1025": {
        "raw": "screen and (max-width: 1025px)"
      },
      "mq975": {
        "raw": "screen and (max-width: 975px)"
      },
      "mq450": {
        "raw": "screen and (max-width: 450px)"
      }
    }
  },
  "corePlugins": {
    "preflight": false
  }
}