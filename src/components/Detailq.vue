<template>
    <h3>Respuetas de {{ Detalle.nombre }}</h3>
    <div >
        <ul class="list-group">
            <li v-for="c in Detalle.cuestionario" class="list-group-item"
            :class="{'list-group-item-success':c.options.iscorrect==true,'list-group-item-danger':c.options.iscorrect==false}">
            <p>Pregunta: {{ c.text }} </p>
            <p>Respuesta: {{c.options.text}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import { computed, onMounted  } from 'vue';
import { useRoute } from 'vue-router'
import {useStore} from 'vuex';

export default {
    name:'Detailq',
    setup(){
        const store =useStore();
        
        const route = useRoute()

        const Detalle = computed(()=>{
            return store.state.respuestas})
        onMounted(()=>{
            store.dispatch('getRespuestas',route.params.qdId); 
        })
        return {Detalle}
    }
}
</script>