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
    searchedValue: 'a'
  }

  componentDidMount(){
    this.setState({value: this.state.value})
    this.search('a')
  }

  handleChange = (event, value) => {
    this.setState({value})
    if(value === 'two'){
      history.push('/cart')
    }
    else if(value === 'one'){
      history.push('/list/' + 'a')
    }
    else if(value === 'three'){
      history.push('/detail/1')
    }
  }

  search = (event) => {
    if(event !== 'a'){
      this.setState({searchedValue: event.target.value ,value: this.state.value});
      history.push('/list/' + event.target.value)
    }
    else{
      history.push('/list/' + event)
    }
  }

  render() {

    const { value } = this.state;

    console.log(this.state.searchedValue)

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
              <InputBase className="searchtext" placeholder="Search…" onChange={event => this.search(event)}/>
            </div>
                
            <div className='tabs elem'>
  
              <Tabs value={value} onChange={this.handleChange} className="tabs">
                <Tab value="one" label="list" className="tab"></Tab>
                <Tab value="two" label="cart" className="tab"></Tab>
              </Tabs>

            </div>

          </Toolbar>
        </AppBar>
          <Route path={`/list/` + this.state.searchedValue} component={List} />
          <Route path='/cart' component={Cart} /> 
          <Route path='/detail/:productId' component={ProductDetail} /> 
        </Router>
      </>

    )
  }
}

export default App;
