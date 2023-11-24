<template>
  <Navbar/>
  <div id="page" class="">
    <!--    <section id="vision" style="background-image:url(https://assets.codepen.io/214624/vision.jpg)">-->
    <!--      <h1>Vision.</h1>-->
    <!--    </section>-->
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import './components/navbar/navbar.js'
import Navbar from "./components/navbar/Navbar.vue"

</script>