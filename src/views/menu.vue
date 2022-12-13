<template>
 <div>
  <v-container>
    <v-row>
      <v-col
        v-for="n in 3"
          :key="n"
          >
        <v-card
            class="mx-auto"
            max-width="344"
            v-for="item in items" :key="item.id"
          >
          
            <v-img
              :src= "item.url"
              height="200px"
            ></v-img>

            <v-card-title>
              {{item.title}}
            </v-card-title>

          </v-card>
    
      </v-col>
    </v-row>
  </v-container>

    <!-- <v-card
    class="mx-auto"
    max-width="344"
    v-for="item in items" :key="item.id"
  >
  
    <v-img
      :src= "item.url"
      height="200px"
    ></v-img>

    <v-card-title>
      {{item.title}}
    </v-card-title>

  </v-card> -->
      
 </div>
</template>
<script>
  export default {
    name: 'menu',

    data: () => ({
        items:null,
    }),
      mounted () {
         this.axios
        .get('https://jsonplaceholder.typicode.com/photos')
        .then(response =>{
          const { data } = response ;
          this.items = data
          console.log(this.items)
        }
         
        );
         

  }
}
</script>
