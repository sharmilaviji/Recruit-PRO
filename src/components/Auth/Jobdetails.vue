<template>
<form>
<div class="row q-mb-md">
 <q-input 
 outlined
  v-model="formData.text"
  class="col"
   label="Your Name*" />
    </div>
   <div class="q-pa-md" style="max-width: 300px">
    
         <q-select outlined v-model="model" :options="options" label="Outlined" />

   
    </div>
    </form>
</template>
<script>
export default {
data () {
    return {
        formData: {
      text: ''
        }
    }
  },
  data () {
    return {
      model: null,
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ]
    }
  }
}
  
  
 
 
 
 
</script>
