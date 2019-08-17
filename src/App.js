import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/Main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
    <Header className="header-color" title={<Link className="front-title" to="/" > Kevin Miller </Link>} scroll>
      <Navigation>
          <Link className="front-link" to="/resume">Resume</Link>
          {/* <Link className="front-link" to="/aboutme">About Me</Link> */}
          <Link className="front-link" to="/projects">Projects</Link>
          <Link className="front-link" to="/contact">Contact</Link>
      </Navigation>
    </Header>
      <Drawer title={<Link to="/" style={{color:"black", textDecoration: 'none'}}> Kevin Miller </Link>} >
        <Navigation>
            <Link to="/resume">Resume</Link>
            {/* <Link to="/aboutme">About Me</Link> */}
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </Navigation>
      </Drawer>
      <Content>
        <div className="page-content" />
        <Main/>
      </Content>
    </Layout>
</div>
    );
  }
}

export default App;
