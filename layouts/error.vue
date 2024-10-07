<template>
  <div>
    ajajajaj
    <h1>Error: {{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
    <p>
      <nuxt-link to="/home">Go to Home</nuxt-link>
    </p>
  </div>
</template>

<script setup>
// Using definePageMeta to redirect from error page
definePageMeta({
  layout: 'default',
});

// Handle redirection for 404 errors
const { error } = useError();
if (error.statusCode === 404) {
  navigateTo('/home');
}
</script>