 // Booking Appointment
 document.querySelector('#app-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Collect form values
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const study = document.getElementById('study').value;
  const doctor = document.getElementById('doctor').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  
  const artist = document.getElementById('artist').value;

  // Create the message
  const message = `Hello, I would like to book an appointment.\n\nDetails:\nName: ${name}\nPhone: ${phone}\nAge: ${age}\nGender: ${gender}\nStudy: ${study}\nDoctor: ${doctor}\nDate: ${date}\nTime: ${time}`;

  // WhatsApp API link with the message and phone number
  const whatsappUrl = `https://wa.me/9043863855?text=${encodeURIComponent(message)}`;

  // Open WhatsApp with pre-filled message
  window.open(whatsappUrl, '_blank');
});