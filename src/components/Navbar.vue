<template>
  <header class="header">
    <button
        class="burger"
        :class="{open: navIsOpen}"
        @click="toggleNavBar"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav class="navigation" :class="{open: navIsOpen}">
      <ul class="nav-list">
        <li class="nav-list-item" v-for="link in navLinks" :key="link">
          <router-link class="link" :to="link.path" @click="toggleNavBar">
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import {ref} from "vue";

const navIsOpen = ref(false)
const navLinks = ref([
  {
    name: "Главная",
    path: "/"
  },
  {
    name: "Проекты",
    path: "/portfolio"
  },
  {
    name: "Навыки",
    path: "/skills"
  },
  {
    name: "Контакты",
    path: "/contacts"
  },
])

const toggleNavBar = () => {
  navIsOpen.value = !navIsOpen.value
}
</script>