import React, {useState} from 'react';
import './App.css';
import {CalculatorBorder} from "./components/Calculator-border";

export const App = () => {
    const [intermediateValue, setIntermediateValue] = useState('')
    const [resultValue, setResultValue] = useState<number>(0)

    const getItemButton = (value: string) => {
        const lastElement = intermediateValue[intermediateValue.length - 1]
        const checkConditions = lastElement === '-' || lastElement === '+' || lastElement === '*' || lastElement === '/' || lastElement === '.' || intermediateValue.length === 0

        switch (value) {
            case 'C':
                setIntermediateValue('')
                setResultValue(0)
                break
            case '=':
                if (!checkConditions) {
                    const fractionalPartLength = (eval(intermediateValue) - Math.trunc(eval(intermediateValue))).toString().length

                    fractionalPartLength > 4
                        ? setResultValue(eval(intermediateValue).toFixed(4))
                        : setResultValue(eval(intermediateValue))
                }
                break
            case '0':
                intermediateValue.length && intermediateValue[intermediateValue.length - 1] !== ')' && intermediateValue.length < 17 &&
                setIntermediateValue(prev => prev + value)
                break
            case '+':
                checkConditions || setIntermediateValue(prev => prev + value)
                break
            case '-':
                checkConditions || setIntermediateValue(prev => prev + value)
                break
            case '*':
                checkConditions || setIntermediateValue(prev => prev + value)
                break
            case '/':
                checkConditions || setIntermediateValue(prev => prev + value)
                break
            case '.':
                checkConditions || setIntermediateValue(prev => prev + value)
                break
            case '<':
                intermediateValue[intermediateValue.length - 1] === ')' &&
                setIntermediateValue(prev => prev.substring(1, intermediateValue.length - 1))

                setIntermediateValue(prev => prev.substring(0, intermediateValue.length - 1))
                break
            case '()':
                lastElement === ')' || checkConditions ||
                setIntermediateValue(prev => `(${prev})`)
                break
            default:
                intermediateValue[intermediateValue.length - 1] !== ')' && intermediateValue.length < 17 &&
                setIntermediateValue(prev => prev + value)
                break
        }
    }

    return (
        <div className="App">
            <CalculatorBorder
                resultValue={resultValue}
                intermediateValue={intermediateValue}
                getItemButton={getItemButton}
            />
        </div>
    )
}

