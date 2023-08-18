<script setup lang="ts">
  // import { authorization } from '../pages/LoginPage.vue';

  let flag = 0;

  function increment(event: any) {

    let contentBt = event.target.getAttribute('href');
    const storage = localStorage.getItem('user')

    if (contentBt !== '/login' && storage === null) {
      let btLoginContent = event.target.parentNode.parentNode.children[1];

      btLoginContent.textContent = 'Нажми на меня, тебе нужно авторизоваться'
      btLoginContent.style.background = 'black'

      console.log(btLoginContent)
      flag += 1
      if (flag > 1) {
        btLoginContent.textContent = 'Ты совсем меня не слушаешь!'
      }
    }
  }

  defineProps<{
    contentBt: string,
    rout: string
  }>()

</script>

<template>
  <router-link exact v-bind:to="'' + rout + ''" @click="increment" class="header__nav-bt">{{ contentBt }}</router-link>
</template>
