import React,{Component} from 'react'

const Weather = props =>(
            <div className = "pad">
                {props.city && props.country &&
                <ul className = "list">
                    <li>Temperature : {Math.round(props.temperature-(273))}</li>
                    <li>City : {props.city}</li>
                    <li>Country : {props.country}</li>
                    <li>Humidity : {props.humidity}</li>
                    <li>description : {props.description}</li>
                </ul>
                }
                {props.error && <p className = "error">{props.error}</p>}
                
            </div>
)           
export default Weather