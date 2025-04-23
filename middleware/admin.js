export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useCookie('auth')

    if (!auth.value) {
        return navigateTo('/login')
    }

    if (auth.value.role !== 'admin') {
        return navigateTo('/unauthorized') // یا برگرد به home یا dashboard
    }
})
