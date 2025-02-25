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
        // TODO: Calcular subResultado
        setFormula(number);
    }, [number]);

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
        deleteLast
    };
};
