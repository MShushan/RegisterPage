/*import { Component } from "react";
import './new-input.css';
 export default class NewInput extends Component{
      
    state = {
        value: 0,
        error: false
    }
     
    changeValue = (value) => {
        this.setState({value})
    }
     onMinus = () => this.changeValue(this.state.value - 1)
     onPlus = () => this.changeValue(this.state.value + 1)
      
     onInputChange = (event) => {
        const value = Number(event.target.value.trim())

        if (isNaN(value)){
            return this.setState({ error:true })
        }
         this.setState({value, error: false})
     }

    
    render(){
         
        const { value, error } = this.state;

        return(
            <div className="test">
                <button onClick={this.onMinus}>-</button>
                <input type="text" value={value} onChange={this.onInputChange}/>
                <button onClick={this.onPlus}>+</button>

                { error ? <div>input only number</div>: null}
                

            </div>
        )
    }
 }*/