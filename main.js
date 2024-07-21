document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const firstNameInput = document.getElementById('fname');
    const submitButton = form.querySelector('button[type="submit"]');

    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        
        fetch('db.json')
            .then(response => response.json())
            .then(data => {
                
                const firstName = data.results[0].name.first;

                
                firstNameInput.value = firstName;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    });

   
    const logoutButton = document.querySelector('button:contains("Logout")');
    logoutButton.addEventListener('click', function() {
        // Placeholder action for logout button
        alert('Logout functionality to be implemented.');
    });
});
