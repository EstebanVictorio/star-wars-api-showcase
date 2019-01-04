const getNameGreeting = name => `Hello ${name}!`;
let app = document.querySelector('#app');
app.innerHTML = getNameGreeting('Gabs');
