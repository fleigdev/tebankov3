<script>
/**
 * Index-personal component
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
              <h1 class="display-3  mb-3 figma-title">
                Estamos contigo <br />
                para ayudarte a <br />
                alcanzar tus <br />
                sueños.
              </h1>
              <p class="para-desc font-weight-bold ">
                #YoTeBanko
              </p>
              <p class="para-desc hashtag">
                Solicita tu préstamo personal de manera rápida y segura, desde
                la comodidad de tu hogar.
              </p>
              <div class="mt-4 pt-2">
                <a class="btn btn-primary mt-2 mr-2 mouse-down"
                  ><i class="mdi mdi-camera"></i> Solicítalo Aquí</a
                >
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
    <section class="section morepadding ">
      <div class="container mobilepaddingfirstsection ">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h2 class=" mb-4 titlesection ">¿Por qué elegir TeBanko?</h2>
              <p class="text-muted  mb-0 mobiletext ">
                Es una entidad que ofrece préstamos 100% online, sin papeleo, ni
                complicaciones
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <div class="col-md-4 col-12 text-center">
            <div class="mt-5">
              <div class="image position-relative d-inline-block">
                <img
                  src="../../assets/img/iconos/pcicontrans.png"
                  class="avatar "
                  alt=""
                />
              </div>

              <div class="content mt-4 ">
                <h4 class="title-2">100% Online</h4>
                <p class="text-muted mb-0">
                  Solicita tu crédito de manera remota, cuando quieras, de donde
                  quieras
                </p>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-4 col-12 mt-5 text-center">
            <div class=" ">
              <div class="image position-relative d-inline-block">
                <img
                  src="../../assets/img/iconos/atmtrans.png"
                  class="avatar "
                  alt=""
                />
              </div>

              <div class="content mt-4">
                <h4 class="title-2">Desembolso rápido</h4>
                <p class="text-muted mb-0">
                  Cuando su solicitud este aprobada, sus fondos serán enviados
                  en menos de 24 horas
                </p>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-4 col-12 mt-5 text-center">
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
          </div>
          <!--end col-->

          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- End feature -->

    <section class="section bg-light pt-1">
      <!--end container-->

      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row  ">
          <div class="col-lg-5 col-md-6 order-1 order-md-2">
            <img
              src="../../assets/img/tbkcoin.png"
              class="img350 centerimg"
              alt=""
            />
          </div>
          <!--end col-->

          <div
            class="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0 "
          >
            <div class="section-title ml-lg-4">
              <h3 class="title mb-4">
                Requisitos básicos para solicitar tu préstamo
              </h3>

              <div class="smallpadleft">
                <ul class="list-unstyled text-muted">
                  <li class="mb-0">
                    <span class="text-primary h5 mr-2"
                      ><img
                        class="smallarrow"
                        src="../../assets/img/iconos/badge-check.svg"/></span
                    >Tener ingresos regulares
                  </li>
                  <li class="mb-0">
                    <span class="text-primary h5 mr-2"
                      ><img
                        class="smallarrow"
                        src="../../assets/img/iconos/badge-check.svg"/></span
                    >Respaldo de ingresos (AFP)
                  </li>
                  <li class="mb-0">
                    <span class="text-primary h5 mr-2"
                      ><img
                        class="smallarrow"
                        src="../../assets/img/iconos/badge-check.svg"/></span
                    >Cuenta bancaria
                  </li>
                  <li class="mb-0">
                    <span class="text-primary h5 mr-2"
                      ><img
                        class="smallarrow"
                        src="../../assets/img/iconos/badge-check.svg"/></span
                    >Ser mayor de edad
                  </li>
                </ul>
                <a class="btn btn-primary mt-2 mr-2 mouse-down"
                  ><i class="mdi mdi-camera"></i> Solicítalo Aquí!</a
                >
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

    <section class="section lesspaddingsection">
      <!-- Features Start -->
      <div class="container mt-100 mt-30">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h2 class="title mb-4 titlesection ">¿Cómo Funciona TeBanko?</h2>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <div class="col-md-4 col-12 text-center">
            <div class="card bg-light rounded shadow border-0 cardheight">
              <div class="card-body py-5">
                <div class="mt-4">
                  <h5 class="card-title">
                    <h4 class="title-2">Completa tu formulario</h4>
                  </h5>
                  <p class="text-muted mt-3 mb-0">
                    Haz tu solicitud en tan sólo 8 minutos y 100% Online.
                  </p>
                </div>
                <img
                  src="../../assets/img/iconos/halfshape1.png"
                  class="avatar fit"
                  alt=""
                />
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-4 col-12 text-center">
            <div class="card bg-light rounded shadow border-0 cardheight">
              <div class="card-body py-5">
                <div class="mt-4">
                  <h5 class="card-title">
                    <h4 class="title-2">Sin papeleo</h4>
                  </h5>
                  <p class="text-muted mt-3 mb-0">
                    Verifica tu documentación en el proceso de registro para
                    obtener tu préstamo.
                  </p>
                </div>
                <img
                  src="../../assets/img/iconos/halfshape2.png"
                  class="avatar fit"
                  alt=""
                />
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-4 col-12 text-center">
            <div class="card bg-light rounded shadow border-0 cardheight">
              <div class="card-body py-5">
                <div class="mt-4">
                  <h5 class="card-title">
                    <h4 class="title-2">Recibe dinero en tu cuenta</h4>
                  </h5>
                  <p class="text-muted mt-3 mb-0">
                    Si tu solicitud de préstamo es aprobada transferiremos el
                    dinero directamente a tu cuenta.
                  </p>
                </div>
                <img
                  src="../../assets/img/iconos/halfshape3.png"
                  class="avatar fit"
                  alt=""
                />
              </div>
            </div>
          </div>
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
                src="../../assets/img/iconos/motto.png"
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
}

.cardheight {
  height: 350px;
}

.footerlogo {
  filter: brightness(0) invert(1);
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
  font-weight: 700 !important;
  font-size: 47px !important;
}

.fit {
  max-width: 99%;
  max-height: 99%;
}

.morepadding {
  padding-top: 140px;
}
</style>
