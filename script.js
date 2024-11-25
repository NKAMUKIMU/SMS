document.getElementById('vehicle-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Gather form data
    const vehicleNumber = document.getElementById('vehicle-number').value;
    const driverPhone = document.getElementById('driver-phone').value;
    const status = document.getElementById('status').value;
    const location = document.getElementById('location').value;

    // Prepare data to send to the server
    const data = {
        vehicleNumber: vehicleNumber,
        driverPhone: driverPhone,
        status: status,
        location: location,
        timestamp: new Date().toISOString(),
    };

    // Send data to Google Sheets API using fetch
    fetch('https://script.google.com/macros/s/AKfycbzLWPv8NQZZSCOft7CwCXyYdczMWYyfkW0TVeHPQJGD101B923babIlK_3W64ChP9-B/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(result => {
        // Display success message
        document.getElementById('response').textContent = 'Form submitted successfully!';
        // Clear form after submission
        document.getElementById('vehicle-form').reset();
    })
    .catch(error => {
        // Display error message
        document.getElementById('response').textContent = 'Error submitting the form. Please try again.';
        console.error('Error:', error);
    });
});
