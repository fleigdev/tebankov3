<script>
/**
 * Navbar component
 */
export default {
  name: 'Navbar',
  data() {
    return {
      isCondensed: false,
    };
  },
  props: {
    isWhiteNavbar: {
      type: Boolean,
    },
    navLight: {
      type: Boolean,
    },
  },

  mounted: () => {
    window.onscroll = function() {
      onwindowScroll();
    };

    function onwindowScroll() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById('topnav').classList.add('nav-sticky');
      } else {
        document.getElementById('topnav').classList.remove('nav-sticky');
      }
    }

    var links = document.getElementsByClassName('side-nav-link-ref');
    var matchingMenuItem = null;
    for (var i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i].pathname) {
        matchingMenuItem = links[i];
        break;
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add('active');
      var parent = matchingMenuItem.parentElement;

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add('active');
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.add('active');
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add('active');
            const parent4 = parent3.parentElement;
            if (parent4) {
              const parent5 = parent4.parentElement;
              parent5.classList.add('active');
            }
          }
        }
      }
    }
  },
  methods: {
    /**
     * Toggle menu
     */
    closeMenu() {
      document.getElementById('navigation').style.display = 'none';
    },

    toggleMenu() {
      this.isCondensed = !this.isCondensed;
      if (this.isCondensed) {
        document.getElementById('navigation').style.display = 'block';
      } else document.getElementById('navigation').style.display = 'none';
    },

    /**
     * Menu clicked show the submenu
     */
    onMenuClick(event) {
      event.preventDefault();
      const nextEl = event.target.nextSibling.nextSibling;
      console.log(event.target.nextSibling.nextSibling);
      console.log(event.target.lastChild);
      console.log(event.target.childNodes);

      if (nextEl && !nextEl.classList.contains('open')) {
        const parentEl = event.target.parentNode;
        if (parentEl) {
          parentEl.classList.remove('open');
        }
        nextEl.classList.add('open');
      } else if (nextEl) {
        nextEl.classList.remove('open');
      }
      return false;
    },
  },
};
</script>

<template>
  <div>
    <!-- Navbar STart -->
    <header
      id="topnav"
      class="defaultscroll sticky fit"
      :class="{ 'bg-white': isWhiteNavbar === true }"
    >
      <div class="container">
        <!-- Logo container-->
        <div>
          <!-- <router-link class="logo" to="/">
            <img
              src="../assets/img/logo-tebanko.png"
              height="45"
              alt=""
              class="l-light"
            />
            <img
              src="../assets/img/logo-tebanko.png"
              height="45"
              alt=""
              class="l-light"
            />
          </router-link> -->

          <div class="logo" href="/" v-if="navLight !== true">
            <router-link to="/">
              <img src="../../assets/img/logo-tebanko.png" height="45" alt="" />
            </router-link>
          </div>
        </div>

        <!--end login button-->
        <!-- End Logo container-->
        <div class="menu-extras">
          <div class="menu-item">
            <!-- Mobile menu toggle-->
            <a
              class="navbar-toggle"
              @click="toggleMenu()"
              :class="{ open: isCondensed === true }"
            >
              <div class="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
            <!-- End mobile menu toggle-->
          </div>
        </div>

        <nav>
          <div id="navigation">
            <!-- Navigation Menu-->
            <ul class="navigation-menu navright">
              <li>
                <router-link to="/">Inicio</router-link>
              </li>
              <li>
                <router-link to="/solicitud">Solicitud de Préstamo</router-link>
              </li>
            </ul>
            <!--end navigation menu-->

            <!--end login button-->
          </div>
          <!--end navigation-->
        </nav>
      </div>
      <!--end container-->
    </header>
    <!--end header-->
    <!-- Navbar End -->
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #0056b3;
}

a {
  color: #343a40;
}

#topnav.scroll .navigation-menu > li > a {
  color: white;
}

.navright {
  float: right;
}
</style>
