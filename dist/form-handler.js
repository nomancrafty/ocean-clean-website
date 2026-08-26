function setupFormHandler() {
  // Find all forms and add submit handlers
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      // Get form data - collect all fields
      const formData = new FormData(this);

      // Create object from all form fields
      const allData = {};
      formData.forEach((value, key) => {
        allData[key] = value;
      });

      console.log('Form data:', allData);

      // Map fields to standard names (support multiple naming conventions)
      const data = {
        name: allData.name || allData.fullName || allData['contact-name'] || allData.your_name || '',
        email: allData.email || allData['contact-email'] || allData.your_email || '',
        phone: allData.phone || allData['contact-phone'] || allData.your_phone || '',
        message: allData.message || allData['contact-message'] || allData.your_message || '',
        service: allData.service || allData['contact-service'] || '',
      };

      console.log('Mapped data:', data);

      // Validate
      if (!data.name.trim() || !data.email.trim()) {
        alert('Please fill in Name and Email fields');
        return;
      }

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
}

// Run on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupFormHandler);
} else {
  setupFormHandler();
}

// Also watch for dynamically added forms
const observer = new MutationObserver(() => {
  setupFormHandler();
});

observer.observe(document.body, { childList: true, subtree: true });
