
<template>
  <nav>
    <router-link :to="{name: 'Home'}">Homepage</router-link>
    <router-link :to="{name: 'Products'}">Products</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'Navigation'
  }
</script>

<style scoped src="@/assets/css/partials/navigation.css"></style>