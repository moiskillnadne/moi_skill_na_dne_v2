const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.gmail.com',
    port: '587',
    secure: false, // TRUE only for 465 port
    auth: {
      user: 'moiskillnadne.mailer@gmail.com',
      pass: 'Nodemailer2607',
    },
  },
  {
    from: 'Victor Ryabkov <moiskillnadne.mailer@gmail.com>',
  },
);

const mailer = message => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.error(err);
    return console.log('Email sent successfull: ', info);
  });
};

module.exports = mailer;
