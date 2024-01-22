<template>
  <section style="color: #FFFFFF" class="container">
    <nav class="portfolio-nav">
      <ul class="portfolio-nav__list">
        <li
            class="portfolio-nav__item"
            v-for="item in worksList"
            :key="item.id"
            @click="openTab(item.id)"
        >
          <p>{{item.title}}</p>
          <p class="closed" :class="{opened: item.id === selectedProjectID}">{{item.text}}</p>
        </li>
      </ul>
    </nav>
<!--    <ProjectItem :project="worksList[selectedProjectID]" :opened="isOpen"/>-->
  </section>
</template>

<script setup>
import {ref} from "vue";
import ProjectItem from "../components/ProjectItem.vue";

const selectedProjectID = ref(0)
const isOpen = ref(false)

const openTab = (itemID) => {
  selectedProjectID.value = itemID
  console.log(selectedProjectID.value)
  isOpen.value = !isOpen.value

}

const worksList = ref([
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
    title: "Advance",
    img_url: "blog",
    text: "Advance"
  },
  {
    id: 2,
    title: "Eda1",
    img_url: "blog",
    text: "Eda1"
  },
  {
    id: 3,
    title: "NASA",
    img_url: "blog",
    text: "NASA"
  },
  {
    id: 4,
    title: "Books",
    img_url: "blog",
    text: "Books"
  },
  {
    id: 5,
    title: "GitHub users",
    img_url: "blog",
    text: "GitHub"
  },
  {
    id: 6,
    title: "Trello",
    img_url: "blog",
    text: ""
  },
])
</script>