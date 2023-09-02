module.exports = {
  content: ["./src/*.html"],
  theme: {
    screens:{
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container:{
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily:{
        roboto: "'Roboto', sans-serif",
        poppins: "'Poppins', sans-serif"
      },
      colors: {
        'primary': "#FD3057"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
