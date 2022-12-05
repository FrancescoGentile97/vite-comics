<template>
    <div class="">
        <!-- il .thumb è per il json mandato -->
        <img :src="card.thumb" class="card-img">
        <div>
            <!-- card.series sempre per riferirmi al json  -->
            <h5 class="card-title">{{card.series}}</h5>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            // non mi ricordo se il required è un requisito d'obbligo 
            required: true,
        }
    }
}

</script>

<style scoped>
img {
    aspect-ratio: 1/1;
    object-fit: cover;
}

</style>