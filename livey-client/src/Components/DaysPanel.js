import React, {Component} from "react"
import moment from "moment"
import "./days-panel.css"

class DaysPanel extends Component{
    constructor(props){
        super(props)
        this.state={
            daySelected: 
        }
        this.calcDay = this.calcDay.bind(this)
        this.calcDate = this.calcDate.bind(this)
        this.calcMonth = this.calcMonth.bind(this)
    }

    calcDay(add){
        const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        const result = weekDays[moment().add(add, 'days').day()]
        if (result === weekDays[moment().day()]){
            return "Today"
        } return result
    }

    calcDate(add){
        const months = [
            '01','02','03','04','05','06','07','08','09','10',
            '11','12','13','14','15','16','17','18','19','20',
            '21','22','23','24','25','26','27','28','29','30',
            '31']
        const result = months[moment().add(add, 'days').date() - 1]
        return result
    }

    calcMonth(add){
        const months = ['01','02','03','04','05','06','07','08','09','10','11','12']
        const result = months[moment().add(add, 'days').month()]
        return result
    }
    
    render(){
        const months = ['01','02','03','04','05','06','07','08','09','10','11','12']
        const d = new Date()
        const dateMonth = months[d.getMonth()]

        return(
            <div className="days-panel">
                <h1 className="days-panel-title">THIS WEEK &nbsp; &nbsp;</h1>
                <h1 className="days-panel-day">{`${this.calcDay(0)} ${this.calcDate(0)}.${this.calcMonth(0)}`}</h1>
                <h1 className="days-panel-day">{`${this.calcDay(1)} ${this.calcDate(1)}.${this.calcMonth(1)}`}</h1>
                <h1 className="days-panel-day">{`${this.calcDay(2)} ${this.calcDate(2)}.${this.calcMonth(2)}`}</h1>
                <h1 className="days-panel-day">{`${this.calcDay(3)} ${this.calcDate(3)}.${this.calcMonth(3)}`}</h1>
                <h1 className="days-panel-day">{`${this.calcDay(4)} ${this.calcDate(4)}.${this.calcMonth(4)}`}</h1>
                <h1 className="days-panel-day">{`${this.calcDay(5)} ${this.calcDate(5)}.${this.calcMonth(5)}`}</h1>
                <h1 className="days-panel-day">{`${this.calcDay(6)} ${this.calcDate(6)}.${this.calcMonth(6)}`}</h1>
            </div>
        )
    }
}

export default DaysPanel