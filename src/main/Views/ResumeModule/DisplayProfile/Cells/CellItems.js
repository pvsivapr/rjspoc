import React from 'react';
import './Cell.css'

const CellItem = (props) => {
    const {
        Title,
        Items
     } = props;

      return (
            <div>
                <div className="titleHolder gradientColor">
                    <p>{Title}</p>
                </div>
                <div>
                    {
                        Items.map(item => {
                            <p>.    {item}</p>
                        })
                    }
                </div>
            </div>
      )
}
export default CellItem;