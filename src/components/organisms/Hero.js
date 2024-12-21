// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
// import styles from "@/globalStyles.module.css";
// import heroData from "@/data/HeroData";
// import HeroSlide from "@/components/molecules/HeroSlide";

// const Hero = () => {
//   return (
//     <div id="hero-section" className={styles.heroContainer}>
//       <Swiper
//         modules={[Pagination, Autoplay, EffectFade]}
//         slidesPerView={1}
//         effect="fade"
//         fadeEffect={{ crossFade: true }}
//         pagination={{
//           el:".swiper-pagination",
//           clickable: true,
//           type: "bullets",
//           bulletClass: "swiper-custom-bullet",
//           bulletActiveClass: "swiper-custom-bullet-active",
//         }}
//         autoplay={{ delay: 2000 }}
//       >
//         {heroData.map((item) => (
//           <SwiperSlide key={item.id} className={styles.heroSlide}>
//             <HeroSlide item={item}/>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="swiper-pagination"/>
//     </div>
//   );
// };

// export default Hero;
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import styles from "@/globalStyles.module.css";
import heroData from "@/data/HeroData";
import HeroSlide from "@/components/molecules/HeroSlide";

const Hero = () => {
  const [paginationTop, setPaginationTop] = useState(0);

  useEffect(() => {
    const heroInfo = document.querySelector(`.${styles.heroInfo}`);
    const heroContainer = document.querySelector(`.${styles.heroContainer}`);
    const pagination = document.querySelector(".swiper-pagination");

    if (heroInfo && heroContainer && pagination) {
      const heroInfoBottom = heroInfo.getBoundingClientRect().bottom;
      const heroContainerBottom = heroContainer.getBoundingClientRect().bottom;
      const distance = heroContainerBottom - heroInfoBottom;

      // Ajustar la posición de la paginación
      pagination.style.marginTop = `${distance}px`;
      setPaginationTop(distance);
    }
  }, [paginationTop]);

  return (
    <div id="hero-section" className={styles.heroContainer}>
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets",
          bulletClass: "swiper-custom-bullet",
          bulletActiveClass: "swiper-custom-bullet-active",
        }}
        autoplay={{ delay: 2000 }}
      >
        {heroData.map((item) => (
          <SwiperSlide key={item.id} className={styles.heroSlide}>
            <HeroSlide item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination" />
    </div>
  );
};

export default Hero;