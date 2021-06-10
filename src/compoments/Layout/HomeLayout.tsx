/*
 * @Descripttion: 首页主布局
 * @version: 
 * @Author: JW
 * @Date: 2021-06-02 21:45:00
 */
import * as React from "react"
import RouteView, { IRouteViewProps } from "../../routes/RouteView"
import { Link } from 'react-router-dom'
const HomeLayout = (props:IRouteViewProps) => {
  return (
    <div>
      <Link to="/">首页</Link>
      <Link to="/hot">热评</Link>
      <RouteView {...props} />
    </div>
  )
}
export default HomeLayout