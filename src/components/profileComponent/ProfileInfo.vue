<script setup lang="ts">
  import './ProfileInfo.css'

  defineProps<{
    contentInner: string,
  }>()

</script>

<template>
  <li class="list__inner">{{ contentInner }}</li>
</template>