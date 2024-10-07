<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Oops! Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
    <nuxt-link to="/">Go back to Home</nuxt-link>
  </div>
</template>

<script setup>
// Using definePageMeta to redirect from error page
definePageMeta({
  layout: 'default',
});
const { error } = useError();
if (error.statusCode === 404) {
  navigateTo('/home');
}
</script>