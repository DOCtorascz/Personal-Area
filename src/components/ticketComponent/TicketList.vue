<script setup lang="ts">
  import './TicketList.css'

  defineProps<{
    contentInner: string,
  }>()

  let arrTicket: any = [] = []

  fetch('https://api.publicapis.org/entries')
    .then(response => response.json())
    .then(response => ticketInfo(response.entries))
    .catch(err => alert('Ошибочка в запросе' + err))

  function ticketInfo(ticket: object[]) {
    const storageTicket = localStorage.getItem('ticket')
    arrTicket = [...ticket];

    if (storageTicket !== null) {
      const storageTicketObj = JSON.parse(storageTicket);

      arrTicket.push(storageTicketObj.ticket);
    }

    console.log(arrTicket)
  }
</script>

<template>
  <li class="ticket__list" v-for="(item) in arrTicket" :key="item.message">{{ item.API }}</li>
</template>