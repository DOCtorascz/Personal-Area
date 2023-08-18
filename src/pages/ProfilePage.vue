<script setup lang="ts">
  import ProfileInfo from '../components/profileComponent/ProfileInfo.vue';
  import BtnNavigationPanel from '../components/BtnNavigationPanel.vue'

</script>

<template>
  <div class="container">
    <ul class="list">
      <ProfileInfo contentInner="Джон" />
      <ProfileInfo contentInner="Фамилия: Сноу" />
      <ProfileInfo contentInner="Дата рождения: 25.02.1044" />
      <ProfileInfo contentInner="Город проживания: Техас" />
      <ProfileInfo contentInner="Города прибывания: Ohio, SPB, Boston" />
    </ul>
    <BtnNavigationPanel rout="/" contentBt="Вернуться на главную" />
  </div>
</template>