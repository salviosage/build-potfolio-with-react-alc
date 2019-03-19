import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Welcome from './components/welcome/index';
import About from './components/about/index';
import Contact from './components/contact/index';
import Blog from './components/blog/index';
import Header from './components/header/index';
import Footer from './components/footer/index'


const AppRouter = () => (
<BrowserRouter>
<div>
<Header />
<Switch>
<Route path="/" component={Welcome} exact={true} />
<Route path="/about" component={About} />
<Route path="/contact" component={Contact} />
<Route path="/blog" component={Blog} />

</Switch>
</div>
<Footer/>
</BrowserRouter>
);
export default AppRouter;


