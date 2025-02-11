<template>
  <ListProducts type="all"></ListProducts>
</template>

<script>
  import ListProducts from "@/components/Products/ListProducts.vue";

  export default {
    name: 'ProductsView',
    components: {ListProducts}
  }
</script>