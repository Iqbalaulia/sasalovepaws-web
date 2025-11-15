<script lang="ts" setup>
import { ref } from "vue";

const route = useRoute();
const isMenuOpen = ref(false);

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

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Close menu when route changes
watch(
  () => route.path,
  () => {
    isMenuOpen.value = false;
  }
);
</script>

<template>
  <header>
    <div class="main_header">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light p-0">
          <NuxtLink to="/" class="navbar-brand">
            <figure class="mb-0">
              <NuxtImg
                src="/assets/images/logo/sasa_logo_preview.png"
                alt="Logo"
                class="img-fluid"
              />
            </figure>
          </NuxtLink>
          <button
            class="hamburger-menu d-lg-none"
            :class="{ active: isMenuOpen }"
            @click="toggleMenu"
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            :class="[
              isMenuOpen ? 'show navbar-menu' : 'collapse navbar-collapse',
              { active: isMenuOpen },
            ]"
            id="navbarSupportedContent"
          >
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
                  @click="isMenuOpen = false"
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

<style scoped lang="scss">
@mixin fade-in($duration: 0.5s, $timing: ease-in) {
  animation: fadeIn $duration $timing;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.outer_div {
  position: relative;
  display: inline-block;

  img {
    filter: grayscale(50%) sepia(30%) hue-rotate(200deg);
  }
}

.hamburger-menu {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
  position: inherit;
  right: -60px !important;

  span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 3px 0;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  &.active {
    span:nth-child(1) {
      transform: rotate(45deg) translate(6px, 6px);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: rotate(-45deg) translate(6.5px, -7px);
    }
  }
}

// Desktop styles
@media (min-width: 992px) {
  .navbar-menu {
    display: flex !important;
    align-items: center;
    justify-content: space-between;
    flex: 1;
  }
}

// Mobile styles
@media (max-width: 991px) {
  .hamburger-menu {
    display: flex;
  }

  .navbar-menu {
    &.show {
      position: fixed;
      top: 70px;
      left: 0;
      width: 100%;
      height: calc(100vh - 70px);
      background: white;
      transition: all 0.3s ease;
      z-index: 1000;
      overflow-y: auto;
      padding: 20px;
      display: block !important;
      @include fade-in();
    }

    &.collapse {
      display: none;
    }
  }

  .navbar-nav {
    flex-direction: column;

    .nav-item {
      margin: 0.5rem 0;
    }
  }
}
</style>
