<template>
  <div class="dropdown" @click="isOpen = !isOpen">
    <div class="dropdown__title">
      <p>Dropdown Title</p>
      <svg viewBox="0 0 1030 638" width="10">
        <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>
      </svg>
    </div>
    <ul class="dropdown__list" v-show="isOpen">
      <li class="dropdown__item" v-for="item in items" :key="item">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref} from "vue"

const isOpen = ref(false)

const items = ref([
  {
    name: "Item 1"
  },
  {
    name: "Item 2"
  },
  {
    name: "Item 3"
  },
])
</script>

<style scoped>
.dropdown {
  backdrop-filter: blur(2px);
  color: #FFFFFF;
}

.dropdown__title, .dropdown__item {
  border: 1px solid #FFFFFF;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 8px;
}

.dropdown__title {
  display: flex;
  justify-content: space-between;
}
</style>