import { useEffect, useRef, useState } from "react";

enum Operator {
    add = "+",
    subtract = "-",
    multiply = "x",
    divide = "÷",
}

export const useCalculator = () => {
    const [formula, setFormula] = useState("0");
    const [number, setNumber] = useState("0");
    const [previousNumber, setPreviousNumber] = useState("0");
    const lastOperation = useRef<Operator>();

    useEffect(() => {
        if (lastOperation.current) {
            const firstFormulaPart = formula.split(" ").at(0)
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
        } else {
            setFormula(number);
        }
    }, [number]);

    useEffect(() => {
        const subResult = calculateSubResult();
        setPreviousNumber(subResult.toString());
    }, [formula]);

    const clean = () => {
        setNumber("0");
        setPreviousNumber("0");
        setFormula("0");
        lastOperation.current = undefined;
    }

    const toggleSign = () => {
        if (number.includes("-")) {
            setNumber(number.replace("-", ""));
        } else {
            setNumber("-" + number);
        }
    }

    const deleteLast = () => {
        let currentSign = ''
        let temporalNumber = number

        if (number.includes("-")) {
            currentSign = '-'
            temporalNumber = number.substring(1)
        }

        if (temporalNumber.length > 1) {
            setNumber(currentSign + temporalNumber.slice(0, -1))
        } else {
            setNumber("0")
        }
    }

    const setLastNumber = () => {
        // TODO: Calcular resultado
        if (number.endsWith(".")) {
            setPreviousNumber(number.slice(0, -1));
        }

        setPreviousNumber(number);
        setNumber("0");
    }

    const divideOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.divide;
    }

    const multiplyOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.multiply;
    }

    const subtractOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.subtract;
    }

    const addOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.add;
    }

    const calculateSubResult = () => {
        const [firstValue, operation, secondValue] = formula.split(" ");

        const num1 = Number(firstValue)
        const num2 = Number(secondValue)

        if (isNaN(num2)) {
            return num1
        }

        switch (operation) {
            case Operator.add:
                return num1 + num2
            case Operator.subtract:
                return num1 - num2
            case Operator.multiply:
                return num1 * num2
            case Operator.divide:
                return num1 / num2
            default:
                throw new Error("Invalid operation")
        }


    }

    const calculateResult = () => {
        const result = calculateSubResult();
        setFormula(result.toString())
        lastOperation.current = undefined;
        setPreviousNumber("0");
    }

    const buildNumber = (numberString: string) => {
        // Evaluar si es un número o un operador
        if (number.includes(".") && numberString === ".") return;

        // Evaluar si es un 0 o un -0
        if (number.startsWith("0") || number.startsWith("-0")) {
            // Evaluar si es un punto
            if (numberString === ".") {
                return setNumber(number + numberString);
            }
            // Evaluar si es otro 0 y hay un punto
            if (numberString === "0" && number.includes(".")) {
                return setNumber(number + numberString);
            }
            // Evaluar si es un número diferente de 0
            if (numberString !== "0" && !number.includes(".")) {
                return setNumber(numberString);
            }
            // Evitar el 000000.00
            if (numberString === "0" && !number.includes(".")) {
                return;
            }
        }
        setNumber(number + numberString);
    };

    return {
        formula,
        number,
        previousNumber,
        buildNumber,
        clean,
        toggleSign,
        deleteLast,
        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        calculateSubResult,
        calculateResult
    };
};
