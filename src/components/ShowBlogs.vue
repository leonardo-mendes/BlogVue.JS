<template>
  <div class="showBlogs container">
    <div class="row">
        <div class="col-sm-12">
            <h2>All blogs articles</h2>
            <div v-for="(blog, index) in blogs" :key="index" class="single-body">
                <h2 v-customFont="25">{{blog.title}}</h2>
                <article>{{blog.body}}</article>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowBlogs',
  data () {
    return {
      blogs: []
    }
  },
  methods: {

  },
  created () {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function (data) {
      this.blogs = data.body.slice(0, 10)
    })
  }
}
</script>

<style scoped>
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
