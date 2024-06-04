import router from '@/routers/index'
import { useGlobalStore } from '@/stores/modules/global'
import { RouteRecordRaw } from 'vue-router'

// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob('@/views/**/*.vue')

export const initDynamicRouter = async () => {
  const globalStore = useGlobalStore()
  try {
    await globalStore.setMenuList()

    // 添加动态路由  flatMenuListGet 递归将菜单全部平铺
    globalStore.menuList.forEach((item) => {
      item.children && delete item.children
      if (item.component && typeof item.component == 'string') {
        item.component = modules['/src/views' + item.component + '.vue']
      }
      // 插入layout
      router.addRoute('layout', item as unknown as RouteRecordRaw)
    })
  } catch (error) {
    return Promise.reject(error)
  }
}
