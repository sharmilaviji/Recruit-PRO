<template>
<q-page padding>
 <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="signin" label="SIGNIN" />
          <q-tab name="login" label="LOGIN" />
         
         
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="signin">
            <div class="text-h6"></div>
            <signin/>
          </q-tab-panel>

          <q-tab-panel name="login">
            <div class="text-h6"></div>
          <login/>
          </q-tab-panel>

          
          
        </q-tab-panels>
      </q-card>

</q-page>
</template>
<script>
export default {
  data () {
    return {
      tab: 'signin'
    }
  },
  components: {
      'signin': require('components/Auth/Signin.vue').default,
      'login': require('components/Auth/Login.vue').default
      
  
  },
  
  
}
</script>

<style>
.auth-tabs {
    max-width: 500px;
    margin: 0 auto;
}
</style>