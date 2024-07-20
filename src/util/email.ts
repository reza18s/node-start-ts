const nodemailer = require("nodemailer");

const sendEmail = async (options: {
   email: string;
   subject: string;
   message: string;
}) => {
   // 1) Create a transporter
   const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
         user: "c0c1b164b3d832",
         pass: "861c63eaf6c8ba",
      },
   });
   console.log(transporter);

   // 2) Define the email options
   const mailOptions = {
      from: "Jonas Schmedtmann <swary2021@gmail.com>",
      to: options.email,
      subject: options.subject,
      text: options.message,
      // html:
   };

   // 3) Actually send the email
   await transporter.sendMail(mailOptions);
};
export default sendEmail;
