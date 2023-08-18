<script setup lang="ts">
  import BtnNavigationPanel from '../components/BtnNavigationPanel.vue'
  import './style.css'
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__bt-inner">
          <BtnNavigationPanel rout="/" contentBt="Home"/>
          <BtnNavigationPanel rout="/ticket" contentBt="Ticket"/>
          <BtnNavigationPanel rout="/profile" contentBt="Profile"/>
        </div>
        <BtnNavigationPanel rout="/login" contentBt="Login"/>
      </div>
    </div>
  </header>
</template>