import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import {
    Link
  } from "react-router-dom";

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
});

class ProductDetail extends Component {

    state = {
        item: {},
        numberOfItems: '',
        labelWidth: 0,
        isLoaded: false
    }

    componentDidMount(){
        this.fetchItems();
    }

    handleChange = event => {
        this.setState({ numberOfItems: event.target.value });
      };

    
    fetchItems = () => {
        fetch(`https://my-json-server.typicode.com/tdmichaelis/json-api/products/` + this.props.match.params.productId)
        .then(rsp => rsp.json())
        .then(item => {
          this.setState({item: item, isLoaded: true})
        })
    }

    render() {

        const { classes } = this.props;
        
        if(this.state.isLoaded){
            console.log(this.state.item)
            return (
                <div class="productBody">
                    <div className="productContainer single">
                        <div className="productImageContainer">
                            <img className="productImage" alt={this.state.item.id} src={(this.state.item.img)}></img>
                        </div>
                            <Typography variant="h5" className="title">{this.state.item.title}</Typography>
                            <Typography variant="h6" className="price">${this.state.item.price}</Typography>
                        <div className="buttonsContainer">
                            <Link to='/cart' className="link"><div className="productButtons">Add to cart</div></Link>
                            <FormControl className="select">
                                <InputLabel htmlFor="age-simple">Amount</InputLabel>
                                <Select
                                    value={this.state.numberOfItems}
                                    onChange={this.handleChange}
                                >
                                    <MenuItem value={1}>
                                        1
                                    </MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={2}>5</MenuItem>
                                    <MenuItem value={3}>10</MenuItem>
                                    <MenuItem value={4}>50</MenuItem>
                                </Select>
                            </FormControl>
                            <Link to='/list' className="link"><div className="productButtons">Back</div></Link>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className="modlabel">
                    <CircularProgress className='spinner' />
                </div>
            )
        }
    }
}
 
export default ProductDetail