import React from "react";
import s from './Btn.module.css';

type BtnPropsType = {
    btnZero?: boolean
    btnEqually?: boolean
    btnsEraser?: boolean
    btnsArithmetic?: boolean
    BtnContent: string
    getItemButton?: (value: string) => void
}

function Btn(props: BtnPropsType) {

    const typeBtn = () => {
        if (props.btnZero) {
            return s.btn_zero
        } else if (props.btnEqually) {
            return s.btn_equally
        } else if (props.btnsArithmetic) {
            return s.btn_arithmetic
        } else if (props.btnsEraser) {
            return s.btn_eraser
        } else {
            return ''
        }
    }

    const sendValue = () => {
        props.getItemButton && props.getItemButton(props.BtnContent)
    }

    return (
        <a onClick={sendValue}
           className={`${s.btn_container} ${typeBtn()}`}
        >
            {props.BtnContent}
        </a>
    );
}

export default Btn;