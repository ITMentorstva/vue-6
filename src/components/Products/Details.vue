
<template>
  <div v-for="product in notDiscountedProducts" :key="product.id">
    <ProductInfo :product="product" />
  </div>
</template>

<script>

import ProductInfo from "@/components/Products/Info.vue";

export default {
  name: "ProductDetails",
  components: {ProductInfo},
  inject: ["productList"],
  computed: {
    notDiscountedProducts() {
      return this.productList.filter(product => product.discount === null)
    }
  }
}

</script>