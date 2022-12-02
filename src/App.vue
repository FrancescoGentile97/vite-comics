<script>
import NavBar from "./components/NavBar.vue";
import HelloWorld from './components/HelloWorld.vue'
import Main from "./components/Main.vue";
import LinkList from "./components/LinkList.vue";
import Footer from "./components/Footer.vue";
import Credits from "./components/Credits.vue";
export default {
  components: {
    NavBar, HelloWorld, Main, LinkList, Footer, Credits
  },

}
</script>

<template>
  <NavBar></NavBar>
  <Main></Main>
  <LinkList></LinkList>
  <HelloWorld />
  <Footer></Footer>
  <Credits></Credits>
</template>

<style>

</style>
