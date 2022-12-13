<template>
  <v-app>
    <Nav ></Nav>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
<style>
.v-navigation-drawer{
  height: auto !important;
}
</style>
<script>
import Nav from './components/Nav.vue';

export default {
    name: "App",
    data: () => ({
        drawer: false,
        group: null,
       
    }),
    components: { Nav }
};
</script>
