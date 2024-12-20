const startDate = new Date(); 
const targetDate = new Date(startDate.getTime() + 315 * 24 * 60 * 60 * 1000); 

function updateCountdown() {
    const today = new Date(); 
    const diffTime = targetDate - today; 
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    
    
    const countdownElement = document.getElementById('countdown');
    if (diffDays >= 0) {
        countdownElement.textContent = `D-${diffDays}`;
    } else {
        countdownElement.textContent = "종료되었습니다.";
    }
}


updateCountdown();


setInterval(updateCountdown, 1000 * 60 * 60 * 24);