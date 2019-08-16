import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class Education extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <p>{this.props.start} ~ {this.props.end}</p>
          </Cell>
          <Cell col={8}>
            <h4 style={{margin: '0'}}>{this.props.title}</h4>
            <p style={{marginBottom: '0px'}}><b>Major: </b>{this.props.major}</p>
            <p><b>Minor: </b>{this.props.minor}</p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Education;