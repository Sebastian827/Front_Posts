<template>
     <div class="container">
        <div class="row">
        <router-link to="/createPost" class="btn btn-info">Crear Post</router-link>
    </div>
        <div class="card">
        <div class="card-header">
            Posts
        </div>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>categoria</th>
                        <th>nombre</th>
                        <th>descripcion</th>
                        <th>estado</th>
                        <th>Acciones</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="post in posts" :key="post.id">
                        {{findCategory(post.category_id)}}
                        <td>{{post.id}}</td>
                        <td>{{categoryPost}}</td>
                        <td>{{post.name}}</td>
                        <td>{{post.description}}</td>
                        <td>{{post.state}}</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="">
                                <router-link :to="{name:'editPost',params:{id:post.id}}" class="btn btn-primary">Editar</router-link>
                                <button type="button" v-on:click="deletePost(post.id)" class="btn btn-danger">Borrar</button>
                                
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </div>

    </div>

</div>
</template>



<script>
export default {
    data(){
        return{
            posts:[],
            categories:[],
            categoryPost:"",

        }

    },
    created:function(){

        this.getPosts();
        this.getAllcategories()


    },
    methods:{
        getPosts(){
            fetch('http://127.0.0.1:8000/api/post/all')
            .then(res=>res.json())
            .then((datas)=>{
                console.log(datas)
                this.posts=[]
                this.posts=datas.data;
                console.log(this.posts)
                
            })
            .catch(console.log)
        },
        getAllcategories(){
            fetch('http://127.0.0.1:8000/api/category/all')
            .then(resp=>resp.json())
            .then((datass)=>{
            this.categories=datass.data
        })
        .catch(console.log)
        },

        findCategory(id){
            this.categories.forEach((category)=>{
                
                if(category.id===id){
                    console.log(category.name)
                    this.categoryPost=category.name
                }
            })

        },
        deletePost(id){
            const requestOptions = {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            };
            console.log(id)
            fetch('http://127.0.0.1:8000/api/post/'+id+'/destroy',
            requestOptions)
            .then(res=>res.json())
            .then((datas)=>{
                console.log(datas)
                window.location.href='getPosts'
                
            })
            .catch(console.log)
        }
        
        }
        

}
</script>