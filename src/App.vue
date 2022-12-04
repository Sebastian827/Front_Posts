<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="nav navbar-nav">
        <router-link to="/getCategories" class="nav-link">Categorias</router-link> |
          <router-link to="/getPosts" class="nav-link">Posts</router-link>
      </div>
      
  </nav>
  <br/>
  <router-view/>
</template>

