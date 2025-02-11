
<template>
  <div class="product-container" v-for="product in productList" :key="product.id">
    <ProductInfo :product="product" />
  </div>
</template>

<script>

import ProductInfo from "@/components/Products/Info.vue";

export default {
  name: "ListProducts",
  components: {ProductInfo},
  props: [
      'type'
  ],
  inject: ["productList"],
  created() {
    if(this.type === 'discounted') {
      this.productList = this.discountedProducts;
    } else if(this.type === 'not_discounted') {
      this.productList = this.notDiscountedProducts;
    }
  },
  computed: {
    notDiscountedProducts() {
      return this.productList.filter(product => product.discount === null)
    },
    discountedProducts() {
      return this.productList.filter(product => product.discount !== null)
    }
  }
}

</script>

<style src="@/assets/css/partials/productDetails.css"></style>