import React from "react";
import s from './Board.module.css';

type BoardTypeProps = {
    intermediateValue: string
    resultValue: number
}

export const Board = (props: BoardTypeProps) => {
    return (
        <div className={s.board_container}>
            <p className={s.intermediate_data}>{props.intermediateValue}</p>
            <p className={s.result}>{props.resultValue.toLocaleString()}</p>
        </div>
    )
}
