import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './stylesheet.css'
import { Typography } from '@material-ui/core';
import {
    Link
  } from "react-router-dom";
 


const CheckedifLoaded = (props) => {
    console.log(props.data.isLoaded)
        if(props.data.isLoaded === true){
            return ( 
                <div className="listContainer">
                    {
                        props.data.items.map(item => {
                            return(
                                <Link to={`/detail/${item.id}`} className="title" key={item.id} >
                                    <div className="productContainer" onClick={props.click}>
                                        <div className="productImageContainer">
                                            <img className="productImage" alt={item.title} src={(item.img)}></img>
                                        </div>
                                        <Typography variant="h5" key={'title' + item.id} className="title">{item.title}</Typography>
                                        <Typography variant="h6" key={'price' + item.id} className="price">${item.price}</Typography>
                                    </div>
                                </Link>
                                )
                        })
                    }
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


class List extends Component{

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            redirect: false,
            id: -1
        };
    }

    componentDidMount(){
        this.fetchItems();
      }

    
    fetchItems = () => {
        fetch('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
        .then(rsp => rsp.json())
        .then(allItems => {
          this.allItems = allItems;
          console.log(this.allItems)
          this.setState({items: allItems, isLoaded: true, redirect: false})
        })
    }

    render() {

            return(
                <CheckedifLoaded data={this.state} click={this.handleClick} />
            )
            
    }

}

 
export default List