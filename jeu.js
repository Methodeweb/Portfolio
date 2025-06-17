let secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    const userGuess = document.getElementById("userGuess");
    const checkBtn = document.getElementById("checkBtn");
    const resetBtn = document.getElementById("resetBtn");
    const message = document.getElementById("message");
    const attemptsDisplay = document.getElementById("attempts");

    checkBtn.addEventListener("click", () => {
      const guess = parseInt(userGuess.value);

      if (!guess || guess < 1 || guess > 100) {
        message.textContent = "Entrez un nombre valide entre 1 et 100.";
        message.style.color = "red";
        return;
      }

      attempts++;

      if (guess === secretNumber) {
        message.textContent = ` Bravo ! Le nombre était ${secretNumber}.`;
        message.style.color = "green";
      } else if (guess < secretNumber) {
        message.textContent = "Trop petit ! Réessaie.";
        message.style.color = "orange";
      } else {
        message.textContent = " Trop grand ! Réessaie.";
        message.style.color = "orange";
      }

      attemptsDisplay.textContent = `Nombre d'essais : ${attempts}`;
    });

    resetBtn.addEventListener("click", () => {
      secretNumber = Math.floor(Math.random() * 100) + 1;
      attempts = 0;
      userGuess.value = "";
      message.textContent = "";
      attemptsDisplay.textContent = "";
    });