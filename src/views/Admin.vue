<template>
    <RouterLink :to="{name: 'Category'}">
        <button class="btn btn-primary btn-lg">Admin Category</button>
    </RouterLink>
    <br>
    <RouterLink :to="{name: 'Product'}">
        <button class="btn btn-primary btn-lg">Admin Products</button>
    </RouterLink>
</template>
<script>


    export default{

    }
</script>
<style scoped>
.btn{
    margin-bottom: 25px;
}
</style>