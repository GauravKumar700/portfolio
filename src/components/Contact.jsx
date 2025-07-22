import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Bounce, ToastContainer, toast } from 'react-toastify';

const Contact = () => {

  const openGoogleMaps = () => {
    const address = 'Roorkee Institute of Technology, Puhana - Jhabrera Rd, Nanheda Anantpur, Uttarakhand 247668';
    const encodedAddress = encodeURIComponent(address);
    const mapsUrl = 'https://www.google.com/maps?q=' + encodedAddress;
    window.open(mapsUrl, '_blank');
  }
  const openDialpad = () => {
    const phoneNumber = '+917004515369';
    const telLink = 'tel:' + phoneNumber;
    window.location.href = telLink;
  }

  const openEmail = () => {
    const recipientEmail = 'gauravkumar7004515@gmail.com';
    const mailtoLink = 'mailto:' + recipientEmail;
    window.location.href = mailtoLink;
  }

  const openWhatsApp = () => {
    const phoneNumber = '+917004515369';
    const whatsappUrl = 'https://wa.me/' + phoneNumber + '?text=Hello%20there!';
    window.open(whatsappUrl, '_blank');
  }

  const form = useRef();
  const [sending, setSending] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true)
    emailjs
      .sendForm('service_njo0l3o', 'template_08ucynt', form.current, {
        publicKey: 'gtKtVdiRtFbwercWi',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Message Successfull Sent!!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          })
          form.current.reset()
          setSending(false)
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Sorry some error Occurred!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        },
      );
  };

  return (
    <section className="contact section bd-container" id="contact">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <span className="section-subtitle">For Projects</span>
      <h2 className="section-title">Contact Me</h2>

      <div className="contact__container bd-grid">
        <div className="contact__content bd-grid">
          <div className="contact__box" onClick={openGoogleMaps}>
            <i className="bx bx-home contact__icon"></i>
            <h3 className="contact__title">Location</h3>
            <span className="contact__description"> Roorkee, Uttarakhand </span>
          </div>

          <div className="contact__box" onClick={openDialpad}>
            <i className="bx bx-phone contact__icon"></i>
            <h3 className="contact__title">Phone</h3>
            <span className="contact__description"> +91-7004515369 </span>
          </div>

          <div className="contact__box" onClick={openEmail}>
            <i className="bx bx-envelope contact__icon"></i>
            <h3 className="contact__title">Gmail</h3>
            <span className="contact__description">
              gauravkumar7004515@gmail.com
            </span>
          </div>

          <div className="contact__box" onClick={openWhatsApp}>
            <i className="bx bxl-whatsapp contact__icon"></i>
            <h3 className="contact__title">Chat</h3>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input type="text" name="name" id="name" placeholder="Name" className="contact__input" />
          <input type="email" name="email" id="email" placeholder="Email" className="contact__input" />

          <textarea name="message" id="message" cols="0" rows="7" placeholder="Message"
            className="contact__input"></textarea>
          <input type="submit" id="button" value={sending ? "Sending" : "Send Message"} className="button contact__button" />
        </form>
      </div>
    </section>
  )
}

export default Contact