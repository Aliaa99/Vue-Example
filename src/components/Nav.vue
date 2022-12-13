<template>
        <v-card>
      <v-app-bar
        
        dark
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>
          <v-img width="50px" src="../assets/logo.jpg" />
        </v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item to ="/" v-if =" isAuthenticated ">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                  Home
              </v-list-item-title>
            </v-list-item>

            <v-list-item to="/about" v-if =" isAuthenticated ">
              <v-list-item-icon>
                <v-icon>mdi-information</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                About-us
              </v-list-item-title>
            </v-list-item>

            <v-list-item to="/menu" v-if =" isAuthenticated ">
              <v-list-item-icon>
                <v-icon>mdi-menu</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                Menu
              </v-list-item-title>
            </v-list-item>

            <v-list-item to="/opinions" v-if ="  isAuthenticated ">
              <v-list-item-icon>
                <v-icon>mdi-dialpad</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                opinions
              </v-list-item-title>
            </v-list-item>

            <v-list-item to="/addopinion" v-if ="  isAuthenticated ">
              <v-list-item-icon>
                <v-icon>mdi-message-text</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                addopinion
              </v-list-item-title>
            </v-list-item>

            <v-list-item to="signin" v-if =" !isAuthenticated ">
              <v-list-item-icon>
                <v-icon>mdi-signin</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                Signin
              </v-list-item-title>
            </v-list-item>

            <v-list-item to="register" v-if = "  !isAuthenticated ">
              <v-list-item-icon>
                <v-icon>mdi-register</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                Register  
              </v-list-item-title>
            </v-list-item>

            <v-list-item to="/signin" v-if =" isAuthenticated " v-on:click= 'logout()'>
              <v-list-item-icon>
                <v-icon>mdi-information</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                logout
              </v-list-item-title>
            </v-list-item>

          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
  </v-card>

</template>

<style>
    .v-navigation-drawer{
      height: auto !important;
    }
    </style>
    <script>
    
    export default {
      
      name: 'App',
    
      data: () => ({
        drawer: false,
        group: null,
       
        
      }),
      computed: {
        isAuthenticated() {
            // return localStorage.getItem('token') ? true : false
          return  this.$store.getters.isauth 
        }

      },
      methods:{
        logout(){
          console.log(localStorage.token)
          this.$store.commit('TOGGLE_NAV',false);
          return localStorage.removeItem('token') ;


        }
      }
    };
    </script>
    