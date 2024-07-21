// Add event listeners to the checkboxes and submit buttons in the activity table
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
