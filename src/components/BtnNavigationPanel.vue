<script setup lang="ts">
// import { authorization } from '../pages/LoginPage.vue';

let flag = 0;

function increment() {
  document.addEventListener('click', (event: any) => {
    let contentBt = event.target.textContent;
    if (contentBt !== 'Login') {
      let btLoginContent = event.target.parentNode.parentNode.children[1];

      btLoginContent.textContent = 'Нажми на меня, тебе нужно авторизоваться'
      btLoginContent.style.background = 'black'

      flag += 1
      if (flag > 1) {
        btLoginContent.textContent = 'Ты совсем меня не слушаешь!'
      }
    } else if (contentBt === 'login') {
      // authorization(event)
    }
  })
}

defineProps<{
  contentBt: string,
  rout: string
}>()

</script>

<template>
  <router-link exact v-bind:to="''+rout+''" @click="increment" class="header__nav-bt">{{ contentBt }}</router-link>
</template>
