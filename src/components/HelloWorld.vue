<template>
  <v-container>
    <v-row class="text-center">
      <v-carousel hide-delimiters cycle :interval="interval">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>


    </v-row>
  </v-container>
</template>

<script>
  export default {

    data: () => ({
      items:[
        {src: require("@/assets/dish1.jpg")},
        {src: require("@/assets/dish2.jpeg")},
        {src: require("@/assets/dish3.jpg")},
        ],
        interval:2000,
      }),
  }
</script>
