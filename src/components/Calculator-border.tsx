import React from 'react';
import s from './Calculator-border.module.css';
import Board from "./Board/Board";
import InputPanel from "./Input-panel/Input-panel";

type InputPanelTypeProps = {
    getItemButton: (value: string) => void
    intermediateValue: string
    resultValue: number
}

function CalculatorBorder(props: InputPanelTypeProps) {
    return (
        <div className={s.calculator_container}>
            <Board resultValue={props.resultValue}
                   intermediateValue={props.intermediateValue}
            />
            <InputPanel getItemButton={props.getItemButton}/>
        </div>
    );
}

export default CalculatorBorder;
