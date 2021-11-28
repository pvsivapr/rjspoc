import React from 'react';
import Header from './Header';

const CustomPage = (props) => {

    const uiStyles = {
        mainBodyHolder: {
            // height: "calc(93% - 20px)", //total height - total margin & padding
            // marginTop: "10px",
            // marginBottom: "10px",
            // whiteSpace: "nowrap",
            // overflowY: "scroll",
            height: '100%',
        },
        customPageBodyHolder: {
            height: "calc(93% - 20px)", //total height - total margin & padding
            marginTop: "0px",
            marginBottom: "10px",
            whiteSpace: "nowrap",
            overflowY: "scroll",}
    };

    const {
        children
    } = props;

    const uiMain = (
        <div  style={uiStyles.mainBodyHolder}>
            <Header />
            {/* <div style={{height: '7%'}}/> */}
        <div className="CustomPageBody" style={uiStyles.customPageBodyHolder}>
            {children}
        </div>
        </div>
    );

    return uiMain;
}
export default CustomPage;
