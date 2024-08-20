<template>
  <div class="card h-100 w-100">
      <img :src="category.imageUrl" class="card-img-top" alt="Category image" />
    <div class="card-body">
      <h5 class="card-title">{{ category.name }}</h5>
      <p class="card-text">
        {{ category.description }}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "CategoryBox",
  props: ["category"],
  methods: {},
};
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
}
</style>
