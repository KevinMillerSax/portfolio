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
            <h4 style={{color: 'grey'}}>Software Engineer</h4>
            <h5 style={{color: 'grey'}}>Los Angeles, CA.</h5>
            <hr className="resume-hr"/>
            <p>I’m a motivated full-stack developer who’s passionate about new technologies and design. I possess the skills to create elegant and user-friendly sites that increase customer retention. I make it a point to constantly learn new skills and grow as an engineer.
            Currently, I’m working as a full stack engineer for Silversheet, a medical credentialing company. </p>
            <hr className="resume-hr"/>
            <h5>Phone</h5>
            <p>317-654-8915</p>
            <h5>Email</h5>
            <p>kmilsax@gmail.com</p>
            <hr className="resume-hr"/>
            <a href="https://drive.google.com/file/d/1AGir7mp-tj3bNKMGMr8TtBrQ5CM3062b/view?usp=sharing" target="_blank" style={{color: '#00b09b'}}>
              Get My Resume in PDF
            </a>
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h2>Work History</h2>
            <Experience
              start={2020}
              end={'Present'}
              title={'Software Engineer - Silversheet'}
              description={`Building and maintaining software for credentialing doctors and medical
              professionals.  Working with React and Ruby on Rails.`}
              link="https://www.silversheet.com"
              linkDescription="Silversheet.com"
            />
            <Experience
              start={2019}
              end={2020}
              title={'Front End Developer - InvestCloud'}
              description={`Creating interactive pages for financial institutions.  Using Angular components
              and a discributed databases.`}
              link="https://www.investcloud.com/"
              linkDescription="InvestCloud.com"
            />
            <Experience
              start={2019}
              end={2019}
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
            <p>JavaScript, Ruby, Rails, React, Redux, PHP, NodeJS, SQL, MongoDB, React Native, Firebase, WordPress, Python, HTML5, CSS, SASS, RSpec3, mintiest, git, Heroku
</p>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;