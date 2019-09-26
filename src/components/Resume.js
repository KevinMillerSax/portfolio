import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Experience from './Experience';
import Education from './Education';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <h2 style={{paddingTop: '0'}}>Kevin Miller</h2>
            <h4 style={{color: 'grey'}}>Web Developer</h4>
            <h5 style={{color: 'grey'}}>Los Angeles, CA.</h5>
            <hr className="resume-hr"/>
            <p> I’m a motivated front-end developer who’s passionate about new technologies and design. I communicate freely in  React, JavaScript, HTML, and CSS. I am focused on constantly learning new technologies and I apply this knowledge to make my websites scalable and to provide the best user experience.   </p>
            <hr className="resume-hr"/>
            <h5>Phone</h5>
            <p>317-654-8915</p>
            <h5>Email</h5>
            <p>kmilsax@gmail.com</p>
            <hr className="resume-hr"/>
            <a href="https://drive.google.com/open?id=1kkjjUAYRQzKMtnvRBfRdqlAm8pHM-Roe" target="_blank" style={{color: '#00b09b'}}>
              Get My Resume in PDF
            </a>
          </Cell>
          
          <Cell className="resume-right-col" col={8}>
            <h2>Work History</h2>
            <Experience 
              start={2019}
              end={'today'}
              title={'Web Developer'}
              description={`Contractor for A&K Global Enterprises, Inc. I'm building an eCommerce 
              platform that will sell gifts and musical instruments. `}
            />
            <Experience 
              start={2016}
              end={2019}
              title={'Musician - Carnival Corporation'}
              description={`Performed music on a variety of Carnival Cruise Ships. 
              I was responsible for marketing and advertising through demographic research and creative targeting.
              Also, I was chosen to be the Team Member of the Month for an engaging and proactive attitude. `}
            />
            <Experience 
              start={2014}
              end={2016}
              title={'Musician - Norwegian Cruise Lines'}
              description={`Performed Broadway productions in the main theaters of the ships: Oceania Marina and Norwegian Pearl. `}
            />
            <Experience 
              start={2013}
              end={2014}
              title={'English Teacher'}
              description={`Taught English in China at Yilin Peison International Institute.   `}
            />
            <hr className="resume-hr" style={{width: '100%'}} />
            <h3>Education</h3>
            <Education 
              start={2008}
              end={2012}
              title={'Ball State University'}
              major={'Music Technology'}
              minor={'Digital Media Production'}
            />
            <hr className="resume-hr" style={{width: '100%'}} />
            <h4>Skills:</h4>
            <p>JavaScript (ES6+), React, React-Native, jQuery, NodeJS, Express, MongoDB, Mongoose, SQL, HTML, CSS, SASS, WordPress, PHP, PhotoShop, terminal, Git, GitHub, MS Office </p>

            
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;