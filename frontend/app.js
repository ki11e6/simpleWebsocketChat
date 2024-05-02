const socket = new WebSocket('ws://localhost:3000');
//sent message
function sendMessage(e) {
  e.preventDefault();
  console.log('working');
  const input = document.querySelector('input');
  if (input.value) {
    socket.send(input.value);
    input.value = '';
  }
  input.focus();
}

document.querySelector('form').addEventListener('submit', sendMessage);

//listen message
socket.addEventListener('message', ({ data }) => {
  const li = document.createElement('li');
  li.textContent = data;
  document.querySelector('ul').appendChild(li);
});
