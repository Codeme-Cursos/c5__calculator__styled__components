import { useState } from 'react';
import Panel from '../panel/Panel';
import Screen from '../screen/Screen';
import { StyledCalculator } from './style';

const Calculator = () => {

    const [display, setDisplay] = useState([])

    const setDisplayLimit = (value) => {
        if (display.length > 18) {
            return;
        } else {
            setDisplay(value)
        }
    }

    return (
        <StyledCalculator>
            <Screen {...{ display }} />
            <Panel {...{ setDisplayLimit, display, setDisplay }} />
        </StyledCalculator>
    )
}

export default Calculator;
