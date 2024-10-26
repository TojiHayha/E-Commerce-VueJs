<template>
  <div class="card h-100 w-100">
    <img :src="product.imageUrl" class="card-img-top" alt="Product image" />
    <div class="card-body">
      <router-link :to="{name:'ShowDetails', params: {id : product.id}}">
        <h5 class="card-title">{{ product.name }}</h5>
      </router-link>
      <p class="card-text">{{ product.description.substring(0, 65) }}...</p>
      <router-link :to="{ name: 'EditProduct', params: { id: product.id } }"
      v-show="$route.name == 'Product'">
        <button class="btn btn-primary">Edit</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductBox",
  props: ["product"],
};
</script>
<style scoped>
.card {
  width: 18rem; 
  height: 100%; 
}

.card-img-top {
  height: 200px; 
  object-fit: contain; 
}

a{
    text-decoration: none;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-title{
  color: #484848;
}
</style>
