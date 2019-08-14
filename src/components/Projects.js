import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';
import {projects} from '../constants/constants';
import js from '../images/js.png'


class Projects extends Component {
  constructor(props){
    super(props);
  }
  createCards() {
      return(
        <div className="projects-grid">
          {projects.map((el, index) => (
            
            <Card key = {index}  shadow={5} style={{minWidth: '350px',margin: "0px auto 20px auto"}}>
              <CardTitle  style={{color: '#fff', height: '200px', background: el['imageUrl']}}></CardTitle>
              <h5>{el['title']}</h5>
              <CardText>
                {el['text']}
              </CardText>
              <CardActions>

                <a href={el['github']} target="_blank"><Button colored>GitHub</Button></a>
                <a href={el['buttonTarget']} target="_blank"><Button colored>{el['buttonText']}</Button></a>
                
              </CardActions>
              <CardText style={{paddingTop: '0px'}}>
                {el['icons'].map((image, index) => (
                  <img key= {index} height="50px" width="50px"src={image}></img>
                ))}
              </CardText>
            </Card>

           ))
          }
        </div>
      );
  }
  

  render() {
    return(
      <div>   
        <Grid>
          <Cell col={12}>
            <div className="content">{this.createCards()}
            </div>
          </Cell>
        </Grid>  
      </div>
    )
  }
}

export default Projects;