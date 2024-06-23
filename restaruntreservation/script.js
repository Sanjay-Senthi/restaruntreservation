document.addEventListener('DOMContentLoaded', function() {
    var reservationForm = document.getElementById('reservationForm');
    
    reservationForm.addEventListener('submit', function(event) {
        var date = document.getElementById('date').value;
        var time = document.getElementById('time').value;
        var guests = document.getElementById('guests').value;
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;

        if (!date || !time || guests <= 0 || !name || !email || !phone) {
            alert('Please fill in all fields correctly.');
            event.preventDefault(); // Prevent form from submitting
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const reservationForm = document.getElementById('reservationForm');
    reservationForm.addEventListener('submit', handleReservationSubmit);
});
function handleReservationSubmit(event) {
    event.preventDefault();
    // Rest of the logic will go here
}
let reservations = [];
function handleReservationSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const reservation = {
        name: formData.get('name'),
        date: formData.get('date'),
        time: formData.get('time'),
        partySize: parseInt(formData.get('partySize'), 10)
    };
    checkAvailabilityAndStore(reservation);
}
function checkAvailabilityAndStore(reservation) {
    // Assume we have a function to check availability
    const isAvailable = checkTableAvailability(reservation.date, reservation.time, reservation.partySize);
    if (isAvailable) {
        reservations.push(reservation);
        confirmReservation(reservation);
    } else {
        alert('Sorry, no table is available for the selected time and date.');
    }
}
function checkTableAvailability(date, time, partySize) {
    // For simplicity, let's assume we have 10 tables and each reservation lasts 2 hours
    const maxTables = 10;
    let reservedTables = 0;
    reservations.forEach(function(existingReservation) {
        if (existingReservation.date === date && existingReservation.time === time) {
            reservedTables++;
        }
    });
    return reservedTables < maxTables;
}
function confirmReservation(reservation) {
    alert(`Reservation confirmed for ${reservation.name} on ${reservation.date} at ${reservation.time} for ${reservation.partySize} people.`);
}
function updateTableAvailability(reservationId, isConfirmed) {
    // Logic to update table availability based on reservation confirmation or cancellation
    // This could involve updating a data structure that tracks the availability of tables
}
document.addEventListener('DOMContentLoaded', function() {
    var reservationsTableBody = document.getElementById('reservations-table').getElementsByTagName('tbody')[0];
    
    // Example reservation data
    var reservations = [
        { date: '2023-04-01', time: '18:00', guests: 4, name: 'John Doe', email: 'johndoe@example.com', phone: '123-456-7890', status: 'Pending' },
        // ... other reservations
    ];
    
    reservations.forEach(function(reservation) {
        var row = reservationsTableBody.insertRow();
        Object.values(reservation).forEach(function(text) {
            var cell = row.insertCell();
            cell.textContent = text;
        });
        var actionsCell = row.insertCell();
        actionsCell.innerHTML = '<button class="confirm-btn">Confirm</button><button class="cancel-btn">Cancel</button>';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Assuming the reservation data has been populated as shown in the previous step
    var confirmButtons = document.querySelectorAll('.confirm-btn');
    var cancelButtons = document.querySelectorAll('.cancel-btn');
    
    confirmButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            var reservationId = this.closest('tr').getAttribute('data-reservation-id');
            // Call a function to confirm the reservation
            confirmReservation(reservationId);
        });
    });
    
    cancelButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            var reservationId = this.closest('tr').getAttribute('data-reservation-id');
            // Call a function to cancel the reservation
            cancelReservation(reservationId);
        });
    });
});

function confirmReservation(reservationId) {
    // Logic to confirm reservation
    updateTableAvailability(reservationId, true);
}

document.addEventListener('DOMContentLoaded', function() {
    // Assuming the reservation data has been populated as shown in the previous step
    var confirmButtons = document.querySelectorAll('.confirm-btn');
    var cancelButtons = document.querySelectorAll('.cancel-btn');
    
    confirmButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            var reservationId = this.closest('tr').getAttribute('data-reservation-id');
            // Call a function to confirm the reservation
            confirmReservation(reservationId);
        });
    });
    
    cancelButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            var reservationId = this.closest('tr').getAttribute('data-reservation-id');
            // Call a function to cancel the reservation
            cancelReservation(reservationId);
        });
    });
});

function confirmReservation(reservationId) {
    // Logic to confirm reservation
    updateTableAvailability(reservationId, true);
}

function cancelReservation(reservationId) {


    // Logic to cancel reservation
    updateTableAvailability(reservationId, false);
}
