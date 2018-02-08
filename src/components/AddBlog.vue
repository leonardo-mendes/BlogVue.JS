<template>
  <div class="addBlog container">
    <div class="row"  v-if="!blog.submitted">
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <h2>Add a new Blog post.</h2>
      </div>
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <form>
          <label>Blog Title:</label>
          <input type="text" v-model="blog.title" required>
          <label>Blog Content:</label>
          <textarea v-model="blog.content"></textarea>
          <div id="checkboxes">
            <label><b>Blog Categories:</b></label>
            <label>Ninjas</label>
            <input type="checkbox" value="ninjas" v-model="blog.categories" />
            <label>Wizards</label>
            <input type="checkbox" value="wizards" v-model="blog.categories" />
            <label>Mario</label>
            <input type="checkbox" value="mario" v-model="blog.categories" />
            <label>Cheese</label>
            <input type="checkbox" value="cheese" v-model="blog.categories" />
          </div>
          <b-button variant="primary" v-on:click.prevent="post">Send</b-button>
        </form>
      </div>
    </div>
    <h3 v-if="blog.submitted">Thanks for adding your post!</h3>
    <div class="row">
      <div class="col-sm-12">
        <div class="preview">
          <h3>Preview Blog</h3>
          <p>Blog Title: {{blog.title}}</p>
          <p>Blog Content: {{blog.content}}</p>
          <p>Blog Categories:</p>
          <ul>
            <li v-for="(index, category) in blog.categories" :key="index">{{ category }}</li>
          </ul>
        </div>
      </div>
    </div><br>
  </div>
</template>

<script>
export default {
  name: 'AddBlog',
  data () {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        submitted: false
      }
    }
  },
  methods: {
    post: function () {
      this.$http.post('https://jsonplaceholder.typicode.com/posts/', {
        // O objeto enviado tem que ser como abaixo devido ao JSONplaceholder
        title: this.blog.title,
        body: this.blog.content,
        userId: 1
      }).then(function (data) {
        console.log(data)
        this.blog.submitted = true
      })
    }
  }
}
</script>

<style scoped>
.addBlog *{
    box-sizing: border-box;
}
.add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>
