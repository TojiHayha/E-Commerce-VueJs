<template>
  <div class="card h-100 w-100">
      <img :src="category.imageUrl" class="card-img-top" alt="Category image" />
    <div class="card-body">
      <h5 class="card-title">{{ category.name }}</h5>
      <p class="card-text">
        {{ category.description }}
      </p>
      <router-link :to="{name: 'EditCategory', params: {id: category.id}}" v-show="$route.name == 'Category'">
        <button class="btn btn-primary">Edit</button>
      </router-link>
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
