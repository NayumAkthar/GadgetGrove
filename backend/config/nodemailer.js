const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
require('dotenv').config();

const options = {
    auth: {
        api_key: process.env.SENDGRID_API_KEY 
    }
}
const transporter = nodemailer.createTransport(sgTransport(options));



async function sendOtpEmail(to, otp) {
  const mailOptions = {
    
    from: `"Gadget Grove" <${process.env.EMAIL_USER}>`, 
    to: to,
    subject: 'Your OTP for Gadget Grove Login',
    text: `Your OTP is: ${otp}`,
    html: `<h3>Your OTP is: <b>${otp}</b></h3>`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

module.exports = { sendOtpEmail };