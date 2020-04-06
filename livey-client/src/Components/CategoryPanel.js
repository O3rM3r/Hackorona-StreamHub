import React, {Component} from "react"
import "./category-panel.css"
import CategoryButton from "./CategoryButton"

class CategoryPanel extends Component{
    constructor(props){
        super(props)
        this.state={
            selectedCategory: null,
            kidsLine: null,
            lecturesLine: null,
            fitnessLine: null,
            funLine: null
        }
        
        this.handleClick = this.handleClick.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }
    handleClick(name){
        this.setState({selectedCategory: name})
        if (name === 1) {this.setState({kidsLine: 1, lecturesLine: null, fitnessLine: null, funLine: null})
            this.props.cat("kids")} else
        if (name === 2) {this.setState({kidsLine: null, lecturesLine: 1, fitnessLine: null, funLine: null})
            this.props.cat("lectures")} else
        if (name === 3) {this.setState({kidsLine: null, lecturesLine: null, fitnessLine: 1, funLine: null})
            this.props.cat("fitness")} else
        if (name === 4) {this.setState({kidsLine: null, lecturesLine: null, fitnessLine: null, funLine: 1})
            this.props.cat("fun")}
    }

    handleClear(){
        this.setState({
            selectedCategory: null,
            kidsLine: null,
            lecturesLine: null,
            fitnessLine: null,
            funLine: null
        })
        this.props.cat(null)
    }

    render(){
        //console.log('categories',this.props);
        
        const categoryTypes = [
            {id: 1, type: "kids", color:"rgba(241, 49, 255, 0.65)"}, 
            {id: 2, type: "Lectures", color:"rgba(158, 120, 228, 0.65)"}, 
            {id: 3, type: "Fitness", color:"rgba(91, 178, 206, 0.65)"}, 
            {id: 4, type: "Fun", color:"rgba(32, 212, 159, 0.65)"}
        ]

        const categoryButtons = categoryTypes.map(type => 
            <CategoryButton 
            key={type.id} 
            name={type.id} 
            category={type.type} 
            color={type.color}
            class={this.state.categoryClass}
            selected={this.state.selectedCategory}
            handleClick={this.handleClick}/>
        )

        const underLine = this.state.selectedCategory !== null ? 
            <div className="category-underline">
                <div 
                style={this.state.kidsLine ? {background: categoryTypes[0].color} : null}
                className="category-underline-lines">
                </div>
                <div 
                style={this.state.lecturesLine ? {background: categoryTypes[1].color} : null}
                className="category-underline-lines">
                </div>
                <div 
                style={this.state.fitnessLine ? {background: categoryTypes[2].color} : null}
                className="category-underline-lines">
                </div>
                <div 
                style={this.state.funLine ? {background: categoryTypes[3].color} : null}
                className="category-underline-lines">
                </div>
            </div> : null




                                    
        return(
            <div className="category-panel-flex">
                <h2 className="category-panel-title">Select Topic</h2>
                <div className="category-panel-grid">
                    <div className="category-panel">
                        {categoryButtons}                
                    </div>
                    {underLine}
                </div>
                <button className="category-panel-clear" type="button" onClick={this.handleClear}>Clear</button>
            </div>
        )
    }
}

export default CategoryPanel