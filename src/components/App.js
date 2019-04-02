import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/list">
            List
          </Link>
          <Link to="/cart">
            Cart
          </Link>
        </div>
        {/* We'll insert the Route components here */}
        <Route path="/list" component={Toolbarcmp} />
        <Route path="/cart" component={ProductDetail} />
      </div>
    )
  }
}

export default App;
