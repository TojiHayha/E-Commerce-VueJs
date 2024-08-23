<template>
  <div class="card h-100 w-100">
    <img :src="product.imageUrl" class="card-img-top" alt="Product image" />
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">
        {{ product.description.substring(0, 65) }}...
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>
<script>
    export default{
        name: "ProductBox",
        props: ["product"],
    }
</script>
<style scoped>
.card-img-top {
  object-fit: cover;
}
</style>