import React from 'react';
import './Cell.css'

const IntroCell = (props) => {
    const {
        data
     } = props;

    return (
        <div className='introHolder'>
            {
            data.show_profile_image ?            
            <div className='rightColumnHolder'>
                <img className='profileImageStyle' width='60' height='60' src={'Assets/Images/PVSPReddy.jpg'}/>
            </div>
             :
             <></>
             }
            <div className='leftColumnHolder'>
                <b><p className="introText">{data.name}</p></b>
                <p className="introText">{data.title}</p>
                <p className="introText">{data.summary}</p>
            </div>
            <div className='rightColumnHolder'>
                <p className="introText">email: {data.email_id}</p>
                <p className="introText">mobile: {data.mobile_number}</p>
                <p className="introText">current location: {data.current_location}</p>
            </div>
        </div>
    );
}
export default IntroCell;