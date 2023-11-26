<template>
  <Navbar/>
  <div id="page" class="">
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import './components/navbar/navbar.js'
import Navbar from "./components/navbar/Navbar.vue"

</script>