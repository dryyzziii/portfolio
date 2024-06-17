const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'charlesdenner12@gmail.com',
    pass: 'tkrg pxuj cinl wcxw'
  }
});

app.post('/send-email', (req, res) => {
    const { fullName, email, message } = req.body;
  
    const mailOptions = {
        from: email,
        to: 'charlesdenner12@gmail.com',
        subject: `New message from ${fullName}`,
        text: `Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`
      };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).send(error.toString());
      }
      console.log('Email sent:', info.response);
      res.send('Email sent: ' + info.response);
    });
  });

const PORT = process.env.PORT || 3000;
