import React,{Component} from 'react'

const Form = props =>(
    <div>
        <form className="formc" onSubmit = {props.getweather}>
            <input type="text" name="city" placeholder = "city"/>
            <button>Get Weather</button>
        </form>
    </div>
)

export default Form