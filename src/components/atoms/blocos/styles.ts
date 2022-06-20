import styled from "styled-components";

// const changeTemplateRows = (rows: number) => css`
//     grid-row: span ${rows} / ${rows};
//     grid-template-rows: repeat(${rows}, minmax(0, 1fr));
// `;

// const changeTemplateColumns = (columns: number) => css`
//     grid-column: span ${columns} / span ${columns};
//     grid-template-columns: repeat(${columns}, minmax(0, 1fr));
// `;

export const HeroContainer = styled.div.attrs({
    className: "col-span-4 row-span-1 grid grid-cols-4 grid-rows-1",
})`
    div {
        background-color: blue;
    }
`;

export const RickyContainer = styled.div.attrs({
    className: "col-span-3 row-span-2 grid grid-cols-3 grid-rows-2",
})`
    div {
        background-color: green;
    }
`;

export const ZContainer = styled.div.attrs({
    className: "col-span-3 row-span-2 grid grid-cols-3 grid-rows-2",
})`
    div {
        background-color: yellow;
    }
`;

export const TeeweeContainer = styled.div.attrs({
    className: "col-span-3 row-span-2 grid grid-cols-3 grid-rows-2",
})`
    div {
        background-color: pink;
    }
`;

export const SmashboyContainer = styled.div.attrs({
    className: "col-span-2 row-span-2 grid grid-cols-2 grid-rows-2",
})`
    div {
        background-color: red;
    }
`;
