import React from 'react';
import { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { Grid, Paper } from 'material-ui';
import Form from './Form'

const styles = theme => ({
  container: {
    backgroundColor: '#eee',
    height: '100%',
  },
  paper: {
    padding: '32px 16px',
  },
  form: {
    width: '450px',
  }
});

class SignIn extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        direction={'row'}
        justify={'center'}
        alignItems={'center'}
        className={classes.container}
      >
        <Grid
          item 
          className={classes.form}
        >
          <Paper className={classes.paper}>
            <Form />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SignIn);
