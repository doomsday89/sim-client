<template>
  <main class="page-wrapper">
  <header class="header navbar navbar-expand-lg bg-light shadow-sm">
    <div class="container px-3">
          <a href="#" class="navbar-brand pe-3">
            <img src="@/assets/imgs/logo.svg" width="47" alt="image">
            Simulador
          </a>
          <div id="navbarNav" class="offcanvas offcanvas-end" :class="{show:showMenu}">
            <div class="offcanvas-header border-bottom">
              <h5 class="offcanvas-title">Menu</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" @click="showMenu=false"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">                                
                <li class="nav-item">
                  <router-link to="/stars" class="nav-link " activeClass="active">
                    <img src="@/assets/star-shine.svg" alt="" class="mx-auto d-block" height="25">
                    <span>Destacados</span>
                </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/" class="nav-link" activeClass="active">
                    <img src="@/assets/learning.svg" alt="" class="mx-auto d-block" height="25">
                    <span>Aprendizaje</span>
                  </router-link>
                </li>
                <li class="nav-item dropdown">
                  <router-link to="/profile" class="nav-link" activeClass="active">
                    <img src="@/assets/user-circle.svg" alt="" class="mx-auto d-block" height="25">
                    <span class="">Cuenta</span>
                </router-link>
                </li>
              </ul>
            </div>
                
          </div>
          
          <button @click="showMenu=true" type="button" class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"> </span>
          </button>          
    </div>
  </header>
  
  <div class="container position-relative pt-2">
    <router-view>
    </router-view>
  </div>
  </main>
</template>
<script setup>
import {ref} from 'vue'
const showMenu=ref(false);

</script>
