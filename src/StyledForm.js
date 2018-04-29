import React from 'react';
import { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { Grid, Paper } from 'material-ui';
import './App.css';
import Form from './Form'

const styles = theme => ({
  container: {
    height: '100%',
  },
  paper: {
    padding: '32px 16px',
  }
});

class StyledForm extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container
            spacing={24}
            direction={'row'}
            justify={'center'}
            alignItems={'center'}
            className={classes.container}
      >
        <Grid item 
              xs={12} 
              sm={6}
              md={5}
              lg={4}
              xl={3}
        >
          <Paper className={classes.paper}>
            <Form />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(StyledForm);
