export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/') {
    return navigateTo('/home'); // Redirect to /home
  }
});