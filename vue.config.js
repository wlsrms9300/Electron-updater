
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
          token: "83d25e7e319ea30867817355a3d8524eb0fe5874" 
        }
      }
    }
  }
}