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
        
        const categorieTypes = [
            {id: 1, type: "kids", color:"rgba(241, 49, 255, 0.65)"}, 
            {id: 1, type: "Lectures", color:"rgba(158, 120, 228, 0.65)"}, 
            {id: 1, type: "Fitness", color:"rgba(91, 178, 206, 0.65)"}, 
            {id: 1, type: "Fun", color:"rgba(32, 212, 159, 0.65)"}
        ]

        const categorieButtons = categorieTypes.map(type => 
            <CategoryButton key={type.id} category={type.type} color={type.color}/>
        )
                                    
        return(
            <div className="category-panel">
                {categorieButtons}                
            </div>
        )
    }
}

export default CategoryPanel