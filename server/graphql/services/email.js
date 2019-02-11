import nodemailer from 'nodemailer'

const sendEmail = async function (from, to, subject, HTMLTemplate) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'allanpinheirodelima@gmail.com',
            pass: 'eumeamos3'
        }
    })

    var mailOptions = {
        from: from,
        to: to,
        subject: subject,
        html: HTMLTemplate
    }

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) { console.log(err) }

        console.log('Email sent: ', info.response)
    })

}

export { sendEmail as default }