<script setup>
const login = () => {
  const auth = useCookie('auth')
  auth.value = { role: 'user' }
  return navigateTo('/dashboard')
}
</script>

<template>
  <div>
    <h2>صفحه لاگین</h2>
    <button @click="login">ورود</button>
  </div>
</template>
