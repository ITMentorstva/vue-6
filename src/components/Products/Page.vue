
<template>
  <DiscountedProducts />
  <ProductDetails />
</template>

<script>

  import ProductDetails from "@/components/Products/Details.vue";
  import DiscountedProducts from "@/components/Products/Discounted.vue";

  export default {
    name: "ProductsPage",
    components: {DiscountedProducts, ProductDetails},
  }

</script>