<template>
  <section class="">
    <ul class="project-list">
      <li
          class="project-list-item"
          v-for="item in worksLost"
          :key="item.id"
          @click="selectedProjectID = item.id"
      >
        {{item.title}}
      </li>
    </ul>
    <ProjectItem :project="worksLost[selectedProjectID]"/>
  </section>
</template>

<script setup>
import {ref} from "vue";
import ProjectItem from "../components/ProjectItem.vue";

const selectedProjectID = ref(0)

const worksLost = ref([
  {
    id: 0,
    title: "Vue-Blog",
    img_url: "blog",
    text: [
      "Vue.js Composition API + TypeScript",
      "Pinia",
      "Basic server with Node.js + Express",
      "Real authentication and authorization using jsonwebtoken (JWT)"
    ]
  },
  {
    id: 1,
    title: "Advance"
  },
  {
    id: 2,
    title: "Eda1"
  },
  {
    id: 3,
    title: "NASA"
  },
  {
    id: 4,
    title: "Books"
  },
  {
    id: 5,
    title: "GitHub users"
  },
  {
    id: 6,
    title: "Trello"
  },
])
</script>