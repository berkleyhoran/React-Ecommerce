import React, { Component } from 'react';
import {
  Router,
  Route
} from 'react-router-dom'
import ProductDetail from './ProductDetail'
import List from './List'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createBrowserHistory } from 'history'
import Cart from './Cart'
import './stylesheet.css'

const history = createBrowserHistory();


class App extends Component {

  componentDidMount(){
    this.fetchItems();
  }

  fetchItems = () => {
    fetch('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
    .then(rsp => rsp.json())
    .then(allItems => {
      this.allItems = allItems;
      console.log(this.allItems)
    })
  }

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
  }

  render() {

    const { value } = this.state;

    return (

      <>
      <Router history={history}>
        <AppBar position="static">
          <Toolbar variant="dense" className="toolbar">
            <Typography variant="h6" color="inherit" className="elem">
              Ecommerce
            </Typography>
            
            <div class="search elem">
              <SearchIcon />
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
        </Router>
      </>

    )
  }
}

export default App;
