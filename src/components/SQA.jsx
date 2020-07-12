import React, { useState } from "react";

const SQA = (props) => {

    const [ sqaObject, setSqaObject ] = useState({
        name: "",
        date_added: "",
        user_email: "",
        questions: [
            {
                "title" : "Definiteness of purpose",
                "choices": [
                    {
                        "question" : "Have you decided upon a definite major goal in life?",
                        "answer" : false,
                        "details" : ""
                    },
                    {
                        "question" : "Have you set a time limit for reaching that goal?",
                        "answer" : false,
                        "details" : ""
                    },
                    {
                        "question" : "Do you have specific plans for achieving your goal in life?",
                        "answer" : false,
                        "details" : ""
                    },
                    {
                        "question" : "Have you determined what definite benefits your goal in life will bring you?",
                        "answer" : false,
                        "details" : ""
                    },
                ],
            },
            {
                "title" : "Positive Mental Attitude",
                "choices": [
                    {
                        "question" : "Do you know what is meant by a positive mental attitude?",
                        "answer" : false,
                        "details" : ""
                    },
                    {
                        "question" : "Do you control your mental attitude?",
                        "answer" : false,
                        "details" : ""
                    },
                    {
                        "question" : "Do you know the only thing over which anyone has complete power of control?",
                        "answer" : false,
                        "details" : ""
                    },
                    {
                        "question" : "Do you know how to detect a negative mental attitude in yourself and others?",
                        "answer" : false,
                        "details" : ""
                    },
                    {
                        "question" : "Do you know how to make PMA a habit?",
                        "answer" : false,
                        "details" : ""
                    },
                ]
            },
            {
                "title" : "Going the Extra Mile",
                "choices": [
                    {
                        "question" : "Do you make a habit of rendering more and better service than you are paid for?",
                        "answer" : false,
                        "details" : ""
                    },
                    {
                        "question" : "Do you know when an employee is entitled to more pay?",
                        "answer" : false,
                        "details" : ""
                    },
                    {
                        "question" : "Do you know of anyone who has achieved success in any calling without doing more than he was paid to do?",
                        "answer" : false,
                        "details" : ""
                    },
                    {
                        "question" : "Do you believe anyone has a right to expect an increase in salary unless he is doing more than he is paid for? ",
                        "answer" : false,
                        "details" : ""
                    },
                    {
                        "question" : "If you were your own employer, would you be satisfied with the sort of service you are now rendering as an employee?",
                        "answer" : false,
                        "details" : ""
                    },
                ]
            },
            {
                "title" : "Going the Extra Mile",
                "choices": [
                    {
                        "question" : "Do you make a habit of rendering more and better service than you are paid for?",
                        "answer" : false,
                        "details" : ""
                    },
                    {
                        "question" : "Do you know when an employee is entitled to more pay?",
                        "answer" : false,
                        "details" : ""
                    },
                    {
                        "question" : "Do you know of anyone who has achieved success in any calling without doing more than he was paid to do?",
                        "answer" : false,
                        "details" : ""
                    },
                    {
                        "question" : "Do you believe anyone has a right to expect an increase in salary unless he is doing more than he is paid for? ",
                        "answer" : false,
                        "details" : ""
                    },
                    {
                        "question" : "If you were your own employer, would you be satisfied with the sort of service you are now rendering as an employee?",
                        "answer" : false,
                        "details" : ""
                    },
                ]
            }
        ]
    });

    return (
        <>
            <h3>SQA Objects</h3>
            <code>
                <pre>{JSON.stringify(sqaObject)}</pre>
            </code>
        </>
    )
}

export default SQA;
