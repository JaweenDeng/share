/*
 * @Descripttion: 路由配置表
 * @Author: JW
 * @Date: 2021-06-08 21:36:03
 */
import HomeLayout from "../compoments/Layout/HomeLayout";
import { lazy } from "react"
const RouteConfig = [
  {
    path: "/",
    component: HomeLayout,
    children: [
      {
        path: "/index",
        component: lazy(() => import("../pages/index")),
      },
      {
        path: "/hot",
        component: lazy(() => import("../pages/Hot")),
      },
      {
        path: "/",
        redirect: "/index",
      }
    ],
  },
]

export default RouteConfig
