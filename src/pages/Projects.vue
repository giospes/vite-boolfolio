<template>
    <div class="container">
      <h1>{{ title }}</h1>
      <select name="technology" id="" v-model="selectedTechnology" @change="getData(1)">
        <option value="">All</option>
        <option v-for="(technology, index) in technologies" :key="technology.id" :value="technology.id">{{ technology.name}}</option>
      </select>
      <div class="row">
        <div class="col-12 col-md-6 col-xl-4 p-3" v-for="(project, index ) in projects" :key="project.id">
          <div class="card">
            <div class="card-header">
              <h3>{{project.name }}</h3>
            </div>
            <div class="card-body">
              <p>description: {{ project.description }}</p>
              <p>user: {{ project.user.name }}</p>
            </div>
            <router-link :to="{name: 'single-product', params:{slug: project.slug}}" class="btn btn-primary">Details</router-link>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a v-if="currentPage>1"  aria-label="Previous">
              <button class="page-link"  aria-hidden="true" @click="getData(currentPage - 1)">&laquo;</button>
            </a>
          </li>
          <li class="page-item" v-for="n in lastPage"><button class="page-link"  :class="{ active: currentPage === n }" @click="getData(n)" >{{ n }}</button></li> 
          <li class="page-item">
            <a v-if="currentPage < lastPage"  aria-label="Next">
              <button class="page-link" aria-hidden="true" @click="getData(currentPage + 1) ">&raquo;</button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
    import axios from 'axios';
    export default {
      data(){
        return{
          title: 'Ciao',
          projects: [],
          technologies: [],
          api_url: 'http://127.0.0.1:8000/api',
          currentPage: 1,
          lastPage: null,
          selectedTechnology: ''
        }
      },
      methods:{
        getData(numPage){
          let params = {
            'page': numPage,

          }
          if(this.selectedTechnology){
            params.technology_id = this.selectedTechnology
          }
          axios.get(`${this.api_url}/projects`, {
            params: params
          }).then((res)=>{
            console.log(res.data.results.technologies);
            this.projects = res.data.results.projects.data;
            this.technologies = res.data.results.technologies;
            this.currentPage = res.data.results.projects.current_page;
            this.lastPage = res.data.results.projects.last_page;
          }).catch((errors)=>{
            console.log(errors);
          })
        }
      },
      mounted(){
        this.getData(1)
      }
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>