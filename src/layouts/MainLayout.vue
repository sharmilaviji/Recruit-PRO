<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
      
    <q-toolbar-title>
          <center>RecruitPro</center>
        </q-toolbar-title>
<q-btn
v-if="!loggedIn"
 to="/auth"
flat
icon-right="account_circle"
label="Login"
class="absolute-right" />

<q-btn
v-else
@click="logoutUser"
flat
icon-right="account_circle"
label="Logout"
class="absolute-right" />
  </q-toolbar>
    </q-header>






  <q-drawer
 v-model="leftDrawerOpen"
 bordered
 content-class="bg-grey-2">
 <q-list>
   <q-item-label header></q-item-label>
 <q-item to="auth/" clickable>
 <q-item-section avatar>
     <q-icon name=""/>
   </q-item-section>
   <q-item-section>
   <q-item-label>My Profile</q-item-label>
   </q-item-section>
   </q-item>
     </q-list>
</q-drawer>




 <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
 name:'MyLayout',
 
  data(){
    return{
      leftDrawerOpen:this.$q.platform.is.desktop
    }
  },
 
 computed: {
   ...mapState('auth',['loggedIn'])

 },
 methods: {
   ...mapActions('auth',['logoutUser']),
   
   
 }
}
</script>
