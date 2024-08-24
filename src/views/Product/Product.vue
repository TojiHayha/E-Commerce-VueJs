<template>
  <div class="container">
    <div class="row">
        <div class="col-12 text-center">
        <h4 class="pt-3">Our Products</h4>
        <router-link :to="{ name: 'AddProduct' }">
          <button class="btn">Add New Product</button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <!-- view all products -->
      <div
        v-for="product of products"
        :key="product.id"
        class="col-md-6 col-xl-4 col-12 pt-3 d-flex"
      >
        <ProductBox :product="product" />
      </div>
    </div>
  </div>
</template>
<script>
import ProductBox from "../../components/Product/ProductBox.vue";

export default {
  name: "Product",
  props: ["products"],
  components: { ProductBox },
};
</script>
