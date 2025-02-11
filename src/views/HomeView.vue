
<template>
  <DiscountedProducts />
  <ProductDetails />
</template>

<script>

import DiscountedProducts from "@/components/Products/Discounted.vue";
import ProductDetails from "@/components/Products/Details.vue";

export default {
  name: 'HomeView',
  components: {ProductDetails, DiscountedProducts}
}

</script>