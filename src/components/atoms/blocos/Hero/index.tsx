import React from "react";
import { HeroContainer } from "../styles";

const Hero: React.FC<{ positionClass?: number }> = ({ positionClass }) => {
    return (
        <HeroContainer positionClass={positionClass}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </HeroContainer>
    );
};

export default Hero;
