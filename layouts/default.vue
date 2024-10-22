<template>
  <div class="starknet-app">
    <Header />
    <div class="container app-container">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  margin-top: 75px;
  min-height: 80vh;
}
</style>