export default defineNuxtRouteMiddleware((to, from) => {
    const isLoggedIn = useCookie('auth').value

    if (!isLoggedIn && to.path !== '/login') {
        return navigateTo('/login')
    }
})