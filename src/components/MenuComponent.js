import React,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

class Menu extends Component{
    constructor(props){
        super(props);
     
    }
  
    renderDish(dish)
    {
        if(dish!=null)
        {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image}/>
                    <CardBody>
                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText>{dish.CardText}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else{
            <div></div>
        }
    }

    render(){
        const menu=this.props.dishes.map((dish)=>{
            return(
                   <div key={dish.id} className="col-12 col-md-5 m-1">
                       <Card onClick={()=>this.props.onClick(dish.id)} >
                          
                           <CardImg width="100%" src={dish.image}/>
                          
                           <CardImgOverlay body className="col-md-12">
                               <CardTitle heading>{dish.name}</CardTitle>
                               <p style={{color:'red'}}>{dish.description}</p>
                           </CardImgOverlay>
                       </Card>
                   </div> 
            );
        });
        return(
<div className="container">
<div className="row">

    {menu}

</div>
<div className="row">

</div>

</div>
        );
    }
}
export default Menu;