<template>
    <div class="container">
    
        <div >
            <v-card
            class="mx-auto opinion-card"
            outlined
            v-for="( item, i ) in items" 
            :key="i"
            >
            <v-btn @click="deleteItem(item, i)"><v-icon>mdi-delete</v-icon></v-btn>
            <v-list-item  >
                <v-list-item-content>
                <v-list-item-title class="text-h5 mb-1">
                    {{item.name}}
                </v-list-item-title>
                <v-list-item-subtitle>
                    {{item.description}}
                </v-list-item-subtitle>
                </v-list-item-content>
                
            </v-list-item>
        
            </v-card>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
          items :[]
        }
    },
    methods:{
        getdata(){
            return this.items = this.$store.getters.get
        },
        deleteItem(item){
            this.$store.commit('DELETE_ITEM', item);

        }
    },
    beforeMount(){
        this.getdata()
    }
}
</script>