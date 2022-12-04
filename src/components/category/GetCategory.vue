<template>
    <div class="container">
        <div class="row">
        <router-link to="/createCategory" class="btn btn-info">Crear categoria</router-link>
        </div>
        <div class="card">
        <div class="card-header">
            Categorias
        </div>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Acciones</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="category in categories" :key="category.id">
                        <td>{{category.id}}</td>
                        <td>{{category.name}}</td>
                        <td>{{category.description}}</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="">
                                <router-link :to="{name:'EditCategory',params:{id:category.id}}" class="btn btn-primary">Editar</router-link>
                                <button type="button" v-on:click="deleteCategory(category.id)" class="btn btn-danger">Borrar</button>
                                
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
            categories:[]
        }

    },
    created:function(){

        this.getCategories();


    },
    methods:{
        getCategories(){
            fetch('http://127.0.0.1:8000/api/category/all')
            .then(res=>res.json())
            .then((datas)=>{
                console.log(datas)
                this.categories=[]
                this.categories=datas.data;
                console.log(this.categories)
                
            })
            .catch(console.log)

        },
        deleteCategory(id){
            const requestOptions = {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            };
            console.log(id)
            fetch('http://127.0.0.1:8000/api/category/'+id+'/destroy',
            requestOptions)
            .then(res=>res.json())
            .then((datas)=>{
                console.log(datas)
                window.location.href='getCategories'
                
            })
            .catch(console.log)
        }
    }
}
</script>
