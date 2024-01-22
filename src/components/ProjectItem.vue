<template>
  <div class="project-item" :class="{opened: opened}">
    <div>
      <h2>{{props.project.title}}</h2>
      <ul class="project-item__list">
        <li class="project-item__item" v-for="item in props.project.text">
          <p class="paragraph">{{item}}</p>
        </li>
      </ul>
    </div>
    <div>
      <h2>Demo</h2>
      <img class="demo-img" :src="`/src/assets/gif/${props.project.img_url}.gif`" alt="">
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps({
  project: Object,
  opened: Boolean
})
</script>