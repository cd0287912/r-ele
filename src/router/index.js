import React from 'react'
import {Redirect} from 'react-router-dom'
import adminRouters from "./admin"
import WebLayout from "./../page/web/layout"
import Home from "./../page/web/home"
import Guide from "./../page/web/guide"
import Readme from "./../page/web/readme"
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
        path: '/page',
        exact: true,
        component: Guide
      },
      {
        path: '/readme',
        exact: true,
        component: Readme
      },
      {
        path:'*',
        render:() => (<Redirect to="/404"/>)
      }
    ]
  }
];

export default routes
