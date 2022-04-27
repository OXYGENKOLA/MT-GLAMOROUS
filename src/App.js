import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Layout } from './components/Layout';
import Navbar from './components/Navibar';
import Carousel from './components/Carousel';
import Home from './components/Home';
import Contact from './components/Contact';
import Service from './components/Service';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import {Card} from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Carousel />
          <Layout>
          <Switch>
            <Route exact path= "/" component={Home} />
            <Route exact path= "/components/Contact" component={Contact} />
            <Route exact path= "/components/Service" component={Service} />
            <Route exact path= "/components/About" component={About} />
          </Switch>
          <Card />
          </Layout>
          </Router>
         <Footer />
          </React.Fragment>
          
  );
  
};}


export default App;