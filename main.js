 document.getElementById('bioForm').addEventListener('submit', function(event) {
            event.preventDefault()

        
            let formData = {
                fname: document.getElementById('fname').value,
                lname: document.getElementById('lname').value
            };

          
            let apiUrl = 'https://jsonplaceholder.typicode.com/posts';

            
            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                
                alert('Form submitted successfully!');
                
                document.getElementById('fname').value = '';
                document.getElementById('lname').value = '';
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Error submitting form. Please try again.');
            });
        });

        // Function to handle logout button click
        function logout() {
            // Example logout functionality (replace with actual logout process)
            alert('Logged out successfully!');
        }
    </script>