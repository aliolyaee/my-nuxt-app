<script setup lang="ts">
import Header from '~/components/header.vue';

</script>

<template>
    <Header />
    <div class="flex items-center justify-center h-screen bg-gray-100">
      <div class="bg-white p-8 shadow-lg rounded w-full max-w-md">
        <NuxtPage />
      </div>
    </div>
  </template>
  