import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            {/* <img
              src="https://media.licdn.com/dms/image/C5603AQEHIWfYTrATtQ/profile-displayphoto-shrink_200_200/0?e=1570665600&v=beta&t=8mmn-LhmDkZpT75BlHOQn6nQ4r8qflecmdamV8xnmB0"
              alt="me"
              className = "avatar-img"
            /> */}
            <div className="banner-text">
              <h1>Web Developer</h1>
              <hr/>
              <p>JavaScript | React | PHP | NodeJS | HTML | CSS | WordPress | MongoDB | Mongoose | jQuery</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/k-p-miller/" target="_blank">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/KevinMillerSax" target="_blank">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;