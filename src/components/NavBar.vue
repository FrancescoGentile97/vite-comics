<template>
    <nav>
        <div class="container">
            <div class="d-flex justify-content-between">
                <img src="../../public/dc-logo.png" alt="" class="img-fluid">
            </div>
            <div class="nav-list">
                <ul d-flex>
                    <li v-for="(navLink,i) in navLinks" class="list-item unstyled"><a href="#">{{navLink}}</a></li>
                </ul>
            </div>
        </div>
    </nav>
    

    
</template>

<script>
export default {
    data (){
        return {
            navLinks: ["Characters", "Comics", "Movies", "TV", "Games", "Collectibles", "Videos", "Fans", "News", "Shop"],
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: red;
}

</style>