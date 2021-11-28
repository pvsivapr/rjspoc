import React from 'react';
import './Cell.css'

const IntroCell = (props) => {
    const {
        data
     } = props;

    return (
        <div className='introHolder'>
            <div className='leftColumnHolder'>
                <b><p className="introText">{data.name}</p></b>
                <p className="introText">{data.title}</p>
            </div>
            <div className='rightColumnHolder'>
                <p className="introText">email: {data.email_id}</p>
                <p className="introText">mobile: {data.mobile_number}</p>
            </div>
            {/* <div className='rightColumnHolder'>
                <img src=''/>
            </div> */}
        </div>
    );
}
export default IntroCell;