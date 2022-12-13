<template>

                <v-card
                class="mx-auto"
                outlined
                >
                <v-list-item >
                    <v-list-item-content>
                    <v-list-item-title class="text-h5 mb-1">
                        {{name}}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        {{description}}
                    </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-avatar
                        class="ma-3"
                        size="125"
                        tile
                    >
                        <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        ></v-img>
                    </v-avatar>
                </v-list-item>
                {{ getdata.name}}

                </v-card>
  </template>
  
<script>
    export default{
        computed:{
            getdata(){
                return this.$store.getters.get
                    }

        }
    }
</script>