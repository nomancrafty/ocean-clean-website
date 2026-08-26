function captureFormData(form) {
  const data = {
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  };

  const inputs = form.querySelectorAll('input, textarea, select');
  const allFieldData = {};

  inputs.forEach(input => {
    const value = input.value || '';
    const name = input.name || input.id || input.placeholder || '';
    const type = input.type || 'text';

    allFieldData[name] = value;

    const lowerName = name.toLowerCase();
    const lowerPlaceholder = (input.placeholder || '').toLowerCase();

    if (lowerName.includes('name') || lowerPlaceholder.includes('name')) {
      if (!data.name) data.name = value;
    } else if (lowerName.includes('email') || type === 'email' || lowerPlaceholder.includes('email')) {
      if (!data.email) data.email = value;
    } else if (lowerName.includes('phone') || type === 'tel' || lowerPlaceholder.includes('phone')) {
      if (!data.phone) data.phone = value;
    } else if (lowerName.includes('message') || type === 'textarea') {
      if (!data.message) data.message = value;
    } else if (lowerName.includes('service')) {
      if (!data.service) data.service = value;
    }
  });

  return data;
}

function showMessage(form, message, isSuccess = false) {
  // Find or create message div
  let messageDiv = form.querySelector('[class*="error"], [class*="message"], [class*="alert"]');

  if (!messageDiv) {
    // Create message div if it doesn't exist
    messageDiv = document.createElement('div');
    messageDiv.style.cssText = 'padding: 12px 16px; margin-bottom: 16px; border-radius: 6px; font-size: 14px; text-align: center;';

    // Insert before submit button
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.parentNode.insertBefore(messageDiv, submitButton);
    } else {
      form.appendChild(messageDiv);
    }
  }

  messageDiv.textContent = message;

  if (isSuccess) {
    messageDiv.style.backgroundColor = '#d4edda';
    messageDiv.style.color = '#155724';
    messageDiv.style.border = '1px solid #c3e6cb';
  } else {
    messageDiv.style.backgroundColor = '#f8d7da';
    messageDiv.style.color = '#721c24';
    messageDiv.style.border = '1px solid #f5c6cb';
  }

  messageDiv.style.display = 'block';
}

function setupFormHandler() {
  const forms = document.querySelectorAll('form, [role="form"]');

  forms.forEach((form, index) => {
    if (form.tagName === 'FORM') {
      form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const data = captureFormData(this);
        await submitForm(data, this);
      });
    } else {
      // For div-based forms, find all buttons and add click handlers
      const buttons = form.querySelectorAll('button');
      buttons.forEach(button => {
        button.addEventListener('click', async function(e) {
          if (button.type !== 'button' || button.textContent.toLowerCase().includes('submit') || button.textContent.toLowerCase().includes('send')) {
            e.preventDefault();
            const data = captureFormData(form);
            await submitForm(data, form);
          }
        });
      });
    }
  });
}

async function submitForm(data, form) {
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
      showMessage(form, 'Thank you! Your message has been sent. We will contact you soon.', true);

      // Clear form fields
      const inputs = form.querySelectorAll('input, textarea');
      inputs.forEach(input => input.value = '');

      // Hide message after 5 seconds
      setTimeout(() => {
        const messageDiv = form.querySelector('[class*="error"], [class*="message"], [class*="alert"], div');
        if (messageDiv && messageDiv.textContent.includes('Thank you')) {
          messageDiv.style.display = 'none';
        }
      }, 5000);
    } else {
      showMessage(form, result.error || 'Failed to send message', false);
    }
  } catch (error) {
    console.error('Error:', error);
    showMessage(form, 'Error sending message. Please try again.', false);
  }
}

function initializeFormHandler() {
  setupFormHandler();

  const observer = new MutationObserver(() => {
    setupFormHandler();
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeFormHandler);
} else {
  initializeFormHandler();
}

setTimeout(initializeFormHandler, 1000);
