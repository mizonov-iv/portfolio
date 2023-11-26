<template>
  <section class="main-section">
    <div class="card-wrapper">
      <header>
        <img class="avatar" src="../assets/photo.jpg" alt="">
        <h2 class="card-title">Мизонов Илья</h2>
        <p class="card-text-thin">29 years old</p>
        <p class="card-text-thin">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto autem esse ipsam ipsum nobis numquam omnis optio quisquam sapiente.</p>
      </header>
      <main>
        <p class="card-text-bold">Связаться со мной:</p>
        <ul class="contacts-list">
          <li class="contacts-list-item" v-for="item in contacts" :key="item.id">
            <a class="item-link" :href="item.url">
              <img class="item-img" :src="`/src/assets/icons/${item.img_url}.png`" :alt="item.title">
              <p class="card-text-bold">{{item.title}}</p>
            </a>
          </li>
        </ul>
      </main>
    </div>
  </section>
</template>

<script setup>
import {ref} from "vue"

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