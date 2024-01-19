<template>
  <header class="header">
    <button
        class="burger"
        :class="{open: navIsOpen}"
        @click.prevent="toggleNavBar"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav class="navigation" :class="{open: navIsOpen}">
      <ul
          class="nav-list"
          v-show="navIsOpen"
          v-for="link in navLinks"
          :key="link"
      >
        <li class="nav-list-item">
          <router-link class="item-link" :to="link.path">
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
    path: "/kills"
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