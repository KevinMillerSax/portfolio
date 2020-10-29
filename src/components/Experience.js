import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class Experience extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <p>{this.props.start} ~ {this.props.end}</p>
          </Cell>
          <Cell col={8}>
            <h4 style={{margin: '0'}}>{this.props.title}</h4>
            <p>{this.props.description}  <a href={this.props.link} target="_blank">{this.props.linkDescription}</a></p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Experience;