import React from 'react';
import s from './Calculator-border.module.css';
import {InputPanel} from "./Input-panel/Input-panel";
import {Board} from "./Board/Board";

type InputPanelTypeProps = {
    getItemButton: (value: string) => void
    intermediateValue: string
    resultValue: number
}

export const CalculatorBorder = (props: InputPanelTypeProps) => {
    return (
        <div className={s.calculator_container}>
            <Board resultValue={props.resultValue}
                   intermediateValue={props.intermediateValue}
            />
            <InputPanel getItemButton={props.getItemButton}/>
        </div>
    )
}

