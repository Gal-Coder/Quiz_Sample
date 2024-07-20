<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>מערכת שאלות ותשובות - הנדסת חשמל</title>
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Rubik', sans-serif;
            background-color: #f8f9fa;
            color: #1d3557;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        header {
            background-color: #1d3557;
            color: white;
            padding: 10px 0;
            text-align: center;
        }
        h1 {
            margin: 0;
        }
        .question {
            background-color: white;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .options {
            list-style-type: none;
            padding: 0;
        }
        .options li {
            margin-bottom: 10px;
        }
        button {
            background-color: #e63946;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        button:hover {
            background-color: #c1121f;
        }
    </style>
</head>
<body>
    <header>
        <h1>מערכת שאלות ותשובות - הנדסת חשמל</h1>
    </header>
    <div class="container">
        <div class="question">
            <h2>שאלה 1:</h2>
            <p>מהו חוק אוהם?</p>
            <ul class="options">
                <li><button onclick="checkAnswer(1, 1)">א. היחס בין הזרם לקיבול</button></li>
                <li><button onclick="checkAnswer(1, 2)">ב. היחס בין המתח להתנגדות</button></li>
                <li><button onclick="checkAnswer(1, 3)">ג. היחס בין ההספק לזרם</button></li>
                <li><button onclick="checkAnswer(1, 4)">ד. היחס בין המתח לזרם</button></li>
            </ul>
            <p id="result1"></p>
        </div>
        
        <div class="question">
            <h2>שאלה 2:</h2>
            <p>מהי יחידת המדידה של התנגדות חשמלית?</p>
            <ul class="options">
                <li><button onclick="checkAnswer(2, 1)">א. וולט</button></li>
                <li><button onclick="checkAnswer(2, 2)">ב. אמפר</button></li>
                <li><button onclick="checkAnswer(2, 3)">ג. אוהם</button></li>
                <li><button onclick="checkAnswer(2, 4)">ד. וואט</button></li>
            </ul>
            <p id="result2"></p>
        </div>
    </div>

    <script>
        function checkAnswer(questionNumber, selectedAnswer) {
            let correctAnswer;
            let explanation;
            
            if (questionNumber === 1) {
                correctAnswer = 4;
                explanation = "חוק אוהם קובע כי המתח (V) שווה למכפלת הזרם (I) בהתנגדות (R): V = I * R";
            } else if (questionNumber === 2) {
                correctAnswer = 3;
                explanation = "יחידת המדידה של התנגדות חשמלית היא אוהם, על שם הפיזיקאי גאורג אוהם.";
            }
            
            let resultElement = document.getElementById(`result${questionNumber}`);
            if (selectedAnswer === correctAnswer) {
                resultElement.innerHTML = "תשובה נכונה! " + explanation;
                resultElement.style.color = "green";
            } else {
                resultElement.innerHTML = "תשובה שגויה. " + explanation;
                resultElement.style.color = "red";
            }
        }
    </script>
</body>
</html>
