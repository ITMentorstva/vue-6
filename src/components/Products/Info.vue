<template>
  <div class="product-card">
    <p class="product-name">{{ product.name }}</p>
    <p v-if="product.discount === null" class="product-price">{{ product.price }} USD</p>
    <p v-else class="product-discounted">
      <span class="original-price">{{ product.price }} USD</span>
      <span class="discounted-price">{{ getDiscountedPrice(product) }} USD</span>
    </p>
    <p class="product-length">Length: {{ product.length }}</p>
  </div>
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