import React, { Component } from 'react';
import {connect} from 'react-redux'
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

class Cart extends Component {

    state = {
        list: [],
        items: [],
        isLoaded: false,
        redirect: false,
        duplicates: false
    };

    componentDidMount(){
        this.fetchItems();
    }

    fetchItems = () => {
        fetch(`https://my-json-server.typicode.com/tdmichaelis/json-api/products`)
        .then(rsp => rsp.json())
        .then(items => {
            this.setState({list: items, isLoaded: true})
        })
    }

    createCartItem(){
            let localList = this.state.list;
            if(this.state.isLoaded){ 
                if(this.props.items.length > 0)  {
                return(
                    <>
                    <div className="middleButtonContainer">
                        <div onClick={() => this.props.checkout(1)} className="productButtons">
                            Checkout
                        </div>
                    </div>
                    <div className="listContainer">
                            {
                                this.props.items.map(item => {
                                    console.log('hey')  
                                    console.log(item)

                                    let listAdjuster = localList[item - 1]
                                    console.log(listAdjuster.id)
                                    
                                    if(item === listAdjuster.id){
                                        return(
                                                <div className="productContainer" key={item}>
                                                    <div className="productImageContainer">
                                                        <img className="productImage" alt={item} src={(listAdjuster.img)}></img>
                                                    </div>
                                                        <Typography variant="h5" key={'title' + item.id} className="title">{listAdjuster.title}</Typography>
                                                        <Typography variant="h6" key={'price' + item.id} className="price">${listAdjuster.price}</Typography>
                                                    <div className="buttonsContainer">
                                                        <div onClick={() => this.props.deleteItem(item.id)} className="productButtons">
                                                            Delete
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                })
                            
                            }
                        </div>
                        </>
                )
            }
                else if(this.props.items.length === 0){
                    return(
                                <div className="listContainer">
                                    <div className='productContainer'>
                                        <Typography variant="h4">No items in cart</Typography>
                                    </div>
                                </div>
                            )
                        }
        }
        else{
            
            return(
                <div className="modlabel">
                    <CircularProgress className='spinner' />
                </div>
            )
        }
    }

    render() {
        return (
            <h1>
                {this.createCartItem()}
            </h1>
        )
    }
}

function mapStateToProps(state){
    return{
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => ({
    
    deleteItem : (id) => {
            dispatch({
                id: id,
                type: 'DELETE_ITEM'
            })
    },
    checkout : (id) => {
        dispatch({
            id: id,
            type: 'CHECKOUT'
        })
    }
} 
)

export default connect(mapStateToProps,mapDispatchToProps)(Cart);