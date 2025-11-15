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
  // Lock/unlock body scroll when menu opens/closes
  if (isMenuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

// Close menu when route changes
watch(
  () => route.path,
  () => {
    isMenuOpen.value = false;
    document.body.style.overflow = "";
  }
);

// Clean up on unmount
onUnmounted(() => {
  document.body.style.overflow = "";
});
</script>

<template>
  <header class="header_menu">
    <div class="main_header" :class="{ 'menu-open': isMenuOpen }">
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
                  @click="toggleMenu"
                >
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
            <div class="outer_div d-none d-sm-block">
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

.header_menu {
  @media (max-width: 991px) {
    margin-bottom: 100px;
  }
}

.main_header {
  transition: all 0.3s ease;

  // Sticky header on mobile
  @media (max-width: 991px) {
    background: white;
    position: fixed;
    top: 0;
    z-index: 999;

    &.menu-open {
      position: fixed;
      width: 100%;
    }
  }
}

.navbar {
  @media (max-width: 991px) {
    position: relative;
    padding: 15px 0 !important;
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.navbar-brand {
  z-index: 1002;

  @media (max-width: 991px) {
    position: relative;
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
  z-index: 1002;
  position: fixed;
  right: 40px;
  transform: translateY(-50%);
  top: 35px;

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
    position: fixed;
    right: 40px;
    top: 35px;
    transform: translateY(-50%);

    span {
      background-color: #333;
    }

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
  .navbar-menu,
  .navbar-collapse {
    display: flex !important;
    align-items: center;
    flex: 1;
  }

  .hamburger-menu {
    display: none !important;
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
      right: 0;
      width: 100%;
      height: auto; // Height otomatis sesuai konten
      max-height: calc(100vh - 70px); // Max height agar tidak melebihi viewport
      background: white;
      transition: all 0.3s ease;
      z-index: 1000;
      overflow-y: auto; // Scroll jika konten terlalu panjang
      padding: 20px;
      display: block !important;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
      @include fade-in();
    }

    &.collapse {
      display: none;
    }
  }

  .navbar-nav {
    flex-direction: column;
    padding: 0;

    .nav-item {
      margin: 0.5rem 0;

      .nav-link {
        padding: 12px 15px;
        border-radius: 8px;
        transition: all 0.3s ease;
        display: block;
      }
    }
  }

  .outer_div {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #e0e0e0;
    text-align: center;
  }
}

// Overlay backdrop
.navbar-menu.show::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  @include fade-in(0.3s);
}
</style>
