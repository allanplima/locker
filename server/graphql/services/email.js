import nodemailer from 'nodemailer'

const sendEmail = async function (from, to, subject, HTMLTemplate) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '',
            pass: ''
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