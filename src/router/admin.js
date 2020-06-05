import React from "react"
import Auth from "./../components/auth"
import login from "./../page/admin/login"
import Layout from "./../page/admin/layout"
import Aashboard from "./../page/admin/dashboard"
import Person from "./../page/admin/person"
import { Redirect } from "react-router-dom"
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
        path:'/admin/person',
        component: Auth(Person)
      },
      {
        path:'*',
        // eslint-disable-next-line react/react-in-jsx-scope
        render:() => (<Redirect to="/admin/dashboard"/>)
      }
    ]
  }
]

export default routes