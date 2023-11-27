<template>
  <header id="myHeader" class="sticky">
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 714.6 401.1">
      <path fill="#fff" fill-rule="evenodd" d="M502.8 0h211.8l-23 39.7-138.5 240L483 401H342.7L413 279.6 251.4 0h140.3L483 158.1 538.6 62 502.8 0Zm-201 279.6L140.1 0H0l231.7 401 70-121.4Z"/>
    </svg>
    <nav>
      <RouterLink class="route-link" to="/" @click="handleNavClick">Главная</RouterLink>
      <RouterLink class="route-link" to="/skills" @click="handleNavClick">Новыки</RouterLink>
      <RouterLink class="route-link" to="/portfolio" @click="handleNavClick">Портфолио</RouterLink>
      <RouterLink class="route-link" to="/contacts" @click="handleNavClick">Контакты</RouterLink>
      <button id="openmenu">
        <span></span>
        <span></span>
      </button>
    </nav>
  </header>
</template>

<script setup>
import './navbar.js'

function handleNavClick() {
  let page = document.getElementById('page');
  let header = document.getElementById('myHeader');

  page.classList.remove('menuopen');
  header.classList.add('sticky');
}
</script>