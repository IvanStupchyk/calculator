import React from 'react';
import s from './Input-panel.module.css';
import Btn from "./Btn/Btn";

type InputPanelTypeProps = {
    getItemButton: (value: string) => void
}

function InputPanel(props: InputPanelTypeProps) {
    const btnProperty = {
        btnZero: true,
        btnEqually: true,
        btnsEraser: true,
        btnsArithmetic: true
    }

    const btnContent = {
        'numeral': {
            btnZero: '0',
            btnOne: '1',
            btnTwo: '2',
            btnThree: '3',
            btnFour: '4',
            btnFive: '5',
            btnSix: '6',
            btnSeven: '7',
            btnEight: '8',
            btnNine: '9',
            btnDot: '.'
        },
        'sign': {
            btnPlus: '+',
            btnMinus: '-',
            btnMultiply: '*',
            btnSplit: '/',
            btnEqually: '=',
            btnPercentage: '()',
            btnDischarge: 'C',
            btnChangeSign: '<'
        }
    }

    return (
        <div className={s.panel_container}>
            <Btn getItemButton={props.getItemButton}
                 btnsEraser={btnProperty.btnsEraser}
                 BtnContent={btnContent['sign'].btnDischarge}
            />
            <Btn getItemButton={props.getItemButton}
                 btnsEraser={btnProperty.btnsEraser}
                 BtnContent={btnContent['sign'].btnChangeSign}
            />
            <Btn getItemButton={props.getItemButton}
                 btnsEraser={btnProperty.btnsEraser}
                 BtnContent={btnContent['sign'].btnPercentage}
            />
            <Btn getItemButton={props.getItemButton}
                 btnsArithmetic={btnProperty.btnsArithmetic}
                 BtnContent={btnContent['sign'].btnSplit}
            />
            <Btn getItemButton={props.getItemButton}
                 BtnContent={btnContent['numeral'].btnSeven}
            />
            <Btn getItemButton={props.getItemButton}
                 BtnContent={btnContent['numeral'].btnEight}
            />
            <Btn getItemButton={props.getItemButton}
                 BtnContent={btnContent['numeral'].btnNine}
            />
            <Btn getItemButton={props.getItemButton}
                 btnsArithmetic={btnProperty.btnsArithmetic}
                 BtnContent={btnContent['sign'].btnMultiply}
            />
            <Btn getItemButton={props.getItemButton}
                 BtnContent={btnContent['numeral'].btnFour}
            />
            <Btn getItemButton={props.getItemButton}
                 BtnContent={btnContent['numeral'].btnFive}
            />
            <Btn getItemButton={props.getItemButton}
                 BtnContent={btnContent['numeral'].btnSix}
            />
            <Btn getItemButton={props.getItemButton}
                 btnsArithmetic={btnProperty.btnsArithmetic}
                 BtnContent={btnContent['sign'].btnMinus}
            />
            <Btn getItemButton={props.getItemButton}
                 BtnContent={btnContent['numeral'].btnOne}
            />
            <Btn getItemButton={props.getItemButton}
                 BtnContent={btnContent['numeral'].btnTwo}
            />
            <Btn getItemButton={props.getItemButton}
                 BtnContent={btnContent['numeral'].btnThree}
            />
            <Btn getItemButton={props.getItemButton}
                 btnsArithmetic={btnProperty.btnsArithmetic}
                 BtnContent={btnContent['sign'].btnPlus}
            />
            <Btn getItemButton={props.getItemButton}
                 btnZero={btnProperty.btnZero}
                 BtnContent={btnContent['numeral'].btnZero}
            />
            <Btn getItemButton={props.getItemButton}
                 BtnContent={btnContent['numeral'].btnDot}
            />
            <Btn getItemButton={props.getItemButton}
                 btnEqually={btnProperty.btnEqually}
                 BtnContent={btnContent['sign'].btnEqually}
            />
        </div>
    );
}

export default InputPanel;