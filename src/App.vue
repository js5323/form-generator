<template>
  <div id="app">
    <main-layout>
      <router-view />
    </main-layout>
  </div>
</template>
<script>
import MainLayout from "@/components/layouts/main.vue";
export default {
  components: {
    MainLayout,
  },
};
</script>
<style lang="less"></style>
