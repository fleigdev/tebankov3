<script>
/**
 * Index-personal component
 */

import ContactCard from '../components/ContactCard.vue';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/antd.css';

export default {
  name: 'Landing',
  data() {
    return {
      value: 1500,
      totalValue: 20,
    };
  },
  components: { ContactCard, VueSlider },
};
</script>

<template>
  <div>
    <!-- Hero Start -->
    <section
      class="bg-home rtl-personal-hero bg-light d-flex align-items-center backgroundhero"
      id="home"
    >
      <div class="container">
        <div class="row aligntoleft">
          <div class="col-lg-6">
            <div class="title-heading mt-4">
              <h1 class="display-3 font-weight-bold mb-3">
                Estamos contigo para ayudarte a alcanzar tus sueños.
              </h1>
              <p class="para-desc text-muted font-weight-bold">
                #YoTeBanko
              </p>
              <p class="para-desc text-muted">
                Solicita tu préstamo personal de manera rápida y segura, desde
                la comodidad de tu hogar.
              </p>
              <div class="mt-4 pt-2">
                <a class="btn btn-primary mt-2 mr-2 mouse-down"
                  ><i class="mdi mdi-camera"></i> Solicítalo Aquí!</a
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

    <!--end section-->

    <!-- Testi Start -->
    <section class="section thinkingsection">
      <div class="row justify-content-center ">
        <div class="col-md-4 col-12 mt-4 "></div>

        <div class="col-md-4 col-12 mt-4 " style="top: -250px;">
          <div
            class="card pricing-rates business-rate shadow bg-light rounded text-center border-0"
          >
            <div class="card-body py-5">
              <h2 class="title text-uppercase mb-4">
                ¿Cuánto dinero necesitas?
              </h2>
              <div class="d-flex justify-content-center mb-4">
                <span class="h4 mb-0 mt-2">$</span>
                <span class="price h1 mb-0">{{ value }}</span>
              </div>
              <vue-slider v-model="value" min="1500" max="2000" />

              <ul class="list-unstyled mb-0 pl-0">
                <li class="h5 text-muted mb-0">
                  <span class="text-primary h5 mr-2"></span>Cuota mensual por 6
                  meses
                </li>
                <li class="h6 text-muted mb-0">
                  <span class="text-primary h5 mr-2"></span>
                  $ {{ (value / 6 + value * 0.03).toFixed(2) }}
                </li>
              </ul>
              <a href="javascript:void(0)" class="btn btn-primary mt-4"
                >¡Solicítalo Aquí!</a
              >
              <div class="h6 text-muted pt-4 ">
                <span class="text-primary h6 mr-2"></span>
                <div class="linea">
                  <a href="javascript:void(0)">Ver términos y condiciones</a>
                </div>
                <div class="smalltext">
                  *Ejemplo de cuota calculada para una línea de crédito de 5.000
                  $ a pagar en 36 meses y con una retirada del importe
                  seleccionado. ¡OJO! Te haremos una oferta personalizada, por
                  lo que tu importe máximo, TAE, plazo de amortización, y cuota
                  pueden ser distintos al del ejemplo.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--end row-->

      <!--end container-->
    </section>
    <!--end section-->
    <!-- Thinking End -->

    <!--end section-->
    <!-- Counter End -->
    <!-- Feature Start -->
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h2 class="title mb-4 titlesection ">¿Por qué elegir TeBanko?</h2>
              <p class="text-muted para-desc mx-auto mb-0">
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
            <div class="features mt-5">
              <div class="image position-relative d-inline-block">
                <img
                  src="../../assets/img/iconos/laptop.svg"
                  class="avatar avatar-small"
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
            <div class="features">
              <div class="image position-relative d-inline-block">
                <img
                  src="../../assets/img/iconos/money.svg"
                  class="avatar avatar-small"
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
            <div class="features">
              <div class="image position-relative d-inline-block">
                <img
                  src="../../assets/img/iconos/money-bag.svg"
                  class="avatar avatar-small"
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
              src="../../assets/img/compu1.jpg"
              class="img-fluid rounded shadow-md img350 centerimg"
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

              <ul class="list-unstyled text-muted">
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uim uim-check-circle"></i></span
                  >Tener ingresos regulares
                </li>
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uim uim-check-circle"></i></span
                  >Respaldo de ingresos (AFP)
                </li>
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uim uim-check-circle"></i></span
                  >Cuenta bancaria
                </li>
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uim uim-check-circle"></i></span
                  >Ser mayor de edad
                </li>
              </ul>
              <a class="btn btn-primary mt-2 mr-2 mouse-down"
                ><i class="mdi mdi-camera"></i> Solicítalo Aquí!</a
              >
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
                <img
                  src="../../assets/img/iconos/identity.svg"
                  class="avatar avatar-md-sm"
                  alt=""
                />
                <div class="mt-4">
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
          <!--end col-->

          <div class="col-md-4 col-12 text-center">
            <div class="card bg-light rounded shadow border-0 cardheight">
              <div class="card-body py-5">
                <img
                  src="../../assets/img/iconos/paper.svg"
                  class="avatar avatar-md-sm"
                  alt=""
                />
                <div class="mt-4">
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

          <div class="col-md-4 col-12 text-center">
            <div class="card bg-light rounded shadow border-0 cardheight">
              <div class="card-body py-5">
                <img
                  src="../../assets/img/iconos/piggy-bank.svg"
                  class="avatar avatar-md-sm"
                  alt=""
                />
                <div class="mt-4">
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
            <div class="mb-4 pb-2">
              <h1 class="title mb-4 ultimo">
                Alcanza tus sueños <br />
                con TeBanko
              </h1>
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
