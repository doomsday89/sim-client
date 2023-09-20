<template>
    <h1>{{ curso.nombre }}</h1>
    <h4>{{ curso.descripcion }}</h4>
    <div class="card">        
        <question :cursoid="curso.id" />
    </div>
</template>
<script setup>
    import { useRoute } from 'vue-router';
    import question from '@/components/question.vue';
    import comprados from "@/assets/comprados.json";
    
    const route = useRoute();
    const qId=route.params.qId;
    const curso = comprados.find(q=> q.id==qId)
</script>