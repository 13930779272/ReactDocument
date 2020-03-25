import React from 'react'
import {Switch} from 'react-router-dom'
import routes,{routerList} from './routers'
export default (<Switch>{routerList(routes)}</Switch>)