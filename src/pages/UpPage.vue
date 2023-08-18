<script setup lang="ts">
  import BtnNavigationPanel from '../components/BtnNavigationPanel.vue'
  import './style.css'

  const storage = localStorage.getItem('user');
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__bt-inner">
          <BtnNavigationPanel rout="/" contentBt="Главная"/>
          <BtnNavigationPanel v-bind:rout="storage ? '/ticket' : '/login'" contentBt="Обращения"/>
          <BtnNavigationPanel v-bind:rout="storage ? '/profile' : '/login'" contentBt="Профиль"/>
        </div>
        <BtnNavigationPanel rout="/login" contentBt="Логин"/>
      </div>
    </div>
  </header>
</template>