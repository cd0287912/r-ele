import adminRouters from "./admin"

import WebLayout from "./../page/web/layout"
import Home from "./../page/web/home"
import NotFound from "./../page/404"

const routes = [
  ...adminRouters,
  {
    path:'/',
    exact: true,
    component: WebLayout,
    routes:[
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/home',
        exact: true,
        component: Home
      },
      {
        path:'*',
        component: NotFound
      }
    ]
  }
]

export default routes