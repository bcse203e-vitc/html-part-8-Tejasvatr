function play(user) {
    let choices = ["Rock", "Paper", "Scissors"],
        comp = choices[Math.floor(Math.random() * 3)],
        res = (user === comp) ? "It's a tie!" :
              (user === "Rock" && comp === "Scissors") || 
              (user === "Paper" && comp === "Rock") || 
              (user === "Scissors" && comp === "Paper") ? "You win!" : "You lose!";
    
    document.getElementById("result").textContent = `You: ${user}, Computer: ${comp}. ${res}`;
}