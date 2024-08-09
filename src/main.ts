import { createApp } from "vue"
import "./index.css"
import App from "./App.vue"
import router from "./router"
import { VueQueryPlugin } from "@tanstack/vue-query"
import { OhVueIcon, addIcons } from "oh-vue-icons"
import {
  FaStarAndCrescent,
  RiMoonFoggyFill,
  RiSunFoggyFill,
  BiPlayCircleFill,
  BiPauseCircleFill,
  MdMenubook,
  BiInfoCircleFill,
  MdArrowupward,
  MdMenuopen,
  RiMenuUnfoldLine,
} from "oh-vue-icons/icons"

addIcons(
  FaStarAndCrescent,
  RiMoonFoggyFill,
  RiSunFoggyFill,
  BiPlayCircleFill,
  BiPauseCircleFill,
  MdMenubook,
  BiInfoCircleFill,
  MdArrowupward,
  MdMenuopen,
  RiMenuUnfoldLine
)

const app = createApp(App)
app.component("v-icon", OhVueIcon)
app.use(router)
app.use(VueQueryPlugin)
app.mount("#app")
