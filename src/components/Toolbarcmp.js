import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const styles = {
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -18,
      marginRight: 10,
    }
  };
 
export class Toolbarcmp extends Component{
render(){
    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                <IconButton className='toolbar' color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit">
                    Ecommerce
                </Typography>
                    <div class="search">
                        <div>
                            <SearchIcon />
                        </div>
                        <div>
                            <InputBase
                                placeholder="Search…"
                            />
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
            )
    }
}

 
export default withStyles(styles)(Toolbarcmp)