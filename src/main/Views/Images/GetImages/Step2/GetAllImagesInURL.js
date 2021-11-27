import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Loader from './../../../../CustomControls/Loader/Loader';
import CustomButton from './../../../../CustomControls/CustomButton/CustomButton';
import Header from './../../../../CustomControls/Header_Body/Header';
import PageBody from './../../../../CustomControls/Header_Body/PageBody';
import "./ShowImageAsGallery.css";
import { useHistory } from 'react-router-dom';
import { getImagesDataFromFolderReset, getServiceStateReset } from './ShowImageAsGalleryActions';
import { FAILURE, SUCCESS } from './../../../../Constants/URLConstants';
import ImageThumb from './ImageThumb';
import { DateManipulations } from '../../../../Helpers/DateTimeManipulations';

const GetAllImages_InURL = (props) => {
    const imageDataModel =
    {
        id: "",
        name: ""
    }
    const [curentDisplayImageItem, changeCurrentDisplayImageItem] = useState(imageDataModel);
    const history = useHistory();
    let images_List = [];
    const {
        dispatch,
        images,
        loaderVisibility,
        serviceState,
        message
    } = props;

    // useEffect(() => {
    //     dispatch(getImagesDataFromFolderReset());
    // }, [dispatch]);

    const OnImageDownloadHandler = async (item) => {

        var xhttp = new XMLHttpRequest();
        xhttp.open('HEAD', item.displayURL);
        xhttp.onreadystatechange = async function () {
            if (this.readyState === this.DONE) {
                // console.log(this.status);
                // console.log(this.getResponseHeader("Content-Type"));
                let status = this.status;
                if (status !== null && status !== undefined && status !== 0 && status < 400) {
                    let mimeType = this.getResponseHeader("Content-Type");
                    let dataType = "";
                    let image_Name = DateManipulations.getTicks().toString();
                    let imageName = "";
                    if (mimeType !== null && mimeType !== undefined && mimeType !== "" && mimeType.includes('/')) {
                        let mimeTypeArr = mimeType.split('/');
                        if (mimeTypeArr[0].toLowerCase() === "image".toLowerCase()) {
                            dataType = mimeTypeArr[1];
                            imageName = `${image_Name}.${dataType}`;
                            console.log(imageName);

                            const image = await fetch(item.displayURL);
                            const imageBlog = await image.blob();
                            const imageURL = URL.createObjectURL(imageBlog);

                            const link = document.createElement('a');
                            link.href = imageURL;
                            link.download = imageName;
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }
                    }
                }
            }
        };
        xhttp.send();
    }

    const OnImageClick = (item) => {
        changeCurrentDisplayImageItem(item);
    }

    if (serviceState !== null && serviceState !== undefined && serviceState !== "") {

        if (serviceState === FAILURE && message !== null && message !== undefined && message !== "") {
            if (window.confirm(message)) { }
        } else if (serviceState === SUCCESS) {
            if (images !== null && images !== undefined && images !== "" && images.length > 0) {
                images_List = images;
            }
        }
        else {
            if (images !== null && images !== undefined && images !== "" && images.length > 0) {
                images_List = images;
            }
            else {
            }
        }
        dispatch(getServiceStateReset());
    }

    const onImageSelected = (selectedItem) => {
        if (selectedItem !== null && selectedItem !== undefined && selectedItem !== "" && selectedItem.id !== null && selectedItem.id !== undefined && selectedItem.id !== "") {
            const displayURL = selectedItem.displayURL;//"https://drive.google.com/uc?id=" + selectedItem.id
            return (
                <>
                    <div className="closeButtonHolder">
                        <p>{selectedItem.name}</p>
                        <CustomButton className="closeButton" title=">" onClick={() => { }} />
                        <CustomButton className="closeButton" title="X" onClick={() => { changeCurrentDisplayImageItem(imageDataModel) }} />
                        <CustomButton className="closeButton" title="S" onClick={() => { OnImageDownloadHandler(selectedItem) }} />
                        <a href={displayURL} target={"_blank"} rel="noreferrer">
                            <CustomButton className="closeButton" title="O_N" />
                        </a>
                        <CustomButton className="closeButton" title="<" onClick={() => { }} />
                    </div>
                    <img className="displayImage" alt="unable to load" src={displayURL} />
                </>
            )
        }
        else {
            return (<>
            </>);
        }
    }

    const onSubmitOption = async (event) => {
        event.preventDefault();
        let url = "https://www.thenewsminute.com/article/kajal-agarwal-star-remake-korean-film-120080";
        fetch(url, {
            method: 'GET',
            mode: "no-cors",
        })
            .then((response) => {
                return response;
            })
            .then((responseJSON) => {
                if (responseJSON !== null && responseJSON !== undefined && responseJSON.folder_items !== null && responseJSON.folder_items !== undefined) {
                }
                else {
                }
            })
            .catch((error) => {

            });
        // var data = await fetch(url);
        // var data = await fetch(url, {mode: "no-cors"})
        // console.log(data);
        // var response = data.response;
        // trail1(url);
    }

    const trail1 = (url) => {
        var xhttp = new XMLHttpRequest();
        // xhttp.setRequestHeader("Content-type", "text/html");
        xhttp.onreadystatechange = async function () {
            if (this.readyState === this.DONE) {
                if (xhttp.readyState === 4 && xhttp.status === 200) {
                    var responseData = xhttp.response;
                    console.log(responseData);
                }
            }
        };
        xhttp.open('GET', url, true);
        xhttp.setRequestHeader("Content-type", "text/html");
        xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhttp.send();
    }

    return (
        <div className="mainHolder">
            <Header showBackButton={true} navigationPath="/getImages" />
            {(loaderVisibility) ?
                <Loader /> :
                <></>
            }
            <PageBody className="bodyHolder">
                <div className="holderDiv">
                    <CustomButton isFullButton={true} title="Submit" onClick={onSubmitOption} />
                    {/* <iframe src="https://www.thenewsminute.com/article/kajal-agarwal-star-remake-korean-film-120080"></iframe> */}
                    <div id="galleryView" className={(curentDisplayImageItem !== null && curentDisplayImageItem !== undefined && curentDisplayImageItem !== "" && curentDisplayImageItem.id !== null && curentDisplayImageItem.id !== undefined && curentDisplayImageItem.id !== "") ? "galleryDivShared" : "galleryDiv"}>
                        {
                            images_List.map((item) => {
                                return (
                                    <ImageThumb item={item} onClick={() => OnImageClick(item)} />
                                );
                            })
                        }
                    </div>
                    <div className="eachImageDiv">
                        {onImageSelected(curentDisplayImageItem)}
                    </div>
                </div>
            </PageBody>
        </div>
    )
}

const mapToProps = (state) => {
    const { images, serviceState, loaderVisibility, message } = state.ShowImageAsGalleryReducer;
    return {
        images, serviceState, loaderVisibility, message
    };
};

const GetAllImagesInURL = connect(mapToProps)(GetAllImages_InURL);
export default GetAllImagesInURL;
