import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {activeTab: 0};
  }
  toggleCategories() {
    if(this.state.activeTab === 0) {
      return(
        <div className="projects-grid">


          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1200/1*BFV8Gwt5BILa-xv04IK2ng.png) center/cover'}}>Project #1</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </CardText>
            <CardActions>
            <a href="https://github.com/KevinMillerSax" target="_blank"><Button colored>GitHub</Button></a>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>

          
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return(
        <div><h1>This is JavaScript/React</h1></div>
      );
    }else if (this.state.activeTab === 2) {
      return(
        <div><h1>This is NodeJS</h1></div>
      );
    }else if (this.state.activeTab === 3) {
      return(
        <div><h1>This is WordPress</h1></div>
      );
    }
  }
  

  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} 
          onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
            <Tab>All Projects</Tab>
            <Tab>React/JavaScript</Tab>
            <Tab>NodeJS</Tab>
            <Tab>WordPress</Tab>
        </Tabs>
       
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>  
      </div>
    )
  }
}

export default Projects;