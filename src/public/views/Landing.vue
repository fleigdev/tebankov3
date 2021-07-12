<script>
/**
 * Index-personal componentz
 */
import ContactCard from '../components/ContactCard.vue';
import CalculateCard from '../components/CalculateCard.vue';

export default {
  name: 'Landing',
  components: { ContactCard, CalculateCard },
};
</script>

<template>
  <div>
    <!-- Hero Start -->
    <section
      class="bg-home rtl-personal-hero bg-light d-flex align-items-center backgroundhero heromobile"
      id="home"
    >
      <div class="container">
        <div class="row aligntoleft mobilepadding">
          <div class="col-lg-6">
            <div class="title-heading mt-4">
              <h1 class="display-3  mb-4 mt-4 figma-title">
                ¡No te estanques <br />
                por unos pesos! <br />
              </h1>
              <h5>
                Te damos un empujoncito económico, rápido y sin complicaciones.
              </h5>
              <p class="para-desc font-weight-bold ">
                #YoTeBanko
              </p>
              <p class="para-desc hashtag">
                Solicita tu préstamo personal de manera rápida y segura, desde
                la comodidad de tu hogar.
              </p>
              <div class="mt-4 pt-2">
                <router-link to="/solicitud">
                  <img
                    src="../../assets/img/btnblue.png"
                    class="greenbtn mt-4 zoom"
                    alt=""
                  />
                </router-link>
                <br />
              </div>
            </div>
          </div>
          <!--end col-->
        </div>

        <!--end row-->
      </div>

      <!--end container-->
    </section>

    <!--end section-->
    <!-- Hero End -->

    <!--end row-->
    <CalculateCard />
    <!--end container-->

    <!--end section-->

    <!--end section-->
    <!-- Thinking End -->

    <!--end section-->
    <!-- Counter End -->
    <!-- Feature Start -->
    <section class="section pt-200 bg-light ">
      <div class="container mobilepaddingfirstsection fw-700">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h2 class=" mb-4 titlesection titles">
                ¿Por qué elegir TeBanko?
              </h2>
              <p class="text-muted subtitles mb-0 mobiletext ">
                Es una entidad que ofrece préstamos 100% online, sin papeleo, ni
                complicaciones
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <div class="col-md-4 col-12 text-center mt-4">
            <div
              class="card veryrounded shadow blue-border white-bg heightfull"
            >
              <div class="card-body py-5">
                <img
                  src="../../assets/img/iconos/logofuncion1.png"
                  class="avatar icon-300"
                  alt=""
                />
                <div class="mt-4">
                  <h5 class="card-title">
                    <h4 class="title-2">100% Online</h4>
                  </h5>
                  <p class="text-muted mt-3 mb-0">
                    Solicita tu crédito de manera remota, cuando quieras, de
                    donde quieras
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-12 text-center mt-4">
            <div
              class="card veryrounded shadow blue-border  white-bg heightfull "
            >
              <div class="card-body py-5">
                <img
                  src="../../assets/img/iconos/logofuncion2.png"
                  class="avatar icon-300"
                  alt=""
                />
                <div class="mt-4">
                  <h5 class="card-title">
                    <h4 class="title-2">Desembolso rápido</h4>
                  </h5>
                  <p class="text-muted mt-3 mb-0">
                    Cuando su solicitud este aprobada, sus fondos serán enviados
                    en menos de 24 horas
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-12 text-center mt-4">
            <div
              class="card veryrounded shadow blue-border  white-bg heightfull"
            >
              <div class="card-body py-5">
                <img
                  src="../../assets/img/iconos/logofuncion3cut.png"
                  class="avatar icon-300"
                  alt=""
                />
                <div class="mt-4">
                  <h5 class="card-title">
                    <h4 class="title-2">Pagos flexibles</h4>
                  </h5>
                  <p class="text-muted mt-3 mb-0">
                    Planes de pagos mensuales, cómodos y accesibles
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!--end col-->

          <!-- <div class="col-md-4 col-12 mt-5 text-center">
            <div class=" ">
              <div class="image position-relative d-inline-block">
                <img
                  src="../../assets/img/iconos/wallettrans.png"
                  class="avatar "
                  alt=""
                />
              </div>

              <div class="content mt-4">
                <h4 class="title-2">Pagos flexibles</h4>
                <p class="text-muted mb-0">
                  Planes de pagos mensuales, cómodos y accesibles
                </p>
              </div>
            </div>
          </div> -->
          <!--end col-->

          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- End feature -->

    <section class="section pt-1">
      <!--end container-->

      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row  ">
          <div class="col-lg-5 col-md-6 order-1 order-md-2">
            <img
              src="../../assets/img/iconos/puzzle.png"
              class=" img350"
              alt=""
            />
          </div>
          <!--end col-->

          <div
            class="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0 "
          >
            <div class="section-title ml-lg-4">
              <h3 class="title mb-4 requisitos">
                Requisitos básicos para solicitar tu préstamo
              </h3>

              <div class="">
                <ul class="font-weight-bold pl-0">
                  <li class="mb-0 list-unstyled">
                    <span class="text-primary h5 mr-2"
                      ><img
                        class="smallarrow"
                        src="../../assets/img/iconos/greencheck.png"/></span
                    >Tener ingresos regulares
                  </li>
                  <li class="mb-0 list-unstyled">
                    <span class="text-primary h5 mr-2"
                      ><img
                        class="smallarrow"
                        src="../../assets/img/iconos/greencheck.png"/></span
                    >Respaldo de ingresos (AFP)
                  </li>
                  <li class="mb-0 list-unstyled">
                    <span class="text-primary h5 mr-2"
                      ><img
                        class="smallarrow"
                        src="../../assets/img/iconos/greencheck.png"/></span
                    >Cuenta bancaria
                  </li>
                  <li class="mb-0 list-unstyled">
                    <span class="text-primary h5 mr-2"
                      ><img
                        class="smallarrow"
                        src="../../assets/img/iconos/greencheck.png"/></span
                    >Ser mayor de edad
                  </li>
                </ul>
                <router-link to="/solicitud">
                  <img
                    src="../../assets/img/btnblue.png"
                    class="greenbtn mt-4 zoom"
                    alt=""
                  />
                </router-link>
                <!-- <img
                        class="smallarrow"
                        src="../../assets/img/iconos/badge-check.svg"/> -->
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <!--end container-->
    </section>

    <section class="section   bg-light">
      <!-- Features Start -->
      <div class="container mt-40 mt-30">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h2 class="title mb-4 titlesection titles">
                ¿Cómo Funciona TeBanko?
              </h2>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <div class="col-md-4 col-12 text-center mt-4">
            <div class="veryrounded shadow  white-bg heightfull">
              <div class="card-body py-5 pr-0 pl-0">
                <img
                  src="../../assets/img/iconos/grupologo1.png"
                  class="avatar icon-300"
                  alt=""
                />
                <div class="pt-4">
                  <h5 class="card-title">
                    <h4 class="title-2">Completa tu formulario</h4>
                  </h5>
                  <p class="text-muted mt-3 mb-0">
                    Haz tu solicitud en tan sólo 8 minutos y 100% Online.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-12 text-center mt-4">
            <div class="veryrounded shadow  white-bg heightfull">
              <div class="card-body py-5 pr-0 pl-0">
                <img
                  src="../../assets/img/iconos/grupologo2.png"
                  class="avatar icon-300"
                  alt=""
                />
                <div class="pt-4">
                  <h5 class="card-title">
                    <h4 class="title-2">Sin papeleo</h4>
                  </h5>
                  <p class="text-muted mt-3 mb-0">
                    Verifica tu documentación en el proceso de registro para
                    obtener tu préstamo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-4 col-12 text-center mt-4">
            <div class="veryrounded shadow  white-bg heightfull">
              <div class="card-body py-5 pr-0 pl-0">
                <img
                  src="../../assets/img/iconos/grupologo3.png"
                  class="avatar icon-300"
                  alt=""
                />
                <div class="pt-4">
                  <h5 class="card-title">
                    <h4 class="title-2">Recibe dinero en tu cuenta</h4>
                  </h5>
                  <p class="text-muted mt-3 mb-0">
                    Si tu solicitud de préstamo es aprobada transferiremos el
                    dinero directamente a tu cuenta.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
      <!-- Features End -->
      <!-- Transection End -->
    </section>
    <section class="section">
      <ContactCard />
    </section>

    <section>
      <!-- Features Start -->
      <div class="container mt-100 mt-1">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="mb-4 pb-4 mb-6">
              <img
                src="../../assets/img/iconos/mottook.png"
                class="avatar fit"
                alt=""
              />
            </div>
          </div>
          <!--end col-->
        </div>
      </div>
    </section>

    <!-- Shape Start -->
    <div class="position-relative">
      <div class="shape overflow-hidden text-footer">
        <svg
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>

    <!--end section-->

    <!-- Back to top -->
  </div>
