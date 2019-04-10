import React, { Component } from 'react';
import {
  Router,
  Route
} from 'react-router-dom'
import List from './List'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ProductDetail from './ProductDetail'
import { createBrowserHistory } from 'history'
import Cart from './Cart'
import './stylesheet.css'

const history = createBrowserHistory();


class App extends Component {

  state = {
    value: 'one',
  }

  handleChange = (event, value) => {
    this.setState({value});
    if(value === 'two'){
      history.push('/cart')
    }
    else if(value === 'one'){
      history.push('/list')
    }
    else if(value === 'three'){
      history.push('/detail/1')
    }
  }

  render() {

    const { value } = this.state;

    return (

      <>
      <Router history={history}>
        <AppBar position="static">
          <Toolbar variant="dense" className="toolbar">
          <div className="title">
            <Typography variant="h6" color="inherit" className="title">
              Ecommerce
            </Typography>
          </div>
            
            <div className="search elem">
              <SearchIcon className="searchicon" />
              <InputBase className="searchtext" placeholder="Search…"/>
            </div>
                
            <div className='tabs elem'>
  
              <Tabs value={value} onChange={this.handleChange} className="tabs">
                <Tab value="one" label="list" className="tab"></Tab>
                <Tab value="two" label="cart" className="tab"></Tab>
              </Tabs>

            </div>

          </Toolbar>
        </AppBar>
          <Route path='/list' component={List} />
          <Route path='/cart' component={Cart} /> 
          <Route path='/detail/:productId' component={ProductDetail} /> 
        </Router>
      </>

    )
  }
}

export default App;
