<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Edit Product</h4>
      </div>
    </div>
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
            <form v-if="product">
                <div class="form-group">
                    <label>Category</label>
                    <select class="form-control" v-model="product.categoryId" required>
                        <option v-for="category of categories" :key="category.id"
                        :value="category.id">{{category.name}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Product Name</label>
                    <input type="text" class="form-control" v-model="product.name" required>
                </div>
                <div class="form-group">
                    <label>Product Description</label>
                    <input type="text" class="form-control" v-model="product.description" required>
                </div>
                <div class="form-group">
                    <label>Product Price</label>
                    <input type="number" class="form-control" v-model="product.price" required>
                </div>
                <div class="form-group">
                    <label>Product Image URL</label>
                    <input type="url" class="form-control" v-model="product.imageUrl" required>
                </div>
                <button type="button" class="btn btn-primary" @click="editProduct">Submit</button>
            </form>
        </div>
        <div class="col-3"></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert';
    export default{
        props:["baseURL", "categories", "products"],
        data(){
            return{
                product: null,
                id: null,
            }
        }, 
        methods: {
           async editProduct() {
                console.log('product', this.product)
                await axios.post( `${this.baseURL}/products/update/${this.id}`, this.product).then(() =>{
                    this.$emit("fetchData");
                    this.$router.push({name: "Product"})
                    swal({
                        text: "product has been updated successfully",
                        icon: "success"
                    })
                }).catch(err => console.log('err', err))
            }
        },
        mounted(){
            this.id = this.$route.params.id;
            this.product = this.products.find(product => product.id == this.id)
        }
    }
</script>