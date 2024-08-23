<template>
    <div class="container">
        <div class="row">
            <h4>Our Products</h4>
        </div>
        <div class="row">
            <!-- view all products -->
             <div v-for="product of products" :key="product.id" 
             class="col-md-6 col-xl-4 col-12 pt-3 d-flex">
                <ProductBox :product="product" />
             </div>
        </div>
    </div>
</template>
<script>
import ProductBox from '../../components/Product/ProductBox.vue';

    export default{
        name: "Product",
        props:["products"],
        components: {ProductBox}
    }
</script>