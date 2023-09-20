<template>
    <div class="card-header">
            <p class="fs-5 fw-semibold">{{oQuestion.id}}) {{oQuestion.text }}</p>
    </div>
    <div class="card-body">  
            <div v-for="opt in aOptions" :key="opt.id">
                <input type="radio" :value="opt.text" v-model="myanswer" />
                <label>{{opt.label}}={{ opt.text }} </label>
            </div>
    </div>
    <div class="card-footer">
        <button class="btn btn-sm btn-primary floar-right" @click="Siguiente()">next</button>
    </div>
</template>
<script setup>
    import { ref, reactive } from 'vue';
    import comprados from "@/assets/comprados.json"
    
    const props= defineProps(['cursoid']);
    
    const num=ref(0);
    const curso = comprados.find(c=> c.id==props.cursoid)
    const oQuestion = ref(curso.questions[0]);    
    const aOptions = ref(oQuestion.value.options);
    const myanswer=ref(0);
    oQuestion.myanswer = myanswer.value;
    
    const Siguiente=()=>{
        if(num.value<curso.questions.length-1){
            num.value++;
            oQuestion.value=curso.questions[num.value];
            aOptions.value = oQuestion.value.options;
            oQuestion.myanswer = myanswer.value;
        }
    }
</script>