<template>
    <div>
        <h1>the number is {{ views }}</h1>
        <button class="btn btn-primary" @click="updateCounter(1)">Increase</button>
        <button @click="updateCounter(-1)">Decrease</button>
        
        <br><br>

        <div v-for="(blog, i) in blogs" :key="i" v-if="blogs.length">
            <h1>{{ blog.title }}</h1>
            <p>{{ blog.post }}</p> 
            
        </div>

        <div>
            <h1 v-if="status">TRUE</h1>
            <h1 v-else>FALSE</h1>
            <button @click="toggleStatus()">Toggle Status</button>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            views : 0,
            blogs: [],
            status : false,
        }
    },

    methods: {
        updateCounter(number){
            this.views += number
        },
        toggleStatus(){
            this.status = !this.status
        }
    },

    created(){
        // call the server to get the views of this blog post
        this.views = 100
        // get the blog posts
        let posts = [
            {title: 'this is blog title 1', post : 'this is the blog post 1', id : 1},
            {title: 'this is blog title 2', post : 'this is the blog post 1', id : 2},
            {title: 'this is blog title 3', post : 'this is the blog post 1', id : 3},
        ]

        this.blogs = posts
    }
}
</script>
