document.addEventListener('DOMContentLoaded', function() {
  // Find all forms and add submit handlers
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const data = {
        name: formData.get('name') || formData.get('fullName') || formData.get('contact-name'),
        email: formData.get('email') || formData.get('contact-email'),
        phone: formData.get('phone') || formData.get('contact-phone') || '',
        message: formData.get('message') || formData.get('contact-message') || '',
        service: formData.get('service') || '',
      };

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
          // Show success message
          alert('Thank you! Your message has been sent. We will contact you soon.');
          this.reset();
        } else {
          alert('Error: ' + (result.error || 'Failed to send message'));
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error sending message. Please try again.');
      }
    });
  });
});
