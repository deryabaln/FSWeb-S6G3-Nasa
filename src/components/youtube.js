import React from "react";
import { IframeStyle, IframeDiv} from "./style";

 const Youtube = (props) => {

    const {dataurl} = props;

    return (
        <IframeDiv>
            <IframeStyle width="100%" height="500px" src={dataurl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></IframeStyle>
        </IframeDiv>
    )
 }

 export default Youtube;