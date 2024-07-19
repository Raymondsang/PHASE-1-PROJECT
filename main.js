


const express = require('express');
const app = express();

app.use(express.json());


app.post('/submit', (req, res) => {
  const { firstName, personnelPin } = req.body;
  if (!firstName || !personnelPin) {
    return res.status(400).send({ error: 'Invalid request' });
  }
  console.log('Form submitted with:', firstName, personnelPin);
  res.send({ message: 'Form submitted successfully' });
});


app.post('/logout', (req, res) => {

  res.send({ message: 'Logged out successfully' });
});

app.post('/toggle', (req, res) => {
  const { targetElementId } = req.body;

  const targetElement = document.getElementById(targetElementId);
  if (!targetElement) {
    return res.status(404).send({ error: 'Target element not found' });
  }
  targetElement.classList.toggle('hidden');
  res.send({ message: 'Toggle successful' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const firstName = document.getElementById('fname').value;
        const personnelPin = document.getElementById('lname').value;

        console.log('Form submitted with:', firstName, personnelPin);
    });

    
    const logoutButton = document.querySelector('button[aria-label="logout"]');
    logoutButton.addEventListener('click', function(event) {
        event.preventDefault();
    
        console.log('Logout clicked');
    });


    const toggleButton = document.querySelector('.toggle-button');
    const targetElement = document.querySelector('.toggle-target');
    toggleButton.addEventListener('click', function() {
        targetElement.classList.toggle('hidden');
    });
});