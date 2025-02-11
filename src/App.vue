<template>

  <ProductsPage />

</template>

<script>

import ProductsPage from "@/components/Products/Page.vue";

export default {
  name: 'App',
  components: {ProductsPage},
  provide() {
    return {
      productList: this.productList
    }
  },
  data: () => ({
    productList: [
      {
        "name": "HTML Course",
        "price": 150,
        "length": "3 months",
        "discount": null
      },
      {
        "name": "JavaScript Course",
        "price": 200,
        "length": "4 months",
        "discount": 50
      },
      {
        "name": "Python Bootcamp",
        "price": 300,
        "length": "6 months",
        "discount": null
      },
      {
        "name": "Web Design Masterclass",
        "price": 180,
        "length": "3.5 months",
        "discount": 50
      },
      {
        "name": "ReactJS Training",
        "price": 250,
        "length": "5 months",
        "discount": null
      }
    ]
  })
}
</script>
