<template>
  <section class="container portfolio-wrapper">
    <nav class="portfolio-nav">
      <ul class="portfolio-nav__list">
        <li
            class="portfolio-nav__item"
            v-for="item in worksList"
            :key="item.id"
            @click="openTab(item.id)"
        >
          {{item.title}}
        </li>
      </ul>
    </nav>

    <div class="portfolio">
      <ul class="portfolio__list">
        <li
            class="portfolio__list-item"
            v-for="item in worksList"
            :key="item.id"
            @click="openTab(item.id)"
        >
          <p
              class="portfolio__title"
              :class="{active: item.id === selectedProjectID}"
          >
            {{item.title}}
            <i class="fa fa-chevron-down"></i>
          </p>

          <div class="hidden-content" :class="{active: item.id === selectedProjectID}">
            <ul class="project-item__list">
              <li class="project-item__item" v-for="item in item.text">
                <p class="paragraph">{{item}}</p>
              </li>
            </ul>
            <p @click="openDemo">Demo</p>
            <img
                class="demo-img" :src="`/src/assets/gif/${item.img_url}.gif`"
                :alt="item.title"
                v-show="demoIsOpen"
            >
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import {ref} from "vue";

const selectedProjectID = ref(1)
const isOpen = ref(false)
const demoIsOpen = ref(false)

const openTab = (itemID) => {
  selectedProjectID.value = itemID
  isOpen.value = !isOpen.value
}

const openDemo = () => {
  demoIsOpen.value = !demoIsOpen.value
}

const worksList = ref([
  {
    id: 1,
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
    id: 2,
    title: "Advance",
    img_url: "blog",
    text: ["Advance"]
  },
  {
    id: 3,
    title: "Eda1",
    img_url: "blog",
    text: ["Eda1"]
  },
  {
    id: 4,
    title: "NASA",
    img_url: "blog",
    text: ["NASA"]
  },
  {
    id: 5,
    title: "Books",
    img_url: "blog",
    text: ["Books"]
  },
  {
    id: 6,
    title: "GitHub users",
    img_url: "blog",
    text: ["GitHub"]
  },
  {
    id: 7,
    title: "Trello",
    img_url: "blog",
    text: ["Trello"]
  },
])
</script>