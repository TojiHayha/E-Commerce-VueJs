<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Add New Category</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form>
          <div class="form-group">
            <label>Category Name</label>
            <input type="text" class="form-control" v-model="name" />
          </div>
          <div class="form-group">
            <label>Category Description</label>
            <textarea type="text" class="form-control" v-model="description" />
          </div>
          <div class="form-group">
            <label>Category Image</label>
            <input type="url" class="form-control" v-model="imageURL" />
          </div>
          <div class="form-group text-center">
            <img
              :src="imageURL"
              alt="Category Image"
              v-if="imageURL"
              class="img-fluid mt-3"
            />
          </div>
          <button type="button" class="btn btn-primary" @click="addCategory">
            Submit
          </button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  data() {
    return {
      name: "",
      description: "",
      imageURL: "",
    };
  },
  methods: {
    addCategory() {
      const newCategory = {
        name: this.name,
        description: this.description,
        imageUrl: this.imageURL,
      };

      const baseURL = "http://localhost:8080";

      axios({
        method: "post",
        url: `${baseURL}/categories/create`,
        data: newCategory,
        Headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          swal({
            text: "Category added successfully",
            icon: "success",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped></style>
