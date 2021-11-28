import React from 'react';
import CustomButton from '../../CustomControls/CustomButton/CustomButton';
import EntryBox from '../../CustomControls/EntryBox/EntryBox';
import CustomPage from '../../CustomControls/Header_Body/CustomPage';
import Header from '../../CustomControls/Header_Body/Header';
import PageBody from '../../CustomControls/Header_Body/PageBody';
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
         {/* <div className="mainHolder">
            <Header />
            
         <PageBody>
            <div>
                <h1>This is about page</h1>
            </div>
            <div>
               <p>
                  This is about page only
               </p>
            </div>
         </PageBody>
         </div> */}
         </CustomPage>
      )
}
export default AboutPage;