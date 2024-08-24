<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Our Categories</h4>
        <router-link :to="{ name: 'AddCategory' }">
          <button class="btn">Add Category</button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div
        v-for="category of categories"
        :key="category.id"
        class="col-xl-4 col-md-6 col-12 pt-3 d-flex"
      >
        <CategoryBox :category="category"></CategoryBox>
      </div>
    </div>
  </div>
</template>
<script>
import CategoryBox from "../../components/Category/CategoryBox.vue";
export default {
  name: "Category",
  props:["categories"],
  components: { CategoryBox },
  data() {
    return {
      baseURL: "http://localhost:8080",
      
    };
  },
  methods: {
  },
  mounted() {
  },
};
</script>
<style scoped></style>
