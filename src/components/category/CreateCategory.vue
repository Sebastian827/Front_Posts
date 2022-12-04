<template>
    <div class="container">
        <div class="card">
        <div class="card-header">
            Crear categoria
        </div>
        <div class="card-body">
            <form v-on:submit.prevent="createCategory">
                <div class="form-group">
                  <label for="categoryName">Nombre</label>
                  <input type="text" required
                    class="form-control" name="categoryName" id="categoryName" v-model="category.name" aria-describedby="helpId" placeholder="">
                  <small id="helpId" class="form-text text-muted">Escribe el nombre de la categoria</small>
                </div>
                <div class="form-group">
                  <label for="categoryDescription">Descripcion</label>
                  <input type="text" required
                    class="form-control" name="categoryDescription" id="categoryDescription" v-model="category.description" aria-describedby="helpId" placeholder="">
                  <small id="helpId" class="form-text text-muted">Escribe una descripcion a la categoria</small>
                </div>
                <div class="row">
                <div class="btn-group" role="group" aria-label="">
                    <button type="submit" class="btn btn-primary">Crear</button>
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
    methods:{
        createCategory(){
            

            var dataSend={name:this.category.name, description:this.category.description}
            console.log(dataSend)
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataSend)
            };

            fetch('http://127.0.0.1:8000/api/category/store',requestOptions)
            .then(resp=>resp.json())
            .then((datass)=>{
                console.log(datass)
                window.location.href='getCategories'
            })
            .catch(console.log)

        }

    }
}
</script>