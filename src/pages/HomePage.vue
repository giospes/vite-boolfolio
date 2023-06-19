<template>
    <h1>Home Page</h1>
    <div class="row">
        <div class="col-12 col-md-6 col-xl-4 p-3" v-for="(project, index ) in projects" :key="project.id">
          <div class="card">
            <div class="card-header">
              <h3>{{project.name }}</h3>
            </div>
            <div class="card-body">
              <p>description: {{ project.description }}</p>

            </div>
            <router-link :to="{name: 'single-product', params:{slug: project.slug}}" class="btn btn-primary">Details</router-link>
          </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return{
                projects: [],
                technologies: [],
                api_url: 'http://127.0.0.1:8000/api'
            }
        },
        methods: {
            getData(){
                axios.get(`${this.api_url}/mixed`).then((res)=>{
                    console.log(res);
                    this.projects = res.data.results.projects;
                    this.technologies = res.data.results.technologies; 
                }).catch((errors)=>{
                    console.log(errors);
                })
            }
        },
        mounted(){
            this.getData()
        }
    }
</script>

<style lang="scss" scoped>

</style>