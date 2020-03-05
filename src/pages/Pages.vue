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
          <q-tab name="jobdetails" label="Job Details" />
          <q-tab name="jobdescription" label="Job Descriptions" />
           <q-tab name="companydetails" label="Company Details" />
         
         
         
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="jobdetails">
            <div class="text-h4"></div>
            <jobdetails/>
          </q-tab-panel>

          <q-tab-panel name="jobdescription">
            <div class="text-h4"></div>
          <jobdescription/>
          </q-tab-panel>

          <q-tab-panel name="companydetails">
            <div class="text-h4"></div>
          <companyprofile/>
          </q-tab-panel>


          
          
        </q-tab-panels>
      </q-card>

</q-page>
</template>
<script>
export default {
  data () {
    return {
      tab: 'jobdetails'
    }
  },
  components: {
      'jobdetails': require('components/Auth/Jobdetails.vue').default,
      'jobdescription': require('components/Auth/Jobdescription.vue').default,
      'companydetails': require('components/Auth/Companyprofile.vue').default
      
  
  },
  
  
}
</script>

<style>
.auth-tabs {
    max-width: 500px;
    margin: 0 auto;
}
</style>
