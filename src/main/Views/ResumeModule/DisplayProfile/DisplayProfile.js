import React from 'react';
import CustomPage from './../../../CustomControls/Header_Body/CustomPage';
// var data = require('json!./data.json');
import * as jsonData from './../../../Data/Resume.json';
import SectionCell from './Cells/SectionCell';
import IntroCell from './Cells/IntroCell';



const loadIntroData = (data) => {
    if(data !== null && data !== undefined){
        return (
            <IntroCell data={data} />
        );
    }
}

const loadExperienceSummary = (data) => {
    if(data !== null && data !== undefined){
        return(
            <div>
                <SectionCell Title={data.heading} Description={data.data}/>
            </div>
        );
    }
}

const loadEducationData = (data) => {
    if(data !== null && data !== undefined){
        const eduItems = data.data;
        let updatedEduItems = [];
        eduItems.forEach(item => {
            let structuredItem = `${item.course} - in ${item.institute_name}/${item.affliated_to_university} (${item.start_date}-${item.end_date}) `;
            updatedEduItems.push(structuredItem);
        });
        return(
            <div>
                <SectionCell Title={data.heading} Items={updatedEduItems}/>
            </div>
        );
    }
}

const loadJobData = (data) => {
    if(data !== null && data !== undefined){
        const eduItems = data.data;
        let updatedEduItems = [];
        eduItems.forEach(item => {
            let structuredItem = `${item.position} in ${item.company_name} (${item.start_date}-${item.end_date}) `;
            updatedEduItems.push(structuredItem);
        });
        return(
            <div>
                <SectionCell Title={data.heading} Items={updatedEduItems}/>
            </div>
        );
    }
}

const loadTechSkillsData = (data) => {
    if(data !== null && data !== undefined){}
}

const load_EducationData = (data) => {
    if(data !== null && data !== undefined){}
}

const loadData = data => {
    if(data != null && data != undefined){
        const experienceSummary = data.experience_summary;
        const profileData = data.personal_info;
        const educationData = data.education_info;
        const jobData = data.job_history;
        const technicalSkillsData = data.technical_skills;

        return(
            <div>
                {
                    //intro data
                    loadIntroData(profileData)
                }
                {
                    //Experience Summary
                    loadExperienceSummary(experienceSummary)
                }
                {
                    //job data
                    loadJobData(jobData)
                }
                {
                    //education data
                    loadEducationData(educationData)
                }
                {
                    //technical skills data
                    // loadCell(technicalSkillsData)        
                }
        </div>
        )

        return JSON.stringify(data);
    }
}

const DisplayProfilePage = (props) => {
      return (
         <CustomPage>
            <div>
                <p>
                {
                    loadData(jsonData.default)
                }
                </p>
            </div>
         </CustomPage>
      )
}
export default DisplayProfilePage;