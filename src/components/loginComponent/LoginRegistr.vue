<script setup lang="ts">
  import BtnNavigationPanel from '../BtnNavigationPanel.vue'
  import Password from 'primevue/password';
  import './LoginRegistr.css'

  import { ref } from 'vue';

  const value = ref(null);

  let rout = '/login'

  function storageParam(event: any) {
    event.preventDefault();
    let contentForm = event.target.tagName;
    let targetValueContent = {
      LOGIN: '',
      PASSWORD: '',
    };

    if (contentForm === 'A') {

      targetValueContent = {
        ...targetValueContent,
        LOGIN: event.target.parentNode.children[0].value,
        PASSWORD: event.target.parentNode.children[1].children[0].value,
      }

      if (targetValueContent.LOGIN === '' || targetValueContent.PASSWORD === '') {
        alert('Автор хотел сделать модальное окно, но решил воспользоваться возможностями браузера. Вы ввели не все данные!')
      } else if (targetValueContent.LOGIN === ' ' || targetValueContent.PASSWORD === ' ') {
        alert('Пробел так-то то же не считается')
      } else {
        localStorage.setItem('user', JSON.stringify(targetValueContent));
        rout = '/'
      }
    }
}

</script>

<template>
  <div class="header__bt-inner">
    <BtnNavigationPanel rout="/" contentBt="Вернуться на главную" />
  </div>
  <div class="header__inner-authorization">
    <form class="form-registration" @click="storageParam">
      <input class="regist-login content-form" type="text" placeholder="Введите логин">
      <Password class="regist-password content-form" v-model="value" toggleMask :feedback="false"
        placeholder="Введите пароль" />
      <router-link exact v-bind:to="'' + rout + ''" class="header__nav-bt" v-if="rout === '/login'">Войти</router-link>
      <router-link exact v-bind:to="'' + rout + ''" class="header__nav-bt" v-if="rout === '/'">Я зафиксировал все данные, кликай снова!</router-link>
    </form>
  </div>
</template>