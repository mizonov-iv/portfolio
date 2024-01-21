<template>
    <section class="main-section">
      <img class="main-section__img" src="../assets/photo.jpg" alt="photo">
      <div class="main-section__text">
        <h2 class="main-section__title">Мизонов Илья</h2>
        <p class="main-section__paragraph">Frontend-разработчик</p>
        <p class="main-section__paragraph">HTML, CSS, JavaScript, Vue3</p>
      </div>
      <div class="main-section__contacts">
        <p class="main-section__paragraph">Связаться со мной:</p>
        <ul class="main-section__contacts-list">
          <li class="main-section__contacts-list-item" v-for="item in contacts" :key="item.id">
            <a class="link main-section__link" :href="item.url">
              <img class="main-section__contacts-list-img" :src="`/src/assets/icons/${item.img_url}.png`" :alt="item.title">
            </a>
          </li>
        </ul>
      </div>
      <Button :title="'Скачать резюме'"/>
    </section>
</template>

<script setup>
import {ref} from "vue"
import Button from "../components/Button.vue"

const contacts = ref([
  {
    id: 1,
    title: "Telegram",
    img_url: "telegram",
    url: ""
  },
  {
    id: 1,
    title: "Gmail",
    img_url: "gmail",
    url: ""
  },
  {
    id: 1,
    title: "GitHub",
    img_url: "github",
    url: ""
  },
])
</script>