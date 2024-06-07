import { useGlobalStore } from "@/stores/modules/global";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { initDynamicRouter } from "./dynamicRouter";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/dashboard"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/layout",
    redirect: "/dashboard", // 重定向主页
    name: "layout",
    component: () => import("@/layout/index.vue"),
    children: [
      // -----非全屏页面动态引入-----
    ]
  },

  // -----全屏页面引入-----

  // 错误页面
  {
    path: "/403",
    name: "403",
    component: () => import("@/components/ErrorMessage/403.vue"),
    meta: {
      title: "403页面"
    }
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/components/ErrorMessage/404.vue"),
    meta: {
      title: "404页面"
    }
  },
  {
    path: "/500",
    name: "500",
    component: () => import("@/components/ErrorMessage/500.vue"),
    meta: {
      title: "500页面"
    }
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/components/ErrorMessage/404.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach(async (to, from, next) => {
  const globalStore = useGlobalStore();
  // const userStore = useUserStore()
  // const authStore = useAuthStore()

  // // 判断是访问登陆页，有 Token 就在当前页面，没有 Token 重置路由到登陆页
  // if (to.path.toLocaleLowerCase() === LOGIN_URL) {
  //   if (userStore.token) return next(from.fullPath) // 保持原页面
  //   resetRouter() // 清除已加载动态路由
  //   return next()
  // }

  // // 判断是否有 Token，没有重定向到 login 页面
  // if (!userStore.token) return next({ path: LOGIN_URL, replace: true })

  // 如果没有菜单列表，就重新请求菜单列表并添加动态路由
  if (!globalStore.menuList.length) {
    await initDynamicRouter();
    return next({ ...to, replace: true });
  }

  next();
});

export default router;
