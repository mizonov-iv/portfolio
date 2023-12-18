<template>
  <div class="dropdown-wrapper" @click.self="isOpen = !isOpen">
    <p>{{props.title}}</p>
    <svg viewBox="0 0 1030 638" width="10">
      <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>
    </svg>
    <transition name="fade" appear>
      <div class="sub-menu" v-if="isOpen">
        <div v-for="(item, i) in props.items" :key="i" class="menu-item">
          <p>{{ item.title }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps({
  items: Array,
  title: String
})

const isOpen = ref(false)

</script>

<style>
.dropdown-wrapper {
  cursor: pointer;
  color: #FFF;
  padding: 10px 20px;
  position: relative;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}

.dropdown-wrapper svg {
  width: 10px;
  margin-left: 10px;
}

.sub-menu {
  position: absolute;
  top: calc(100%);
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  backdrop-filter: blur(3px);
}

.menu-item {
  padding: 10px 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>