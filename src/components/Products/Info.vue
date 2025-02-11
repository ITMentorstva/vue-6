<template>
  <p>{{ product.name }}</p>
  <p v-if="product.discount === null">{{ product.price }}</p>
  <p v-else>{{ product.price}} -> {{ getDiscountedPrice(product) }}</p>
  <p>{{ product.length }}</p>
</template>

<script>
  export default {
    name: "ProductInfo",
    props: {
      product: Object
    },
    methods: {
      getDiscountedPrice(product) {
        return (product.price * (1 - product.discount / 100)).toFixed(2);
      }
    }
  }
</script>