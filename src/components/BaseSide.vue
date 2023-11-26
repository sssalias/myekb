<template>
  <div class="side">
    <div class="wrapper">
      <base-link :link="{name: 'orgs'}">Организации</base-link>
      <base-link :link="{name: 'stats'}" :active="true">Статистика</base-link>
      <base-link :link="{name: 'news'}">Новости</base-link>
    </div>
  </div>
</template>

<script setup>

import BaseLink from "@/components/BaseLink.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/linkMixin";
.side {
  height: calc(100vh - 100px);
  width: 13%;
  position: fixed;
  border-right: 1px solid lightgray;
  background: white;
  //top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    height: 90%;
    width: 70%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
    @include link;

  }
}
</style>