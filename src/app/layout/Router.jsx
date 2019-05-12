import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Blog from '../Blog'
import BlogPost from '../blog/BlogPost'
const Router = () => (
  <Switch>
    <Route exact path='/' component={Blog}/>
    <Route exact path='/post' component={Blog}/>
    <Route path='/post/:blogPost' component={BlogPost}/>
  </Switch>
)
export default Router