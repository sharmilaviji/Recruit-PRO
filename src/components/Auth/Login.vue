<template>
<form @submit.prevent="submitform">

    <div class="row q-mb-md">
        <q-input
         class="col"
         outlined v-model="formData.email"
         ref="email"
         label="Email"
        :rules="[ val => isValidEmailAddress(val) || 'Please enter valid email address.']"
       
 />
        </div>
          <div class="row q-mb-md">
        <q-input
         class="col"
         outlined v-model="formData.password"
         ref="password"
         label="Password"
         type="password"
        :rules="[ val => val.length >= 6 || 'Please enter atleast 6 characters.']"
       
 />
        </div>
        <div class="row">
            <q-space />
            <q-btn color="primary" 
            label="Login"
            type="submit" />
            </div>
    </form>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: ['tab'],
    data () {
    return {
        formData: {
      email: '',
      password: ''
    }
    }
  } ,
  methods: {
     ...mapActions('auth',['loginUser']),
      isValidEmailAddress(email){
 var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
      },
     submitform(){
         this.$refs.email.validate()
         this.$refs.password.validate()
         if(!this.$refs.email.hasError && !this.$refs.password.hasError){
            
 this.loginUser(this.formData)
             
            
            
         }
      }
  }
}
</script>