<template>
  <div>
    <Panel msg="Aprendizaje" :qs="lista"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Panel from '@/components/Panel.vue'
import data from '@/assets/comprados.json'

export default {
  name: 'PanelView',
  data(){
    return { 
      lista: data
      
    }
  },
  components: {Panel  }
}
</script>
