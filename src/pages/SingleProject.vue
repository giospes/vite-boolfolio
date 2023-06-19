<template>
    <h1>{{ project.name}}</h1>
    <p>description: {{ project.description }}</p>
    <p>user id: {{ project.user_id }}</p>
    <p v-if="(project.type)">Type: {{ project.type.name }}</p>
    <p>Technologies:        
        <ul v-if="(project.technologies && project.technologies.length > 0)">
            <li v-for="technology in project.technologies" :key="technology.id">
                {{ technology.name }}
            </li>
        </ul>
        <span v-else >No technology used</span>
    </p>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return{
                project: {},
                api_url: 'http://127.0.0.1:8000/api'
            }
        },
        methods: {
            getProject(){
                axios.get(`${this.api_url}/projects/${this.$route.params.slug}`).then((res)=>{
                    if(res.data.success){
                        this.project = res.data.results;
                    }else{
                        this.$router.push( {name: 'not-found'})
                    }
                }
                ).catch((error)=>{
                    this.$router.push({name: 'not-found', query: { e: error.response.data.message}});
                })
            }
        },
        mounted(){
            this.getProject()
        }
    }
</script>

<style lang="scss" scoped>

</style>