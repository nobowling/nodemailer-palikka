const mailRouter = require('express').Router()
const nodemailer = require('nodemailer')

mailRouter.post('/', (req, res) => {
  const { body } = req

  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASS,
    },
  })

  const mailOptions = {
    from: body.email,
    to: process.env.RECEIVER_EMAIL,
    subject: `Uusi yhteydenotto intergreens.com -sivustolta`,
    html: 
    `<p>From: ${body.name}</p>
    <p>Email: ${body.email}</p>
    <p>Phone: ${body.phone}</p>
    <p>Message: ${body.message}</p>`,
  }

  console.log('Processing new contact form submit', mailOptions)

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error)
    } else {
      console.log('Done.')
      res.send("Mail sent successfully")
    }
    smtpTransport.close()
  })
})

module.exports = mailRouter
