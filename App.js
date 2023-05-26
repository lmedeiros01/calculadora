import React from 'react';
import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function App() {
    const buttons = ['LIMPAR', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '+/-', '='];
    const [currentNumber, setCurrentNumber] = useState("");
    const [lastNumber, setLastNumber] = useState("");

    function calculator() {
        const splitNumbers = currentNumber.split(' ');
        const firstNumber = parseFloat(splitNumbers[0]);
        const secondNumber = parseFloat(splitNumbers[2]);
        const operator = splitNumbers[1];

        switch (operator) {
            case '+':
                setCurrentNumber((firstNumber + secondNumber).toString());
                return;
            case '-':
                setCurrentNumber((firstNumber - secondNumber).toString());
                return;
            case '*':
                setCurrentNumber((firstNumber * secondNumber).toString());
                return;
            case '/':
                setCurrentNumber((firstNumber / secondNumber).toString());
                return;
            case '%':
                setCurrentNumber((firstNumber % secondNumber).toString());
                return;
        }
    }

    function handleInput(buttonPressed) {
        console.log(buttonPressed);
        if (buttonPressed === '+' || buttonPressed === '-' || buttonPressed === '*' || buttonPressed === '/' || buttonPressed === '%') {
            setCurrentNumber(currentNumber + " " + buttonPressed + " ");
            return;
        }
        switch (buttonPressed) {
            case 'DEL':
                setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)));
                return;
            case 'LIMPAR':
                setLastNumber("");
                setCurrentNumber("");
                return;
            case '=':
                setLastNumber(currentNumber + " = ");
                calculator();
                return;
            case '+/-':
                setCurrentNumber((parseFloat(currentNumber) * -1).toString());
                return;
        }

        setCurrentNumber(currentNumber + buttonPressed);
    }

    return (

        <View style={styles.container}>

            { }
            <View style={styles.results}>
                <Text style={styles.historyText}>{lastNumber}</Text>
                <Text style={styles.resultText}>{currentNumber}</Text>
            </View>

            { }
            <View style={styles.buttons}>

                {buttons.map((button) =>
                    button === '=' ?
                        <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, { backgroundColor: '#3dd0e3' }]}>
                            <Text style={[styles.textButton, { color: "white", fontSize: 30 }]}>{button}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => handleInput(button)} key={button} style={styles.button}>
                            <Text style={[styles.textButton, { color: typeof (button) === 'number' ? 'black' : '#0093a6' }]}>{button}</Text>
                        </TouchableOpacity>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    results: {
        flex: 2,
        justifyContent: "center",
        backgroundColor: "#f5f5f5"
    },
    resultText: {
        color: "#282F38",
        fontSize: 32,
        fontWeight: "bold",
        padding: 12,
        textAlign: "right"
    },
    historyText: {
        color: "#7c7c7c",
        fontSize: 20,
        marginRight: 10,
        alignSelf: 'flex-end',
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 90,
        minHeight: 90,
        flex: 2,
    },
    textButton: {
        color: "#7c7c7c",
        fontSize: 20,
    }
});