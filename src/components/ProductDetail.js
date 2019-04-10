import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

class ProductDetail extends Component {

    state = {
        item: {},
        isLoaded: false
    }

    componentDidMount(){
        this.fetchItems();
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
            console.log(this.state.item)
            return (
                <div class="productdetail">
                    <Card>
                        <CardActionArea>
                            <CardMedia
                            wide
                            imageUrl={this.state.item.img}
                            title={this.state.item.id}
                            />
                            <CardContent>
                            <Typography variant="h3">
                                {this.state.item.title}
                            </Typography>
                            <Typography gutterBottom variant="h5">
                                ${this.state.item.price}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Add to cart
                            </Button>
                            <Button size="small" color="primary">
                            Back
                            </Button>
                        </CardActions>
                    </Card>
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