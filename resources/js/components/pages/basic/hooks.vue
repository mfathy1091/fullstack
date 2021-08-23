<template>
    <div>
        <h1 ref="myref">Hook tutorial</h1>
        <p>My name is: {{ name }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'sadek'
            }
        },

        created() {
            console.log(this.name);
        },

        mounted() {
            console.log(this.$refs.myref);
        }
    }
</script>
