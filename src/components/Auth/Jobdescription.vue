<template>
<form>
  <br>
  <p><center><b>Company Profile</b></center></p>
<div class="q-pa-md">
 <q-input 
 outlined
  v-model="formData.text"
  class="col"
label="Name*" />
    </div>

    <div class="q-pa-md">
 <q-input 
 outlined
  v-model="formData.text"
  class="col"
label="Your Name*" />
    </div>

    <div class="q-pa-md">
 <q-input 
 outlined
  v-model="formData.text"
  class="col"
label="Your Name*" />
    </div>

     <div class="q-pa-md">
   
   
      <q-select outlined v-model="model" :options="options" label="Outlined" />
    </div>
    
    
    
    
    </form>
</template>
<script>


export default {

data () {
    return {
      model: null,
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ]
    }
  },
data () {
    return {
        formData: {
      text: ''
        }
    }
  },
 
}
  
  
</script>

