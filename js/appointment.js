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



//contact
function sendDataToWhatsApp() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !phone || !message) {
        alert('Please fill out all fields.');
        return;
    }

    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nPhoneNumber: ${phone}\nMessage: ${message}`;
    const whatsappNumber = '9043863855';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
    alert('Your message has been sucessfully sent');
}
