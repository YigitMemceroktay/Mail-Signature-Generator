const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        base: "600px",
        "32px": "32px",
        "72px": "72px",
        "150px": "150px",
        "300px": "300px",
        "100%": "100%",
        "34px": "34px",
      },
      width: {
        "40px": "40px",
        "145px": "145px",
        "475px": "475px",
        "300px": "300px",
        w31px: "w31px",
        "100%": "100%",
        "200px": "200px",
        "215px": "215px",
        "350px": "350px",
        "400px": "400px",
        "760px": "760px",
      },
      margin: {
        18: "4.5rem",
      },
      backgroundColor: {
        "mail-gray": "#E5E5E5",
        "login-red": "#E74825",
        "login-red-hover": "#CD3716",
        "janus-blue": "#3CABDB",
        "dark-blue": "#8833FF",
        "hover-dark-blue ": "#720EFF",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "100%": "100%",
      },
      maxHeight: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "100%": "100%",
      },
      textColor: {
        label: "#50565F",
        "dark-blue": "#6EA4BF",
        "login-red": "#E74825",
        "janus-dark-blue": "#167FFC",
      },
      borderColor: {
        input: "#D3D7DF",
        "login-red": "#ED9319",
      },
    },
    fontFamily: {
      poppins: ["Poppins"],
      inter: ["Inter"],
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
