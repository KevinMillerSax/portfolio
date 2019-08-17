import React, {Component} from 'react';
import {Grid, Cell, Card, CardTitle, CardActions, Button, CardText, Dialog, DialogTitle, DialogContent, DialogActions} from 'react-mdl';
import {projects} from '../constants/constants';



class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    };
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    
  }

  handleOpenDialog(text, photos) {
    this.setState({
      openDialog: true,
      text: text,
      photos: photos
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
                ? <a onClick={() => this.handleOpenDialog(el['description'], el['photo1'])}><Button colored>{el['buttonText']}</Button></a> 
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
    const photos = this.state.photos;
    return(
      <div>   
        <Grid>
          <Cell col={12}>
            <div className="content">{this.createCards()}
            </div>
          </Cell>

          {/* modal start */}
          <Cell>
            
          
            <Dialog className= "dialog" style={{width: "800px", paddingBottom: '0px'}}open={this.state.openDialog}>
              <DialogTitle>
                <div className="image-container">
                  {photos && photos.map((photo, index) => (
                    <img key= {index} style={{height: '300px'}}src={photo}></img>
                  ))}
                </div>
              </DialogTitle>
              <DialogContent>
                <p>{this.state.text}</p>
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