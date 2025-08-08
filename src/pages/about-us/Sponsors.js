import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper/modules";
import Cimg from "../../components/common/image/Cimg";
import { Row } from "react-bootstrap";

function Sponsors({ logos }) {
  return (
    <Row className="partners-section justify-content-center">
      {logos.length && (
        <Swiper
          slidesPerView={3}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Autoplay, Navigation]}
          loop={true}
        >
          {logos.map((l) => (
            <SwiperSlide key={l.id}>
              {l.image && (
                <a href={l.link} target="_blank" rel="noreferrer">
                  <Cimg src={l.image} alt={`partner_${l.id}`} />
                </a>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Row>
  );
}

export default Sponsors;
