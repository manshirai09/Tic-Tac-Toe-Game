@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

body {
    font-family: 'Orbitron', sans-serif;
    background: #0f0f0f;
    color: #00ffff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    text-align: center;
    padding: 10px;
}

h1 {
    color: #f3f3f3;
    text-shadow: 0 0 10px #ff00ff, 0 0 20px #00ffff, 0 0 30px #ff00ff;
    margin-bottom: 20px;
}

.players {
    margin-bottom: 10px;
}

.players input {
    padding: 10px;
    margin: 5px;
    font-size: 1rem;
    border: 2px solid #00ffff;
    border-radius: 5px;
    background: #111;
    color: #00ffff;
    outline: none;
    text-align: center;
}

.players input::placeholder {
    color: #00ffffa0;
}

.scoreboard {
    font-size: 1.2rem;
    margin: 10px 0;
    color: #ff00ff;
    text-shadow: 0 0 5px #ff00ff, 0 0 10px #00ffff;
}

.board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    gap: 10px;
    margin: 20px auto;
}

.cell {
    width: 100px;
    height: 100px;
    background-color: #111;
    border: 2px solid #00ffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    cursor: pointer;
    transition: 0.2s;
    color: #00ffff;
    text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff;
}

.cell:hover {
    background-color: #222;
    transform: scale(1.1);
    box-shadow: 0 0 20px #00ffff, 0 0 30px #ff00ff;
}

.cell.win {
    animation: glow 1s infinite alternate;
}

@keyframes glow {
    from { text-shadow: 0 0 10px #ff00ff, 0 0 20px #00ffff; }
    to { text-shadow: 0 0 20px #ff00ff, 0 0 40px #00ffff; }
}

#status {
    font-size: 1.2rem;
    margin-bottom: 10px;
    text-shadow: 0 0 5px #ff00ff, 0 0 10px #00ffff;
}

button {
    padding: 10px 25px;
    font-size: 1rem;
    cursor: pointer;
    background-color: #ff00ff;
    color: #0f0f0f;
    border: none;
    border-radius: 5px;
    text-shadow: 0 0 5px #ff00ff;
    transition: 0.3s;
}

button:hover {
    background-color: #00ffff;
    color: #111;
    text-shadow: 0 0 10px #00ffff;
}

/* Responsive */
@media (max-width: 500px) {
    .board {
        grid-template-columns: repeat(3, 80px);
        grid-template-rows: repeat(3, 80px);
        gap: 5px;
    }
    .cell {
        font-size: 2.5rem;
        width: 80px;
        height: 80px;
    }
}
