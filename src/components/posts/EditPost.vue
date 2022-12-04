<template>
    <div class="container">
        <div class="card">
        <div class="card-header">
            Actualizar Post
        </div>
        <div class="card-body">
            <form v-on:submit.prevent="updatePost">
                <div class="form-group">
                  <label for="categoryName">categoria</label>
                  <select v-model="categorySelected"  class="form-select" >
                    <option v-for="category in categories" v-bind:value="category" :key="category.id">
                        {{ category.name }}
                    </option>
                    </select>
                    <small id="helpId" class="form-text text-muted">Selecciona la categoria del post</small>
                  
                </div>
                <div class="form-group">
                  <label for="categoryDescription">Nombre</label>
                  <input type="text" required
                    class="form-control" name="categoryDescription" id="categoryDescription" v-model="post.name" aria-describedby="helpId" placeholder="">
                  <small id="helpId" class="form-text text-muted">Actualiza el nombre del post</small>
                </div>
                <div class="form-group">
                  <label for="categoryDescription">Descripcion</label>
                  <input type="text" required
                    class="form-control" name="categoryDescription" id="categoryDescription" v-model="post.description" aria-describedby="helpId" placeholder="">
                  <small id="helpId" class="form-text text-muted">Actualiza la descripción del post</small>
                </div>
                <div class="form-group">
                  <label for="categoryState">Estado</label>
                  <select v-model="post.state"  class="form-select" >
                    <option value="Publicado">Publicado</option>
                    <option value="No Publicado">No Publicado</option>
                    </select>
                    <small id="helpId" class="form-text text-muted">Selecciona el estado del post</small>
                  
                </div>
                <div class="row">
                <div class="btn-group" role="group" aria-label="">
                    <button type="submit" class="btn btn-primary">Actualizar</button>
                    <router-link to="/getPosts" class="btn btn-warning">Cancelar</router-link>
                </div>
            </div>
            </form>

        </div>
        </div>

    </div>>
</template>

<script>
export default {
    data(){
        return{
            post:{},
            categories:[],
            categorySelected:{}
        }
    },
    created:function(){

    this.getAllcategories()
    this.getPost()

    },
    methods:{
        getAllcategories(){
            fetch('http://127.0.0.1:8000/api/category/all')
            .then(resp=>resp.json())
            .then((datass)=>{
            this.categories=datass.data
        })
        .catch(console.log)
        },
        getPost(){
            fetch('http://127.0.0.1:8000/api/post/'+this.$route.params.id+'/edit')
        .then(resp=>resp.json())
        .then((datass)=>{
            this.post=datass.data
            this.findPost(this.post.category_id)
            console.log(this.post.category_id)
        })
        .catch(console.log)
        },
        findPost(id){
            this.categories.forEach((category)=>{
                
                if(category.id===id){
                    this.categorySelected=category
                }
            })

        },
        updatePost(){
            var dataSend={id:this.post.id, name:this.post.name, description:this.post.description,state:this.post.state,category_id:this.categorySelected.id}
            

            const requestOptions = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataSend)
            };

            fetch('http://127.0.0.1:8000/api/post/'+this.$route.params.id+'/update',requestOptions)
            .then(resp=>resp.json())
            .then((datass)=>{
                console.log(datass)
                window.location.href='../getPosts'
            })
            .catch(console.log)

        }
    }

}
</script>