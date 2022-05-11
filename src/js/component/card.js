import React from 'react';

export const Card = (props) => {
    return <div className='card' key={props.name}>
        <h2> {props.name}</h2>
        <h4> {props.gender}</h4>
        <h4> {props.eye_color}</h4>
        <div className='row' key="rowpej">
        <button type="button" className="btn btn-outline-primary col-5">Learn more</button>
        <div className='col-3'></div>
        <button type="button" className="btn btn-outline-warning col-1 float-end"> X </button>

        </div>
    </div>
} 