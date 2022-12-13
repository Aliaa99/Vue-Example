<template>

    <v-container>
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

                    <v-btn type="submit" @click="Add()">
                        Add
                    </v-btn>
                </v-form>

            </v-col>
        </v-row>
        {{opinions}}

    </v-container>
  </template>

  <script>
      export default {
        name: 'addopinion',
        props:{ 'name':"",
                'description':""
            },
        data: () => ({

            opinions:{
                name:"",
                description:""
            },

        }),

        methods:{
            Add(){
            this.$store.commit('addoppinion',this.opinions)
               
               
            }
        }
      }
  </script>