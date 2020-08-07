
module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // mac: {
        //   icon: "./src/assets/로고.png"
        // },
        win: {
          icon: "./src/assets/로고.png",
        },
        productName: "onMomtouchEdu",
        publish: {
          provider: "github",
          owner: "wlsrms9300",
          repo: "Electron-updater",
          token: "579c4d59d94c1cfc83c7d4f4883b6627df892979" 
        }
      }
    }
  }
}