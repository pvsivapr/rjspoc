import React from 'react';
import CustomPage from './../../../CustomControls/Header_Body/CustomPage';
// var data = require('json!./data.json');
import * as jsonData from './../../../Data/Resume.json';

const loadData = data => {
    if(data != null && data != undefined){
        return JSON.stringify(data);
    }
}

const DisplayProfilePage = (props) => {
      return (
         <CustomPage>
            <div>
                <p>
                {
                    loadData(jsonData)
                }
                </p>
            </div>
         </CustomPage>
      )
}
export default DisplayProfilePage;