document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.getElementById('snow-container');
  
    // Nếu không tìm thấy khung chứa, dừng lại luôn để tránh báo lỗi console
    if (!snowContainer) return;
  
    function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
  
      const randomLeft = Math.random() * 100;
      snowflake.style.left = `${randomLeft}vw`;
  
      const randomSize = Math.random() * 4 + 3;
      snowflake.style.width = `${randomSize}px`;
      snowflake.style.height = `${randomSize}px`;
  
      const randomDuration = Math.random() * 5 + 5;
      snowflake.style.animationDuration = `${randomDuration}s`;
  
      const randomDelay = Math.random() * 5;
      snowflake.style.animationDelay = `${randomDelay}s`;
  
      snowContainer.appendChild(snowflake);
  
      setTimeout(() => {
        snowflake.remove();
      }, (randomDuration + randomDelay) * 1000);
    }
  
    setInterval(createSnowflake, 300);
  });