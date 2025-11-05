<script lang="ts" setup>
import { computed } from "vue";

const route = useRoute();

const menuItems = computed(() => [
  {
    name: "Home",
    path: "/",
    isActive: route.path === "/",
  },
  {
    name: "About us",
    path: "/about",
    isActive: route.path === "/about",
  },
  {
    name: "Services",
    path: "/services",
    isActive: route.path === "/services",
  },
  {
    name: "Packages",
    path: "/packages",
    isActive: route.path === "/packages",
  },
  {
    name: "Gallery",
    path: "/gallery",
    isActive: route.path === "/gallery",
  },
  {
    name: "Contact Us",
    path: "/contact",
    isActive: route.path === "/contact",
    isButton: true,
  },
]);
</script>
<template>
  <header>
    <div class="main_header">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light p-0">
          <NuxtLink to="/" class="navbar-brand">
            <figure class="mb-0">
              <img
                src="assets/images/logo/sasa_logo_preview.png"
                alt=""
                class="img-fluid"
              />
            </figure>
          </NuxtLink>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li
                v-for="item in menuItems"
                :key="item.path"
                :class="['nav-item', { active: item.isActive }]"
              >
                <NuxtLink
                  :to="item.path"
                  :class="[
                    'nav-link',
                    {
                      'default-btn contact_us': item.isButton,
                      active: item.isActive,
                    },
                  ]"
                >
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
            <div class="outer_div">
              <figure class="mb-0">
                <img
                  src="assets/template/images/navbar_call_image.png"
                  alt=""
                  class="img-fluid hover-effect"
                />
              </figure>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
