import React from 'react';
import './Cell.css';

const SectionCell = (props) => {
    const {
        Title,
        Description,
        Items
     } = props;

      return (
            <div>
                <div className="titleHolder gradientColor">
                    <p>{Title}</p>
                </div>
                <div className="itemsHolder">
                    {
                        (Description !== null && Description !== undefined) ?
                    (<p>{Description}</p>) : 
                    (<></>)
                    }
                    {
                        (Items !== null && Items !== undefined) ?
                        Items.map(item => {
                            return(<li>{item}</li>);
                        }) :
                        <></>
                    }
                </div>
            </div>
      )
}
export default SectionCell;