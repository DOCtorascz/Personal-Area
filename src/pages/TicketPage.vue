<script setup lang="ts">
  import './style.css'
  import TicketList from '../components/ticketComponent/TicketList.vue';
  import BtnNavigationPanel from '../components/BtnNavigationPanel.vue'

  function tiketAdd(event: any) {
    event.preventDefault();
    let contentForm = event.target.tagName;

    if (contentForm === 'BUTTON') {
      const valueTicket = { API: event.target.parentNode.children[0].value, message: event.target.parentNode.children[0].value};

      localStorage.setItem('ticket', JSON.stringify(valueTicket))
    }
  }

</script>

<template>
  <div class="container">
    <ul class="ticket">
      <TicketList />
    </ul>
    <form @click="tiketAdd">
      <input type="text">
      <button class="ticket__add-tic">Добавить тикет</button>
    </form>
  </div>
  <BtnNavigationPanel rout="/" contentBt="Вернуться на главную" />
</template>