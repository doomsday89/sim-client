<template>
    <h1>{{msg}}</h1>
    <div class="row">
      <div class="col-md-4" v-for="item in qs" :key="item.id">
        <div class="card">
          <div class="card-header bg-primary text-white">{{item.nombre}}  </div>
          <img :src="item.img" class="card-img-top" alt="image" height="200">
          
          <div class="card-footer">
            <router-link :to="{ name: 'questions', params: { qId: item.id }}" v-if="item.comprado">
              <img src="@/assets/glasses.svg" alt="open" height="20" title="open">
            </router-link>
            <router-link to="/buy" v-else>
              <img src="@/assets/buy-car.svg" alt="comprar" height="20">
            </router-link>
            <span class="text-muted float-end">{{item.descripcion}}</span>
            
          </div>
        </div> 
      </div>
    </div>
</template>

<script>
export default {
  name: 'Panel',
  props: {msg:String,qs:Array},
  }

</script>

