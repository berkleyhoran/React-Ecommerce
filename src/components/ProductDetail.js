import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
 
class ProductDetail extends Component {
    render(props) {
        return (
            <div class="productdetail">
            <Card>
                <CardActionArea>
                    <CardMedia
                    image='{props.url}'
                    title='{props.product}'
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Product
                    </Typography>
                    <Typography component="p">
                        Product is super cool and here is the description why it is so amazing you should hit that add cart button
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
}
 
export default ProductDetail