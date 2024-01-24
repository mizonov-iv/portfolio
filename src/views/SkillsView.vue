<template>
  <section class="skills-section">
<!--    <header class="skills-header">-->
<!--      <h2>Skills</h2>-->
<!--    </header>-->
<!--    <main>-->
<!--      <ul class="skills-list">-->
<!--        <li class="skills-list-item" v-for="icon in icons" :key="icon.id">-->
<!--          <img class="raise" :src="icon.icon_url"  :alt="icon.title"/>-->
<!--          <p class="card-text-bold">{{icon.title}}</p>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </main>-->

    <div class="swiper slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="icon in icons">
          <img class="raise" :src="icon.icon_url"  :alt="icon.title"/>
        </div>
      </div>
    </div>

  </section>

</template>

<script setup>
import {onMounted, ref} from "vue";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

onMounted(() => {
  initSwiper()
})

const icons = ref([
  {
    id: 1,
    title: "HTML",
    icon_url: "https://skillicons.dev/icons?i=html"
  },
  {
    id: 2,
    title: "CSS",
    icon_url: "https://skillicons.dev/icons?i=css"
  },
  {
    id: 3,
    title: "JS",
    icon_url: "https://skillicons.dev/icons?i=js"
  },
  {
    id: 4,
    title: "Vue.js",
    icon_url: "https://skillicons.dev/icons?i=vue"
  },
])

function initSwiper () {
  const slider = new Swiper('.slider', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 15,
      stretch: 0,
      depth: 400,
      modifier: 1,
      slideShadows: false,
    },
    loop: true,
  })
  slider.init()
}
</script>

<style>
.swiper {
  width: 80%;
  height: 100%;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 250px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  -webkit-box-reflect: below 1px linear-gradient(transparent, transparent, #0002, #0004);
}
</style>