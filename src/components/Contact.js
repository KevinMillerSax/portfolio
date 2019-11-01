import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import kev from '../images/kevin-headshot.jpeg';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body" style={{overflow: 'scroll'}}>
        <Grid className="contact-grid">
          <Cell col="6">
            <h2>Me:</h2>
            <img 
              src= {kev}
              alt="photo of me"
              style={{height: '250px'}}
            />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Feel free to get in touch!</p>
          </Cell>
          <Cell col="6">
            <h2>Contact:</h2>
            <hr/>
          <div className="contact-list">
          <List>
            <ListItem>
              <ListItemContent className="contact-list-item">
                <div>
                <i className="fa fa-envelope" aria-hidden="true"></i>   
                  kmilsax@gmail.com
                </div>
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent className="contact-list-item">
                <div>
                  <i className="fa fa-phone-square" aria-hidden="true"></i>
                  317-654-8915
                </div>
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent className="contact-list-item">
                <div>
                <i className="fa fa-linkedin" aria-hidden="true"></i>
                <a href="https://www.linkedin.com/in/k-p-miller/" target="_blank" style={{color:'#00b09b'}}>LinkedIn </a>
                </div>
              </ListItemContent>
            </ListItem>
          </List>
          </div>
          
          
          </Cell>
        </Grid>
        
      </div>
    )
  }
}

export default Contact;