import React, {Component} from 'react';
import {Dialog, DialogTitle, DialogContent, DialogActions, Button} from 'react-mdl';


class MyDialog extends Component {
  render() {
    return(
      <div>
        <Dialog style={{width: "800px"}}open={this.state.openDialog}>
          <DialogTitle><img src="https://i.axs.com/2017/03/27477-optimized_58bf5972dde3a.png"></img></DialogTitle>
          <DialogContent>
            <p>Render some data here concerning the project at hand</p>
          </DialogContent>
          <DialogActions>
            <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default MyDialog;