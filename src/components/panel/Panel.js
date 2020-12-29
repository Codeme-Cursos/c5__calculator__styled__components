
import Button from '../button/Button';
import { StyledPanel, StyledPanelRow } from './style';

const Panel = ({ setDisplayLimit, setDisplay, display }) => {

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

    const formatMathOperation = (operation) => {
        return display.join('').split(operation);
    }

    const makeMathOperation = (a, b, operation) => {

        const result = {
            "-": a - b,
            "+": parseInt(a) + parseInt(b),
            "x": a * b,
            "/": a / b,
            "%": `${(100 / b) * a}%`,
            "√": Math.sqrt(a).toFixed(3)
        }[operation]

        const formated = result.toString().split('')

        if (formated.length > 18) return ['Error']
        else return formated
    }

    const setResult = () => {
        if (!detectMathOperation()) {
            return;
        }else{
            const operation = detectMathOperation()
            const items = formatMathOperation(operation)
            const result = makeMathOperation(items[0], items[1], operation)
            setDisplay(result)
        }
    }

    const calculatorManager = [
        [
            { text: "/", color: "success" },
            { text: "%", color: "success" },
            { text: "√", color: "success" }
        ],
        [
            { text: "+", color: "success" },
            { text: "-", color: "success" },
            { text: "x", color: "success" }
        ],
        [
            { text: "7", color: "primary" },
            { text: "8", color: "primary" },
            { text: "9", color: "primary" }
        ],
        [
            { text: "4", color: "primary" },
            { text: "5", color: "primary" },
            { text: "6", color: "primary" }
        ],
        [
            { text: "1", color: "primary" },
            { text: "2", color: "primary" },
            { text: "3", color: "primary" }
        ],
        [
            { text: "0", color: "primary" },
            { text: "AC", color: "danger", onClick: resetScreen },
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
