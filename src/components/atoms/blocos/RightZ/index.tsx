import React from "react";
import { ZContainer } from "../styles";

const RightZ: React.FC = () => {
    return (
        <ZContainer>
            <div className="col-start-2"></div>
            <div className="col-start-3"></div>
            <div className="row-start-2"></div>
            <div className="row-start-2"></div>
        </ZContainer>
    );
};

export default RightZ;
