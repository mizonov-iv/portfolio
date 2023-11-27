<template>
  <div >
    <img
        class="raise"
        :src="icon.icon_url"
        v-for="icon in icons"
        :key="icon.id"
    />
  </div>

</template>

<script setup>
import {ref} from "vue";

const icons = ref([
  {
    id: 1,
    title: "",
    icon_url: "https://skillicons.dev/icons?i=html"
  },
  {
    id: 2,
    title: "",
    icon_url: "https://skillicons.dev/icons?i=css"
  },
  {
    id: 3,
    title: "",
    icon_url: "https://skillicons.dev/icons?i=js"
  },
  {
    id: 4,
    title: "",
    icon_url: "https://skillicons.dev/icons?i=html"
  },
])
</script>