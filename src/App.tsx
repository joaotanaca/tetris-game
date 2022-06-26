import styled from "styled-components";
// import {
//     Hero,
//     LeftRicky,
//     LeftZ,
//     RightRicky,
//     RightZ,
//     Smashboy,
//     Teewee,
// } from "./components/atoms";

import { Bloco } from "./components/organisms";

export const Screen = styled.div.attrs({
    className:
        "grid grid-cols-24 grid-rows-24 mx-auto border border-white relative",
})`
    width: 75vh;
    height: 75vh;
`;

function App() {
    return (
        <Screen>
            <Bloco />
            {/* <Hero  />
            <RightZ />
            <RightRicky />
            <LeftZ />
            <LeftRicky />
            <Smashboy />
            <Teewee /> */}
        </Screen>
    );
}

export default App;
