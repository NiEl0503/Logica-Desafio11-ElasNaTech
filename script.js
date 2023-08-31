const numberInput = document.getElementById('numberInput');
const checkButton = document.getElementById('checkButton');
const message = document.getElementById('message');
const background = document.querySelector('.background');

checkButton.addEventListener('click', () => {
    const number = parseInt(numberInput.value);

    if (number > 0 && number % 2 === 0 && number < 100) {
        message.textContent = 'Número atende o pedido 😉';
    } else {
        message.textContent = 'O número não atende o pedido 😥';
    }

    background.style.display = 'none';

    setTimeout(() => {
        background.style.display = 'block';
        message.textContent = '';
    }, 1000);
});