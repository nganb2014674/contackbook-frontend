<!-- <script>
export default {

}
</script>

<template>
  <h1>Hello, Vue.js</h1>
</template>

<style>
.page {
  max-width: 400px;
  margin: auto;
}
</style> -->
<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
    components: {
        AppHeader,
    },
};
</script>

<template>
    <div id="app">
        <AppHeader />
        <div class="container mt-3">
            <router-view />
        </div>
    </div>
</template>

<style>
.page {
    max-width: 400px;
    margin: auto;
}
</style>
