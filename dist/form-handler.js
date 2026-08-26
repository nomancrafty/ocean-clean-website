function captureFormData(form) {
  const data = {
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  };

  // Try to get data from form fields
  const inputs = form.querySelectorAll('input, textarea, select');
  const allFieldData = {};

  inputs.forEach(input => {
    const value = input.value || '';
    const name = input.name || input.id || input.placeholder || '';
    const type = input.type || 'text';

    allFieldData[name] = value;
    console.log(`Field: ${name} (${type}) = ${value}`);

    // Map to standard fields based on common patterns
    const lowerName = name.toLowerCase();
    const lowerPlaceholder = (input.placeholder || '').toLowerCase();

    if (lowerName.includes('name') || lowerPlaceholder.includes('name')) {
      if (!data.name) data.name = value;
    } else if (lowerName.includes('email') || type === 'email' || lowerPlaceholder.includes('email')) {
      if (!data.email) data.email = value;
    } else if (lowerName.includes('phone') || type === 'tel' || lowerPlaceholder.includes('phone')) {
      if (!data.phone) data.phone = value;
    } else if (lowerName.includes('message') || lowerName.includes('message') || type === 'textarea') {
      if (!data.message) data.message = value;
    } else if (lowerName.includes('service')) {
      if (!data.service) data.service = value;
    }
  });

  console.log('All field data:', allFieldData);
  console.log('Mapped data:', data);

  return data;
}

function setupFormHandler() {
  const forms = document.querySelectorAll('form, [role="form"]');

  forms.forEach((form, index) => {
    console.log(`Setting up form ${index}:`, form);

    // Handle form submission
    if (form.tagName === 'FORM') {
      form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const data = captureFormData(this);
        await submitForm(data, this);
      });
    } else {
      // For div-based forms, look for submit buttons
      const submitButton = form.querySelector('button[type="submit"], button:contains("Submit"), button:contains("Send")');
      if (submitButton) {
        submitButton.addEventListener('click', async function(e) {
          e.preventDefault();
          const data = captureFormData(form);
          await submitForm(data, form);
        });
      }
    }
  });
}

async function submitForm(data, form) {
  console.log('Submitting form with data:', data);

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
      alert('Thank you! Your message has been sent. We will contact you soon.');
      // Try to reset form
      const inputs = form.querySelectorAll('input, textarea');
      inputs.forEach(input => input.value = '');
    } else {
      alert('Error: ' + (result.error || 'Failed to send message'));
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error sending message. Please try again.');
  }
}

// Wait for page to be fully loaded
function initializeFormHandler() {
  console.log('Initializing form handler...');
  setupFormHandler();

  // Also watch for dynamically added forms
  const observer = new MutationObserver(() => {
    console.log('Page updated, checking for new forms...');
    setupFormHandler();
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// Run when page is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeFormHandler);
} else {
  initializeFormHandler();
}

// Also run after a delay to catch React apps
setTimeout(initializeFormHandler, 1000);
