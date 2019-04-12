import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'

var amount = 1;

class ProductDetail extends Component {

    state = {
        item: {},
        numberOfItems: 1,
        amount: 1,
        isLoaded: false,
        id: 0
    }

    componentDidMount(){
        amount = 1
        this.fetchItems();
    }

    handleChange = event => {
        
        this.setState({ amount: event.target.value });
        this.setState({ numberOfItems: event.target.value})

        amount = event.target.value;
    };

    returnState(){
        console.log(this.state)
        return this.state; 
    }

    fetchItems = () => {
        fetch(`https://my-json-server.typicode.com/tdmichaelis/json-api/products/` + this.props.match.params.productId)
        .then(rsp => rsp.json())
        .then(item => {
          this.setState({item: item, isLoaded: true})
        })
    }

    render() {
        
        if(this.state.isLoaded){
            return (
                <div class="productBody">
                    <div className="productContainer single">
                        <div className="productImageContainer">
                            <img className="productImage" alt={this.state.item.id} src={(this.state.item.img)}></img>
                        </div>
                            <Typography variant="h5" className="title">{this.state.item.title}</Typography>
                            <Typography variant="h6" className="price">${this.state.item.price}</Typography>
                        <div className="buttonsContainer">
                            <div onClick={() => this.props.addToCart(this.state.item.id)} className="productButtons">Add to cart</div>
                            <FormControl className="select" >
                                <InputLabel htmlFor="age-simple">Amount</InputLabel>
                                <Select
                                    value={this.state.numberOfItems}
                                    onChange={this.handleChange}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={50}>50</MenuItem>
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

const mapDispatchToProps = (dispatch) => ({
    
    addToCart : (id) => {
        console.log(id)
        for(let a = 0;amount > a; a++){
            dispatch({
                id: id,
                type: 'ADD_ITEM'
            })
            }
        }
    } 
)
 
export default connect(null,mapDispatchToProps)(ProductDetail)