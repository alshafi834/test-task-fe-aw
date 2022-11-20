module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/_shared.scss"`,
      },
      scss: {
        additionalData: `@import "@/assets/_shared.scss";`,
      },
      less: {
        globalVars: {
          primary: "#fff",
        },
      },
    },
  },
};
