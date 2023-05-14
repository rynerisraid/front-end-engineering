<template lang="">
  <router-view></router-view>
  
</template>
<script lang="ts" setup>

import { defineComponent, ref, Ref } from "vue"

import { useUserStore } from "./stores/user";
const user = useUserStore()



</script>

<style scoped>

</style>
  