</template>

<style scoped>
.badge {
  height: 25px;
}

.smallarrow {
  height: 25px;
}

.img350 {
  height: 375px;
  width: 100%;
}

.cardheight {
  height: 350px;
}

.footerlogo {
  filter: brightness(0) invert(1);
}

.subtitles {
  font-size: 20px;
}

.centerimg {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.ultimo {
  font-size: 3.5rem;
  padding-bottom: 40px;
}

.lesspaddingsection {
  padding: 20px 0;
}

.titlesection {
  letter-spacing: 0.5px;
  font-size: 35px !important;
}

.linea {
  text-decoration: underline;
}

.particles canvas {
  position: absolute;
  top: 0;
  left: 0;
}

.hashtag {
  font-size: 18px;
  color: #161c2d;
}

.VueCarousel-dot-container {
  margin-top: 10px;
}

.VueCarousel-dot {
  width: 10px !important;
  height: 10px !important;
  margin: 5px 7px !important;
  border-radius: 3px !important;
  transition: all 0.5s ease;
  background: rgba(47, 85, 212, 0.5) !important;
  padding: 0 !important;
}

.VueCarousel-dot:focus {
  outline: none !important;
}

.VueCarousel-dot--active {
  background-color: #2f55d4 !important;
  transform: rotate(45deg);
}

.aligntoleft {
  text-align: left;
}

.aligntoright {
  text-align: right;
}

.figma-title {
  font-weight: 900 !important;
  font-size: 60px !important;
  color: #1c57df;
}

.fit {
  max-width: 99%;
  max-height: 99%;
}

.pt-200 {
  padding-top: 200px;
}

.titles {
  font-size: 50px !important;
  font-weight: 900;
  color: #666666;
}

.requisitos {
  font-size: 50px !important;
  font-weight: 600;
}

.fw-700 h4 {
  font-weight: 700;
}

.white-bg {
  background-color: white;
}

.icon-300 {
  height: 320px;
  width: 100%;
}

.heightfull {
  height: 100%;
}

.blue-border {
  border-color: #2f55d4;
}

.greenbtn {
  width: 250px;
  height: auto;
}

.veryrounded {
  border-radius: 40px;
}

.zoom {
  transition: transform 0.5s; /* Animation */
}

.zoom:hover {
  transform: scale(
    1.2
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>
