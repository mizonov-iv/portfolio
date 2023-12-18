<template>
  <section class="skills-section">
    <header class="skills-header">
      <h2>Skills</h2>
    </header>
    <main>
      <ul class="skills-list">
        <li class="skills-list-item" v-for="icon in icons" :key="icon.id">
          <img class="raise" :src="icon.icon_url"  :alt="icon.title"/>
          <p class="card-text-bold">{{icon.title}}</p>
        </li>
      </ul>


    </main>
  </section>
</template>

<script setup>
import {ref} from "vue";

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
</script>