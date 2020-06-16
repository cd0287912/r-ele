import React from 'react'
import {Redirect} from 'react-router-dom'
import adminRouters from "./admin"
import WebLayout from "./../page/web/layout"
import Home from "./../page/web/home"
import Guide from "./../page/web/guide"
import NotFound from "./../page/404"

const routes = [
  {
    path:'/404',
    exact: true,
    component:NotFound
  },
  ...adminRouters,
  {
    path:'/',
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
        path: '/guide',
        exact: true,
        component: Guide
      },
      {
        path:'*',
        render:() => (<Redirect to="/404"/>)
      }
    ]
  }
]

export default routes