module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        win: {
          icon: "./src/assets/로고.png",
        },
        productName: "onMomtouchEdu"
      }
    }
  }
}