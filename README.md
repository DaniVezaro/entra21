<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo da Velha</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f8ff;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .game-container {
            text-align: center;
            padding: 20px;
            border: 2px solid #333;
            background-color: #fff;
            border-radius: 10px;
        }

        h1 {
            color: #333;
            font-size: 2rem;
            background-color: #fcb9d8;
            padding: 10px;
            border-radius: 5px;
        }

        table {
            border-collapse: collapse;
            margin-top: 20px;
        }

        td {
            width: 100px;
            height: 100px;
            border: 2px solid #333;
            text-align: center;
            font-size: 2rem;
            cursor: pointer;
            background-color: #f0f0f0;
        }

        td:hover {
            background-color: #e0e0e0;
        }

        .cell-x {
            color: #ff6347;
        }

        .cell-o {
            color: #4682b4;
        }

        #message {
            margin-top: 20px;
            font-size: 1.5rem;
        }

        button {
            display: block;
            margin: 20px auto;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            font-size: 1rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="game-container">
        <h1>Jogo da Velha</h1>

        <table>
            <tr>
                <td data-index="0"></td>
                <td data-index="1"></td>
                <td data-index="2"></td>
            </tr>
            <tr>
                <td data-index="3"></td>
                <td data-index="4"></td>
                <td data-index="5"></td>
            </tr>
            <tr>
                <td data-index="6"></td>
                <td data-index="7"></td>
                <td data-index="8"></td>
            </tr>
        </table>

        <p id="message">É a vez do jogador X</p>
        <button id="resetBtn">Reiniciar Jogo</button>
    </div>

    <script>
        let currentPlayer = 'X'; 
        let board = ['', '', '', '', '', '', '', '', '']; 
        let gameOver = false; 

        const cells = document.querySelectorAll('td');
        const message = document.getElementById('message');
        const resetButton = document.getElementById('resetBtn');

       
        function checkWinner() {
            const winningCombos = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];

            for (let combo of winningCombos) {
                const [a, b, c] = combo;
                if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                    message.textContent = `Jogador ${currentPlayer} venceu!`;
                    message.style.color = 'green';
                    gameOver = true;
                    return;
                }
            }

            if (!board.includes('')) {
                message.textContent = 'Empate!';
                message.style.color = 'orange';
                gameOver = true;
            }
        }

        
        function switchPlayer() {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            message.textContent = `É a vez do jogador ${currentPlayer}`;
        }

        
        function handleCellClick(event) {
            const index = event.target.getAttribute('data-index');

            if (board[index] !== '' || gameOver) return;

            board[index] = currentPlayer;
            event.target.textContent = currentPlayer;

            checkWinner();
            if (!gameOver) switchPlayer();
        }

        
        function resetGame() {
            board = ['', '', '', '', '', '', '', '', ''];
            gameOver = false;
            currentPlayer = 'X';
            message.textContent = `É a vez do jogador ${currentPlayer}`;
            cells.forEach(cell => cell.textContent = '');
        }

       
        cells.forEach(cell => cell.addEventListener('click', handleCellClick));

        
        resetButton.addEventListener('click', resetGame);
    </script>
</body>
</html>
