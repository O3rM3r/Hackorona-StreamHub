import React, {Component} from "react"
import "./category-panel.css"
import CategoryButton from "./CategoryButton"

class CategoryPanel extends Component{
    constructor(){
        super()
        this.state={

        }
    
    }
    componentDidMount(){
        fetch("https://swapi.co/api/")
    }

    render(){
        return(
            <div className="category-panel">
                <CategoryButton />
                <CategoryButton />
                <CategoryButton />
                <CategoryButton />
            </div>
        )
    }
}

export default CategoryPanel