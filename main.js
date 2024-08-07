
fetch('http://localhost:3000/posts')
            .then(response => response.json())
            .then(data => {
                console.log('Posts:', data);
             
                data.forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.textContent = `${post.title} by ${post.author}`;
                    document.body.appendChild(postElement);
                });
            })
            .catch(error => console.error('Error fetching data:', error));

        
        fetch('http://localhost:3000/comments')
            .then(response => response.json())
            .then(data => {
                console.log('Comments:', data);

const form = document.getElementById('login-form');
const submitBtn = document.getElementById('submit-btn');
const logoutBtn = document.getElementById('logout-btn');
const welcomeMessage = document.getElementById('welcome-message');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const username = document.getElementById('fname').value;
  const password = document.getElementById('lname').value;

  const user = userData.users.find((user) => user.fname === username && user.lname === password);

  if (user) {
    welcomeMessage.textContent = `Welcome, ${user.fname}! You have successfully logged in.`;
    welcomeMessage.style.color = "green";
  } else {
    welcomeMessage.textContent = "Invalid username or password. Please try again.";
    welcomeMessage.style.color = "red";
  }
});

logoutBtn.addEventListener('click', () => {
  welcomeMessage.textContent = "";
});

// Add event listeners to the checkboxes and submit buttons in the activity table
const activityTable = document.getElementById('activity-table');
const checkboxes = activityTable.querySelectorAll('input[type="checkbox"]');
const submitButtons = activityTable.querySelectorAll('input[type="submit"]');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (e) => {
    console.log(`Checkbox ${e.target.id} is ${e.target.checked}`);
  });
});

submitButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(`Submit button ${e.target.id} clicked`);
  });

  // Add responsiveness to the submit button
  button.addEventListener('mouseover', () => {
    button.style.background = 'gold';
    button.style.cursor = 'pointer';
  });

  button.addEventListener('mouseout', () => {
    button.style.background = '';
    button.style.cursor = '';
  });

  button.addEventListener('touchstart', () => {
    button.style.background = 'gold';
    button.style.cursor = 'pointer';
  });

  button.addEventListener('touchend', () => {
    button.style.background = '';
    button.style.cursor = '';
  });
});
