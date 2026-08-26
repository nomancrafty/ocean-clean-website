const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, notes, area, service } = req.body;

    console.log('Received form data:', req.body);

    if (!name?.trim() || !email?.trim()) {
      return res.status(400).json({ error: 'Please provide Name and Email' });
    }

    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        ${area ? `<p><strong>Area:</strong> ${area}</p>` : ''}
        ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
        <p><strong>Notes:</strong></p>
        <p>${(notes || '').replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(adminMailOptions);

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
};
