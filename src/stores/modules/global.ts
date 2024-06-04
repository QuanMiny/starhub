import { defineStore } from "pinia"
import { globalState } from "../interface"
import axios from "axios"
import { ResultData } from "@/api/interface"

export const useGlobalStore = defineStore({
  id: "ird-global",
  state: (): globalState => ({
    isDark: false,
    menuList: []
  }),
  getters: {},
  actions: {
    async setMenuList() {
      const res = await axios.get<ResultData<Menu.MenuOptions[]>>(
        "/src/assets/json/menuList.json"
      )
      if (res.data.code === 200) {
        this.menuList = res.data.data
      } else {
        this.menuList = []
      }
    }
  }
})
