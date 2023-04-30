<template>
    <NavComponent/>
    <router-view></router-view>
    <FooterComponent/>
</template>
<script setup>
import NavComponent from "../components/NavComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
</script>
