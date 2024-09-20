document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("spinwheel-modal");
    const preambleBtn = document.getElementById("preamble-btn");
    const closeModal = document.querySelector(".close-modal");
    const spinBtn = document.getElementById("spin-btn");
    const resultText = document.getElementById("result-text");
  
    const wheelSegments = [
      "Justice",
      "Liberty",
      "Equality",
      "Fraternity",
      "Democratic",
      "Republic",
      "Secular",
      "Sovereign"
    ];
  
    let isSpinning = false;
  
    // Show modal when "Explore" is clicked
    preambleBtn.addEventListener("click", function () {
      modal.style.display = "flex";
    });
  
    // Close modal when 'X' is clicked
    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
      resultText.textContent = "";
    });
  
    // Spin the Wheel Functionality
    spinBtn.addEventListener("click", function () {
      if (isSpinning) return; // prevent multiple spins
  
      isSpinning = true;
      resultText.textContent = "Spinning...";
  
      // Simulate wheel spin by randomizing the result
      setTimeout(function () {
        const randomIndex = Math.floor(Math.random() * wheelSegments.length);
        const selectedSegment = wheelSegments[randomIndex];
        resultText.textContent = `You landed on: ${selectedSegment}`;
        isSpinning = false;
      }, 2000);
    });
  });
  