import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Experience from './Experience';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            <img 
              src="https://media.licdn.com/dms/image/C5603AQEHIWfYTrATtQ/profile-displayphoto-shrink_200_200/0?e=1570665600&v=beta&t=8mmn-LhmDkZpT75BlHOQn6nQ4r8qflecmdamV8xnmB0"
              alt="photo of me"
              style={{height: '200px'}}
            />
            </div>
            <h2 style={{paddingTop: '2em'}}>Kevin Miller</h2>
            <h4 style={{color: 'grey'}}>Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>just a little blurb about my life and experience, yatta yatta </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1781 Orchid Ave.  Los Angeles, CA.</p>
            <h5>Phone</h5>
            <p>317-654-8915</p>
            <h5>Email</h5>
            <p>kmilsax@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          
          <Cell className="resume-right-col" col={8}>
            <Experience 
              start={2008}
              end={2012}
              title={'went to school'}
              description={'had a great time studying'}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;