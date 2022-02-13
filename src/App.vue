<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from '@/components/HelloWorld.vue';
</script>

<template>
  <div
    class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"
  >
    <img alt="Vue logo" src="@/assets/logo.png" />
    <div class="shrink-0" />
    <div>
      <div class="text-xl font-medium text-black">Logo</div>
      <p class="text-slate-500">You have a new message!</p>
    </div>
  </div>
  <hello-world msg="Hello Vue 3 + TypeScript + Vite" :xxx="123" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
