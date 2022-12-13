<template>
 
    <v-container>
        <h1>Register</h1>
        <v-row>
            <v-col cols="6">
              <v-img src="../assets/dish2.jpeg"/>
            </v-col>
            <v-col cols="6">
                <v-form >
                    <v-text-field label="email" v-model="email">      
                    </v-text-field>
                    <v-text-field label =" password"  type="password" v-model="pass">
                    </v-text-field>

                    <v-btn type="submit" @click="register()">
                        register
                    </v-btn>
                </v-form>
            </v-col>
        </v-row>
        </v-container>
</template>
<script>
import axios from 'axios';

  export default {
    name: 'register',
    data: () => ({
        details:{email:"" , password:""} 
    }),
    methods:{
     register(){
        this.axios.post('https://reqres.in/api/register',{ ...this.details}).then((res) => {
            const { data } = res;
            localStorage.setItem("token", data.token);
            this.$router.push('/signin');

       
            })
     }
}

 }
</script>