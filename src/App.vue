<template>
    <Navbar></Navbar>
  <router-view v-if="categories && products"
  :baseURL="baseURL"
  :categories="categories"
  :products="products"
  @fetchData="fetchData"
  >
  </router-view>
</template>

<script>
import axios from "axios";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  data(){
    return{
      baseURL : "http://localhost:8080",
      products: null,
      categories: null, 
    }
  },
  methods: {
    async fetchData(){

      // api get all categories
      await axios.get(this.baseURL + "/categories")
      .then((response) => {
        this.categories = response.data;
      }).catch((err) => console.log('err', err));

      //api get all products
      await axios.get(this.baseURL + "/products")
      .then((response) => {
        this.products = response.data;
      }).catch((err) => console.log('err', err));



    }
  },
  mounted(){
    this.fetchData();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
