<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">Edit Category</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form v-if="category">
                    <div class="form-group">
                        <label>Category Name</label>
                        <input type="text" class="form-control" v-model="category.name" required>
                    </div>
                    <div class="form-group">
                        <label>Category Description</label>
                        <input type="text" class="form-control" v-model="category.description" required>
                    </div>
                    <div class="form-group">
                        <label>Category Image URL</label>
                        <input type="url" class="form-control" v-model="category.imageUrl" required>
                    </div>
                    <button type="button" class="btn btn-primary" @click="editCategory">Submit</button>
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
        props:["baseURL", "categories"],
        data(){
            return{
                category: null,
                id: null,
            }
        },
        methods:{
           async editCategory(){
                delete this.category["products"]
                await axios.post( `${this.baseURL}/categories/update/${this.id}`, this.category).then(() =>{
                    this.$emit("fetchData");
                    this.$router.push({name: "Category"})
                    swal({
                        text: "category has been updated successfully",
                        icon: "success"
                    })
                }).catch(err => console.log('err', err))
            }
        },
        mounted(){
            this.id = this.$route.params.id;
            this.category = this.categories.find(category => category.id == this.id)
        }
    }
</script>