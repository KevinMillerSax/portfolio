import React, {Component} from 'react';
import {Grid, Cell, Card, CardTitle, CardActions, Button, CardText, Dialog, DialogTitle, DialogContent, DialogActions} from 'react-mdl';
import {projects} from '../constants/constants';
import MyDialog from './MyDialog'


class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
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
              {el['buttonText'] === 'Details' 
                ? <a onClick={this.handleOpenDialog}><Button colored>{el['buttonText']}</Button></a> 
                : <a href={el['buttonTarget']} target="_blank"><Button colored>{el['buttonText']}</Button></a> }    
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

          {/* modal start */}
          <Cell>
            

            <Dialog style={{width: "800px"}}open={this.state.openDialog}>
              <DialogTitle><img src="https://i.axs.com/2017/03/27477-optimized_58bf5972dde3a.png"></img></DialogTitle>
              <DialogContent>
                <p>Render some data here concerning the project at hand</p>
              </DialogContent>
              <DialogActions>
                <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
              </DialogActions>
            </Dialog>

          </Cell>
          {/* modal end */}

        </Grid>  
      </div>
     
      
      
    );
  }
}

export default Projects;