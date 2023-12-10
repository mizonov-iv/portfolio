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
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: Object
})
</script>