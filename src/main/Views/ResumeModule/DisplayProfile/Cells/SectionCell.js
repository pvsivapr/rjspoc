import React from 'react';
import './Cell.css';

const SectionCell = (props) => {
    const {
        Title,
        Items
     } = props;

      return (
            <div>
                <div className="titleHolder gradientColor">
                    <p>{Title}</p>
                </div>
                <div className="itemsHolder">
                    {
                        Items.map(item => {
                            return(<li>{item}</li>);
                        })
                    }
                </div>
            </div>
      )
}
export default SectionCell;