import React from 'react'

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

  return (
    <section className="contact section bd-container" id="contact">
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

        <form action="" className="contact__form">
          <input type="text" name="name" id="name" placeholder="Name" className="contact__input" />
          <input type="email" name="email" id="email" placeholder="Email" className="contact__input" />

          <textarea name="message" id="message" cols="0" rows="7" placeholder="Message"
            className="contact__input"></textarea>
          <input type="submit" id="button" value="Send Message" className="button contact__button" />
        </form>
      </div>
    </section>
  )
}

export default Contact