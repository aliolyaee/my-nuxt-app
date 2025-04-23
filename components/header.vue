<template>
  <header class="p-4 bg-blue-600 text-white">
    <h1>سایت من با Nuxt</h1>
    <nav>
      <NuxtLink to="/">خانه</NuxtLink> |
      <NuxtLink to="/about">درباره ما</NuxtLink> |
      <NuxtLink to="/dashboard">داشبورد</NuxtLink> |

      <template v-if="isAdmin">
            <NuxtLink to="/admin" class="bg-white text-blue-600 px-2 py-1 rounded">پنل مدیریت</NuxtLink> |
        </template>
      
      <template v-if="auth">
        <button @click="logout" class="bg-white text-blue-600 px-2 py-1 rounded">
          خروج
        </button>
      </template>

      <template v-else>
        <NuxtLink to="/login" class="bg-white text-blue-600 px-2 py-1 rounded">ورود</NuxtLink>
      </template>

    </nav>
  </header>

  
</template>


<script setup>
const auth = useCookie('auth')
const isAdmin = computed(() => auth.value?.role === 'admin')
const logout = () => {
    const auth = useCookie('auth')
    auth.value = null
    return navigateTo('/')
}
</script>



<!-- <script setup>
const auth = useCookie('auth') // reactive
</script>

<template>
  <header class="p-4 bg-blue-600 text-white flex justify-between items-center">
    <h1 class="text-xl font-bold">سایت من</h1>

    <nav class="space-x-4">
      <NuxtLink to="/">خانه</NuxtLink> |
      <NuxtLink to="/about">درباره ما</NuxtLink> |
      <NuxtLink to="/dashboard">داشبورد</NuxtLink> |

      <template v-if="auth">
        <button @click="() => { auth.value = null; navigateTo('/') }" class="bg-white text-blue-600 px-2 py-1 rounded">
          خروج
        </button>
      </template>

      <template v-else>
        <NuxtLink to="/login" class="bg-white text-blue-600 px-2 py-1 rounded">ورود</NuxtLink>
      </template>
    </nav>
  </header>
</template> -->
