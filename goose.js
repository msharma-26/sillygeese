  // Set your target date here
    const targetDate = new Date("2025-08-16T23:59:59").getTime();

    const timerElement = document.getElementById("timer");

    function updateTimer() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        timerElement.innerHTML = "Countdown finished!";
        clearInterval(timerInterval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      timerElement.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    }

    // Update every second
    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer()