import React, {Component} from "react"
import "./category-panel.css"
import CategoryButton from "./CategoryButton"

class CategoryPanel extends Component{
    constructor(props){
        super()
        this.state={

        }
    
    }

    render(){
        //console.log('categories',this.props);
        return(
            <div className="category-panel">
                {
                    this.props.categories &&
                this.props.categories.map((item)=>
                    <CategoryButton key={item.CategoryID} category={item} />
                )
                
                }                
            </div>
        )
    }
}

export default CategoryPanel