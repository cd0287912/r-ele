import React from "react"
import { Redirect } from "react-router-dom"
import Auth from "./../components/auth"
import login from "./../page/admin/login"
import Layout from "./../page/admin/layout"
import Aashboard from "./../page/admin/dashboard"
import Person from "./../page/admin/person"
import Pages from "./../page/admin/page"
import Publish from "./../page/admin/publish" 
import Classify from "./../page/admin/classify" 
// 
const routes = [
  {
    path:'/admin/login',
    exact:true,
    component: login
  },
  {
    path:'/admin',
    component: Layout,
    routes:[
      {
        path:'/admin',
        exact:true,
        component: Auth(Aashboard)
      },
      {
        path:'/admin/dashboard',
        exact:true,
        component: Auth(Aashboard)
      },
      {
        path:'/admin/pages',
        exact:true,
        component: Auth(Pages)
      },
      {
        path:'/admin/publish',
        exact:true,
        component: Auth(Publish)
      },
      {
        path:'/admin/classify',
        exact:true,
        component: Auth(Classify)
      },
      {
        path:'/admin/person',
        exact:true,
        component: Auth(Person)
      },
      {
        path:'*',
        render:() => (<Redirect to="/404"/>)
      }
    ]
  }
]

export default routes