
import React from 'react';
import './index.scss';

import Header from './components/header'
import Nav from './components/nav'
import Container from './components/container'
import Simulator from './components/simulator'

class IndexPage extends React.Component{
  state = {

  }
  render(){
    return (
      <div className="page index-page">
        <Header />
        <Nav />
        <Container />
        <Simulator />
      </div>
    ) 
  }
}

export default IndexPage;
