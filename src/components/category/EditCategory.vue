<template>
   <div class="container">
        <div class="card">
        <div class="card-header">
            Editar categoria
        </div>
        <div class="card-body">
            <form v-on:submit.prevent="updateCategory">
                <div class="form-group">
                  <label for="categoryName">Nombre</label>
                  <input type="text" required
                    class="form-control" name="categoryName" id="categoryName" v-model="category.name" aria-describedby="helpId" placeholder="">
                  <small id="helpId" class="form-text text-muted">Actualiza el nombre de la categoria</small>
                </div>
                <div class="form-group">
                  <label for="categoryDescription">Descripcion</label>
                  <input type="text" required
                    class="form-control" name="categoryDescription" id="categoryDescription" v-model="category.description" aria-describedby="helpId" placeholder="">
                  <small id="helpId" class="form-text text-muted">Actualiza la descripción de la categoria</small>
                </div>
                <div class="row">
                <div class="btn-group" role="group" aria-label="">
                    <button type="submit" class="btn btn-primary">Actualizar</button>
                    <router-link to="/getCategories" class="btn btn-warning">Cancelar</router-link>
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
            category:{}
        }
    },
    created:function(){

    this.getInfo();
},
methods:{


    getInfo(){
        fetch('http://127.0.0.1:8000/api/category/'+this.$route.params.id+'/edit')
        .then(resp=>resp.json())
        .then((datass)=>{
            this.category=datass.data
            console.log(this.category.name)
        })
        .catch(console.log)
    },
    updateCategory(){
        var dataSend={id:this.category.id, name:this.category.name, description:this.category.description}
            console.log(dataSend)
            const requestOptions = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataSend)
            };

            fetch('http://127.0.0.1:8000/api/category/'+this.$route.params.id+'/update',requestOptions)
            .then(resp=>resp.json())
            .then((datass)=>{
                console.log(datass)
                window.location.href='../getCategories'
            })
            .catch(console.log)
    }
}
    
}
</script>