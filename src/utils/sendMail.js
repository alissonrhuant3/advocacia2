import emailjs from '@emailjs/browser'

export default function sendMail({ options }) {
  if (!options) throw new Error("Invalid options in email sender");
  
   const { name, email, phone, message } = options
   emailjs.send("service_escpyfr","template_4zy2oqa", {
    name,
    email,
    phone,
    message
   }, {
    publicKey: "L34l4tP7whunG5uDO"
   }).then(() => {
   }, err => console.log("Ocorreu um erro"))
}