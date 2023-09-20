<template>
  <div>
    <Panel msg="Sugerencias para ti" :qs="lista"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Panel from '@/components/Panel.vue'
import data from '@/assets/cursos.json'

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
