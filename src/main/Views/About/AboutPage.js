import React from 'react';
import CustomPage from '../../CustomControls/Header_Body/CustomPage';
import "./../ViewBody.css";

const AboutPage = (props) => {
      return (
         <CustomPage >
            <div>
                <h1>This is about page</h1>
            </div>
            <div>
               <p>
                  This is about page only
               </p>
            </div>
         </CustomPage>
      )
}
export default AboutPage;