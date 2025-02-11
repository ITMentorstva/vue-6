<template>

  <Navigation />
  <router-view></router-view>
  <Footer />

  <nav>Test 123</nav>

</template>

<script>


import Navigation from "@/components/Partials/navigation.vue";
import Footer from "@/components/Partials/footer.vue";

export default {
  name: 'App',
  components: {Footer, Navigation},
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

<style src="./assets/css/main.css"></style>
