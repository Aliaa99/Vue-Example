<template>

    <v-container class="add-opinion">
        <v-row>
            <v-col>
                <h1>your opinion</h1>
                <v-form >
                    <v-text-field v-model= "opinions.name"
                    hint="enter your name"
                    label="name"
                    >
                    </v-text-field>
                    
                    <v-textarea  v-model= "opinions.description"
                    label="your opinion"
                    >
                   </v-textarea>
                   
                    <v-btn type="submit" @click='addopinion()' >
                        Add
                    </v-btn>
                </v-form>

            </v-col>
        </v-row>
        
    </v-container>
  </template>

  <script>
      export default {
        name: 'addopinion',
        data() {
            return {
                opinions:{
                    name:"",
                    description:"",
                   
                },
            }
        },
        
        computed: {
        },


        methods:{
            addopinion(){
                this.$store.commit('ADD_OPINION', this.opinions)
            }                           
              
            }
        }
      
  </script>