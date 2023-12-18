<template>
  <div class="block">
    <div>
      <h2>Demo</h2>
      <img class="demo-img" :src="`/src/assets/gif/${props.project.img_url}.gif`" alt="">
    </div>
    <div>
      <h3>{{props.project.title}}</h3>
      <ul>
        <li v-for="item in props.project.text">
          <p class="paragraph">{{item}}</p>
        </li>
      </ul>

      <Dropdown :title="'Dropdown'" :items="items" />

    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import Dropdown from "./Dropdown.vue";

const props = defineProps({
  project: Object
})

const items = ref([
  {
    title: "title 1",
    link: "link 1"
  },
  {
    title: "title 2",
    link: "link 2"
  },
  {
    title: "title 3",
    link: "link 3"
  },
])
</script>