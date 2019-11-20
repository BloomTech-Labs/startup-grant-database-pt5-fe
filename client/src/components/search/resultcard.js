import React from 'react';

const ResultCard = (props) => {
    console.log('my props', props)
    return (
        <div className="card-holder">
            <h3 className="title">{props.resultcard.grant_title}</h3>

            <p className="description">{props.resultcard.grant_description}</p>
            <div className="due-amount">
                <label className="due-label">Due:</label><p className="due">{props.resultcard.due_date}</p>
                <label className="amount-label">Amount:</label><p className="amount"> {props.resultcard.grant_amount}</p>
            </div>
            
            {/* <div className="elegibility">
                <label className="elegibility-label">Elegibility:</label>
                {props.resultcard.elegibility.map((elegibility, i) => {
                    return <p key={i} className="elegibility-tags"><span>{elegibility}</span></p>
                })}
            </div>
            <div className="categories">
                <label className="category-label">Categories: </label>
                {props.resultcard.categories.map((categories, i) => {
                    return <p key={i} className="category-tags"><span className="span-class">{categories}</span></p>
                })}
            </div> */}
        </div>    
    )
}

export default ResultCard;