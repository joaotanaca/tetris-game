import React from "react";
import { ZContainer } from "../styles";

const LeftZ: React.FC = () => {
    return (
        <ZContainer>
            <div></div>
            <div></div>
            <div className="row-start-2 col-start-2"></div>
            <div className="row-start-2 col-start-3"></div>
        </ZContainer>
    );
};

export default LeftZ;
