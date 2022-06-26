import React, { useEffect, useMemo, useState } from "react";
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
const gridParts = [
    { cols: 4, rows: 1 },
    { cols: 3, rows: 2 },
    { cols: 3, rows: 2 },
    { cols: 3, rows: 2 },
    { cols: 3, rows: 2 },
    { cols: 2, rows: 2 },
    { cols: 3, rows: 2 },
];

const Bloco: React.FC = () => {
    // Math.floor(Math.random() * 5) + 1;
    const random = 0;
    const col_lines = useMemo(() => gridParts[random], [random]);
    const Block = useMemo(() => parts[random], [random]);
    const [position, setPosition] = useState(1);
    const [direction, setDirection] = useState(12 - col_lines.cols / 2);

    const keysDown = useMemo(
        () => ({
            ArrowRight() {
                setDirection((prev) => {
                    if (prev !== 25 - col_lines.cols) return prev + 1;
                    else return prev;
                });
            },
            ArrowLeft() {
                setDirection((prev) => {
                    if (prev !== 1) return prev - 1;
                    else return prev;
                });
            },
        }),
        [col_lines.cols],
    );

    useEffect(() => {
        const max = 24 / col_lines.rows;
        for (let index = 1; index < max; index++) {
            setTimeout(() => {
                setPosition((prev) => prev + 1);
            }, 1000 + index * 600);
        }
    }, [col_lines.rows]);

    useEffect(() => {
        window.addEventListener("keydown", (event) => {
            const key = event.key as keyof typeof keysDown;
            console.log(col_lines.cols / 2);
            if (Object.keys(keysDown).find((index) => key === index))
                keysDown?.[key]();
        });
    }, [col_lines.cols, keysDown]);

    return (
        <div
            className={`col-span-24 grid grid-cols-24`}
            style={{
                gridRow: `${position}/ span ${col_lines.rows}`,
            }}
        >
            <Block positionClass={direction} />
        </div>
    );
};

export default Bloco;
