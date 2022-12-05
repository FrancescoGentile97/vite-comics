<template>
   <main>
    <div class="bg-blue">
        <div class="container">
            <!-- inserire il current series con margine negativo o absolute -->
        </div>
        <!-- sezione delle "cards" -->
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 my-2">
            <!-- all'interno di questo ciclo dovrei inserire il component che ho creato per la card -->
            <div class="col" v-for="(singleCard,i) in comicsList" :key="(singleCard.series + i)">
                <CardVue :card="singleCard"></CardVue>
            </div>
        </div>
    </div>
   </main>
</template>

<script>
import DcList from '../dc-list.js';
import CardVue from './Card.vue';
export default {
    components: {CardVue},
    data (){
        return{
            comicsList: DcList,
        }
    },
}
</script>

<style>

</style>