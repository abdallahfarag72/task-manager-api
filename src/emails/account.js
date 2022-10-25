const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'azzammail92@gmail.com',
        pass: process.env.GMAIL_PASSWORD
    }
})

const sendWelcomeEmail = (email, name) => {
    const options = {
        from: 'azzammail92@gmail.com',
        to: email,
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    }

    transporter.sendMail(options)
}

const sendGoodbyeEmail = (email, name) => {
    const options = {
        from: 'azzammail92@gmail.com',
        to: email,
        subject: `Goodbye, ${name}`,
        text: "Is there anything we could've done better to keep you?"
    }

    transporter.sendMail(options)
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}

// const options = {
//     from: 'azzammail92@gmail.com',
//     to: 'abdallahfarag72@gmail.com',
//     subject: 'Testing email2',
//     text: 'testing'
// }

// transporter.sendMail(options, (err, info) => {
//     if (err) {
//         return console.log(err);
//     }

//     console.log(info.response);
// })