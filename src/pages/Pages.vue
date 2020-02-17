
<template>
 <div class="q-pa-md q-gutter-sm">
    <br><br> <b><center>  WELCOME USER</center></b>
 <q-drawer
 v-model="leftDrawerOpen"
 bordered
 content-class="bg-grey-2">
 <q-list>
   <q-item-label header></q-item-label>
 <q-item to="/company" clickable>
 <q-item-section avatar>
     <q-icon name="list"/>
   </q-item-section>
   <q-item-section>
   <q-item-label>Job Details</q-item-label>
   </q-item-section>
   </q-item>
     </q-list>

      <q-list>
   <q-item-label header></q-item-label>
 <q-item to="/company" clickable>
 <q-item-section avatar>
     <q-icon name="create"/>
   </q-item-section>
   <q-item-section>
   <q-item-label>Job Description</q-item-label>
   </q-item-section>
   </q-item>
     </q-list>

     <q-list>
   <q-item-label header></q-item-label>
 <q-item to='/company' clickable>
 <q-item-section avatar>
     <q-icon name="account_circle"/>
   </q-item-section>
   <q-item-section>
   <q-item-label>Company Profile</q-item-label>
   </q-item-section>
   </q-item>
     </q-list>
     
     
     
</q-drawer>

 </div>
    


    
    </template>
<script>
export default {
  data () {
    return {
      tab: 'company'
    }
  },
   data(){
    return{
      leftDrawerOpen:this.$q.platform.is.desktop
    }
  },


  components: {
     'company': require('components/Auth/Companyprofile.vue').default
      },
  
  
}
</script>

