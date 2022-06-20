import React, { useMemo } from "react";
import {
    Hero,
    LeftRicky,
    LeftZ,
    RightRicky,
    RightZ,
    Smashboy,
    Teewee,
} from "../../atoms";

const parts = [Hero, LeftRicky, LeftZ, RightRicky, RightZ, Smashboy, Teewee];

const Bloco: React.FC = () => {
    const random = Math.floor(Math.random() * 5) + 1;
    const Block = useMemo(() => parts[random], [random]);
    return <Block />;
};

export default Bloco;
