<template>
  <div class="card h-100 w-100">
    <img :src="category.imageUrl" class="card-img-top" alt="Category image" />
    <div class="card-body">
     
      <router-link :to="{name: 'ShowProducts', params: {id: category.id}}">
        <h5 class="card-title">{{ category.name }}</h5>
      </router-link>
      
      <p class="card-text">
        {{ category.description }}
      </p>
      <router-link
        :to="{ name: 'EditCategory', params: { id: category.id } }"
        v-show="$route.name == 'Category'"
      >
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
.card {
  width: 18rem;
  height: 100%;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
