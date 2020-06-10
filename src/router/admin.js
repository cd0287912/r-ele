// import React from "react"
import Auth from "./../components/auth"
import login from "./../page/admin/login"
import Layout from "./../page/admin/layout"
import Aashboard from "./../page/admin/dashboard"
import Person from "./../page/admin/person"
import Pages from "./../page/admin/page"
// import { Redirect } from "react-router-dom"
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
        path:'/admin/person',
        exact:true,
        component: Auth(Person)
      },
      // {
      //   path:'*',
      //   render:() => (<Redirect to="/admin/dashboard"/>)
      // }
    ]
  }
]

export default routes