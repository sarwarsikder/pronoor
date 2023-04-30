<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-custom sticky">
        <div class="container">
            <a class="navbar-brand logo" href="#">Pronoor</a>
            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="mdi mdi-menu"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://global.pronoor.com">Global</a>
                    </li>
                    <!--                    <li class="nav-item">-->
                    <!--                        <a class="nav-link" href="#portfolio">Portfolio</a>-->
                    <!--                    </li>-->
                    <!--                    <li class="nav-item">-->
                    <!--                        <a class="nav-link" href="#client">Clients</a>-->
                    <!--                    </li>-->
                    <!--                    <li class="nav-item">-->
                    <!--                        <a class="nav-link" href="#price">Pricing</a>-->
                    <!--                    </li>-->
                    <!--                    <li class="nav-item">-->
                    <!--                        <a class="nav-link" href="#team">Team</a>-->
                    <!--                    </li>-->
                    <!--                    <li class="nav-item">-->
                    <!--                        <a class="nav-link" href="#blog">Blog</a>-->
                    <!--                    </li>-->
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Contact' }">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavComponent"
}
</script>

<style scoped>

</style>
