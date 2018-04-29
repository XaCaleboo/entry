import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { Drawer, AppBar, Toolbar, Typography, Divider, IconButton, Chip, Input, Icon, Button, Paper, TextField, List } from 'material-ui';
import MenuIcon from '@material-ui/icons/Menu';
import InfoOutlineIcon from '@material-ui/icons/InfoOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { MenuList, MenuItem } from 'material-ui/Menu';
import { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

const drawerWidth = 240;

const multipling = {
  'EUR': 1,
  '1 уровень': 2,
  '2 уровень': 2.5,
  '3 уровень': 3,
}
const currencies = [
  {
    value: '1 уровень',
    label: '1 уровень',
  },
  {
    value: '2 уровень',
    label: '2 уровень',
  },
  {
    value: '3 уровень',
    label: '3 уровень',
  }
];

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  root1: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  flex: {
    flex: 1,
  },
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {
    marginLeft: 8,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  win: {
    textAlign: 'center',
    color: '#64DD17',
  },
  field: {
    flexDirection: 'column', 
    alignItems: 'center',
  },
  components: {
    marginBottom: 15,
  }
});


class Main extends React.Component {
  state = {
    open: false,
    currency: 'EUR',
    potential: 0,
    amount: 0
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <MenuList>
              <MenuItem  className={classes.menuItem}>
                <ListItemIcon className={classes.icon}>
                  <AttachMoneyIcon />
                </ListItemIcon>
                <ListItemText primary='Оплата' classes={{ primary: classes.primary }} inset/>
              </MenuItem>
              <MenuItem  className={classes.menuItem}>
                <ListItemIcon className={classes.icon}>
                  <HelpOutlineIcon />
                </ListItemIcon>
                <ListItemText primary='Правила' classes={{ primary: classes.primary }} inset/>
              </MenuItem>
              <MenuItem className={classes.menuItem}>
                <ListItemIcon className={classes.icon}>
                  <InfoOutlineIcon />
                </ListItemIcon>
                <ListItemText primary='О программе' classes={{ primary: classes.primary }}/>
              </MenuItem>
          </MenuList>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Paper className={classes.root1} elevation={4}>
            <Typography component="p" variant='display1'>
            Выигрышей: 70%, Проигрышей: 30%
            </Typography>
            <Typography component='p' variant='display1'>Баланс: 1000</Typography>
          </Paper>
          <Paper className={classes.root1} elevation={4}>
            <form className={classNames(classes.container, classes.field)} noValidate autoComplete="off">
                <TextField 
                id="select-currency"
                select
                label="Уровень"
                className={classNames(classes.textField, classes.components)}
                value={this.state.currency}
                onChange={this.handleChange('currency')}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                margin="normal">
                  {currencies.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                  ))}
              </TextField>
              <FormControl className={classes.margin}>
                <InputLabel htmlFor="adornment-amount">Ставка</InputLabel>
                <Input
                className={classes.components}
                id="adornment-amount"
                value={this.state.amount}
                onChange={this.handleChange('amount')}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
              </FormControl>
              <Typography component='p' className={classes.components}>
                  Потенциальный выигрыш:
                  <Typography component='p' className={classes.win}>
                    {this.state.amount*multipling[this.state.currency]}$
                  </Typography>
              </Typography>
              <Button variant='raised' color='primary' type='submit' className={classes.button}>
                Оплатить</Button>
            </form>
          </Paper>
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Main);