<template>
  <div id="app">
    <addblog></addblog>
    <showblogs></showblogs>
  </div>
</template>

<script>
/*
  No template acima se quisermos utilizar alguma variavel do App nos componentes filhos devemos utilizar conforme abaixo:
  <app_header v-bind:nome_da_variavel_no_props_do_component="nome_da_variavel_aqui"></app_header>
*/

/* Todos os imports realizados nesse arquivo, são usados somente aqui, como por exemplo:
import Nome do componente from './components/Componente'
export default {
  name: 'App',
  components: {
    Nome variavel: Nome do componente
  }
}
*/
import AddBlog from '../components/AddBlog.vue'
import ShowBlogs from '../components/ShowBlogs.vue'

export default {
  name: 'App',
  components: {
    addblog: AddBlog,
    showblogs: ShowBlogs
  },
  data () {
    return {
    }
  }
}
</script>

<style>
/*Quando utilizado o <style> o css é aplicado em toda a pagina que o componente se encontra para evitar usamos <style scoped>*/
</style>
