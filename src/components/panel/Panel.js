
import { useEffect, useState } from 'react';
import Button from '../button/Button';
import { StyledPanel, StyledPanelRow } from './style';

const Panel = ({ setDisplayLimit, setDisplay, display }) => {

    const [decimal, setDecimal] = useState(1)

    const handleDecimal = (e) => {
        //parseInt retorna de la cadena 'dx' solo x como número
        setDecimal(parseInt(e.target.value))
    }

    useEffect(() => {
        console.log(decimal)
    }, [decimal])

    const resetScreen = () => {
        setDisplay([''])
    }

    const handleScreen = e => {
        setDisplayLimit([...display, e.target.value])
    }

    const detectMathOperation = () => {
        const operations = ["x", "/", "+", "-", "%", "√"]
        const result = operations.filter(operation => display.indexOf(operation) >= 0)
        return result[0];
    }

    const splitMathOperation = (operation) => {
        return display.join('').split(operation);
    }

    const formatMAthOperation = (result) => {
        if (Number.isInteger(result)) {
            return result.toString().split('')
        } else if (typeof result === 'string') {
            if (result.length < 5) return `${result}%`
            else return `${result.substr(0, 3 + decimal)}%`
        } else {
            return result.toFixed(decimal).toString().split('')
        }
    }

    const calculate = (a, b, operation) => {
        let result = {
            "-": a - b,
            "+": parseInt(a) + parseInt(b),
            "x": a * b,
            "/": a / b,
            "%": `${(100 / b) * a}`,
            "√": Math.sqrt(a)
        }[operation]
        return formatMAthOperation(result)
    }

    const setResult = () => {
        if (!detectMathOperation()) {
            return;
        } else {
            let operation = detectMathOperation()
            let items = splitMathOperation(operation)

            setDisplay(calculate(items[0], items[1], operation))
        }
    }

    const deleteLastScreenCharacter = () => {
        if (display.length > 0) {
            setDisplay(display.slice(0, -1))
        }
    }

    const calculatorManager = [
        [
            { text: "1d", color: "danger", onClick: handleDecimal },
            { text: "2d", color: "danger", onClick: handleDecimal },
            { text: "3d", color: "danger", onClick: handleDecimal },
            { text: "4d", color: "danger", onClick: handleDecimal },
        ],
        [
            { text: "+", color: "success" },
            { text: "-", color: "success" },
            { text: "x", color: "success" },
            { text: "/", color: "success" }
        ],
        [
            { text: "7", color: "primary" },
            { text: "8", color: "primary" },
            { text: "9", color: "primary" },
            { text: "√", color: "success" }
        ],

        [
            { text: "4", color: "primary" },
            { text: "5", color: "primary" },
            { text: "6", color: "primary" },
            { text: "%", color: "success" }
        ],
        [
            { text: "1", color: "primary" },
            { text: "2", color: "primary" },
            { text: "3", color: "primary" },
            { text: "AC", color: "danger", onClick: resetScreen }
        ],
        [
            { text: "0", color: "primary" },
            { text: ".", color: "primary" },
            { text: "<", color: "danger", onClick: deleteLastScreenCharacter },
            { text: "=", color: "danger", onClick: setResult }
        ]
    ]

    return (
        <StyledPanel>
            {
                calculatorManager.map((row, i) => <StyledPanelRow key={i}>
                    {
                        row.map((item) => <Button
                            key={item.text}
                            text={item.text}
                            onClick={item.onClick ? item.onClick : handleScreen}
                            colorCode={item.color}
                            selected={decimal}
                        />
                        )
                    }
                </StyledPanelRow>
                )
            }
        </StyledPanel>
    )
}

export default Panel;
