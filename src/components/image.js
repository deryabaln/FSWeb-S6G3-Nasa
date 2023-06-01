import React from "react";
import { ImageStyle, ImageDiv} from "./style";

 const Image = (props) => {

    const {dataurl} = props;

    return (
        <ImageDiv>
            <ImageStyle src={dataurl}/>
        </ImageDiv>
    )
 }

 export default Image;