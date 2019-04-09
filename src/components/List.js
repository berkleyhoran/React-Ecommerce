import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './stylesheet.css'
import { Typography } from '@material-ui/core';
 
class List extends Component{

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
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
          this.setState({items: allItems, isLoaded: true})
        })
    }

    
    render() {

        

        function CheckedifLoaded(props){
            console.log(props.data.isLoaded)
                if(props.data.isLoaded === true){
                    return ( 
                        <div className="listContainer">
                            {
                                props.data.items.map(item => {
                                    return(
                                        <>
                                            <div className="productContainer">
                                                <div className="productImageContainer">
                                                    <img className="productImage" key={item.id} alt={item.title} src={(item.img)}></img>
                                                </div>
                                                <Typography variant="h5" key={item.id} className="title">{item.title}</Typography>
                                                <Typography variant="h6" key={item.id} className="price">${item.price}</Typography>
                                            </div>
                                        </>
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

    
            return(
                <CheckedifLoaded data={this.state} />
            )
            
    }

}

 
export default List