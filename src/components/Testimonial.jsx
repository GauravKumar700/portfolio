import React from 'react'

const Testimonial = () => {
  return (
    <section class="testimonial section bd-container" >
      <span class="section-subtitle">My client saying</span>
      <h2 class="section-title">Testimonial</h2>

      <div class="testimonial__container swiper">
        <div class="swiper-wrapper">
          <div class="testimonial__content swiper-slide">
            <img src="img/testimonial1.jpg" alt="" class="testimonial__img" />
            <h3 class="testimonial__title">Karan Singh</h3>
            <span class="testimonial__client">Client</span>
            <p class="testimonial__description">
              This company does a very good service, offers the best deals and
              does a good job, I recommend it.
            </p>
          </div>

          <div class="testimonial__content swiper-slide">
            <img src="img/testimonial2.jpg" alt="" class="testimonial__img" />
            <h3 class="testimonial__title">Gaurav Kumar</h3>
            <span class="testimonial__client">Client</span>
            <p class="testimonial__description">
              This company does a very good service, offers the best deals and
              does a good job, I recommend it.
            </p>
          </div>

          <div class="testimonial__content swiper-slide">
            <img src="img/testimonial3.jpg" alt="" class="testimonial__img" />
            <h3 class="testimonial__title">Rajveer Singh</h3>
            <span class="testimonial__client">Client</span>
            <p class="testimonial__description">
              This company does a very good service, offers the best deals and
              does a good job, I recommend it.
            </p>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </section>
  )
}

export default Testimonial