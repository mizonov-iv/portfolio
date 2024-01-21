<template>
  <button class="button">{{ props.title }}</button>
</template>

<script setup>
const props = defineProps(
    {
      title: String
    }
)
</script>

<style scoped>
/*Кнопка*/
.button {
  display: block;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 8px;
  background: #FFFFFF;
  color: #000000;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all .3s;
}

.button:hover {
  backdrop-filter: blur(3px);
  background: transparent;
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
}
</style>