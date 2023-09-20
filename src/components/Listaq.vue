<template>
    <h3>Lista {{ Lista.nombre }}</h3>
    <div>
        <table class="table table-striped table-bordered table-hover">
            <head>
                <th>email</th>
                <th>Nombre</th>
                <th>fecha</th>
                <th></th>
            </head>
            <tbody>
                <tr v-for="item in Lista.usuarios" :key="item.id" :class="{'table-secondary':item.status=='unknown','table-danger':item.status=='Dead'}">
                    <td>{{item.status}}</td>
                    <td>{{item.nombre}}</td>
                    <td>{{item.fecha}}</td>
                    <td>
                        <router-link :to="{ name: 'Detailq', params: { qdId: item.id }}"><img src="@/assets/eye.svg" alt="open" height="20" title="open"></router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { computed, onMounted } from 'vue';
import {useStore} from 'vuex';
import { useRouter, useRoute } from 'vue-router'

export default {
    name:'Listaq',
    setup(){
        const store =useStore();
        const route = useRoute();
        const Lista = computed(()=>{
            return store.state.usuarios;
        })
        onMounted(()=>store.dispatch('getLista',route.params.qId))
        return {Lista}
    }
}
</script>