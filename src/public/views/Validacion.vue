<script>
import Datepicker from 'vue3-datepicker';

import { ref } from 'vue';

/**
 * Page-job-apply component
 */
export default {
  name: 'Solicitud',
  setup() {
    const picked = ref('');
    return {
      picked,
    };
  },
  data() {
    return {
      current_step: 1,
      max_step: 1,
    };
  },
  components: { Datepicker },
  methods: {
    advanceStep() {
      this.current_step++;
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    goToStep(value) {
      this.current_step = value;
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<template>
  <div>
    <!-- Hero Start -->
    <section class="bg-half bgform bg-light d-table w-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-center">
            <div class="page-next-level">
              <div class="row aligntoleft">
                <div class="col-lg-6">
                  <h2 class="font-weight-bold h2form">
                    Completa el formulario en minutos.
                  </h2>
                </div>
                <!--end col-->
              </div>
              <div class="page-next">
                <nav aria-label="breadcrumb" class="d-inline-block">
                  <ul class="breadcrumb bg-white rounded shadow mb-0">
                    <li class="breadcrumb-item  ">
                      <a
                        :class="{ active: current_step == 1 }"
                        @click.prevent="goToStep(1)"
                        href="#"
                        >Paso 1</a
                      >
                    </li>
                    <img
                      class="smallarrow"
                      src="../../assets/img/iconos/arrow-right.svg"
                    />
                    <li class="breadcrumb-item ">
                      <a
                        :class="{
                          active: current_step == 2,
                        }"
                        @click.prevent="goToStep(2)"
                        href="#"
                        >Paso 2</a
                      >
                    </li>
                    <img
                      class="smallarrow"
                      src="../../assets/img/iconos/arrow-right.svg"
                    />
                    <li class="breadcrumb-item ">
                      <a
                        :class="{
                          active: current_step == 3,
                        }"
                        @click.prevent="goToStep(3)"
                        href="#"
                        >Paso 3</a
                      >
                    </li>
                    <img
                      class="smallarrow"
                      src="../../assets/img/iconos/arrow-right.svg"
                    />
                    <li class="breadcrumb-item ">
                      <a
                        :class="{
                          active: current_step == 4,
                        }"
                        @click.prevent="goToStep(4)"
                        href="#"
                        >Paso 4</a
                      >
                    </li>
                  </ul>
                </nav>
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

    <!-- Shape Start -->
    <div class="position-relative">
      <div class="shape overflow-hidden text-white">
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
    <!--Shape End-->

    <!-- Job apply form Start -->
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-7">
            <div
              class="card custom-form border-0 bgcolor"
              v-show="current_step == 1"
            >
              <h2 class="text-center pt-5">Información Básica</h2>
              <p class="text-center ">
                Rellena la información básica para continuar al siguiente paso.
              </p>
              <div class="card-body">
                <form class="rounded shadow p-4">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group position-relative">
                        <label>Nombre Completo :</label>

                        <input
                          name="name"
                          id="name"
                          type="text"
                          class="form-control pl-5"
                          placeholder="First Name :"
                        />
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-md-6">
                      <div class="form-group position-relative">
                        <label>Apellidos:</label>
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          class="form-control pl-5"
                          placeholder="First Name :"
                        />
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-md-6">
                      <div class="position-relative">
                        <label>Fecha de Nacimiento:</label>

                        <datepicker
                          v-model="picked"
                          :locale="locale"
                          startingView="year"
                          class="form-date pl-5"
                        />
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-md-6">
                      <div class="form-group position-relative">
                        <label>Teléfono Celular :</label>
                        <phone-icon class="fea icon-sm icons"></phone-icon>
                        <input
                          name="number"
                          id="number"
                          type="number"
                          class="form-control pl-5 bgwhite"
                          placeholder="Your phone no. :"
                        />
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-md-6">
                      <div class="form-group position-relative">
                        <label>Correo Electrónico :</label>
                        <mail-icon class="fea icon-sm icons"></mail-icon>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          class="form-control pl-5"
                          placeholder="Your email :"
                        />
                      </div>
                    </div>
                    <!--end col-->
                    <!--end col-->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Ciudad :</label>
                        <select
                          class="form-control custom-select"
                          id="Sortbylist-Shop"
                        >
                          <option>Santa Cruz</option>
                          <option>Cochabamba</option>
                          <option>Tarija</option>
                          <option>Sucre</option>
                          <option>La Paz</option>
                        </select>
                      </div>
                    </div>
                    <!--end col-->

                    <!--end col-->
                    <!--end col-->
                    <!--end col-->

                    <!--end col-->
                    <div class="col-md-6">
                      <div class="form-group position-relative">
                        <label>¿ Usted aporta AFP ? :</label>

                        <ul class="list-unstyled mt-4 mb-0 pleft">
                          <div class="row text-center">
                            <div
                              class="custom-control custom-radio custom-control-inline te"
                            >
                              <div class="form-group mb-0">
                                <input
                                  type="radio"
                                  id="siAportaAfp"
                                  name="radioAportaAfp"
                                  class="custom-control-input"
                                />
                                <label
                                  class="custom-control-label"
                                  for="siAportaAfp"
                                  >Sí</label
                                >
                              </div>
                            </div>

                            <li>
                              <div
                                class="custom-control custom-radio custom-control-inline"
                              >
                                <div class="form-group mb-0">
                                  <input
                                    type="radio"
                                    id="noAportaAfp"
                                    name="radioAportaAfp"
                                    class="custom-control-input"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="noAportaAfp"
                                    >No</label
                                  >
                                </div>
                              </div>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </div>
                    <!--end col-->

                    <!--end col-->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Rango de ingresos menuales :</label>
                        <select
                          class="form-control custom-select"
                          id="Sortbylist-Shop"
                        >
                          <option>0$ - 500$</option>
                          <option>500$ - 1000$</option>
                          <option>1000$ - 2000$</option>
                          <option>2000$ en adelante</option>
                        </select>
                      </div>
                    </div>

                    <!--end col-->
                    <!--end col-->
                    <div class="col-md-12">
                      <div class="form-group position-relative">
                        <label
                          >¿ Cuál es el monto que desea solicitar en dólares
                          americanos ? :</label
                        >
                        <message-circle-icon
                          class="fea icon-sm icons"
                        ></message-circle-icon>
                        <input
                          type="text"
                          name="comments"
                          id="comments"
                          rows="4"
                          class="form-control pl-5"
                          placeholder="Monto en USD$ :"
                        />
                      </div>
                    </div>

                    <div class="col-md-12">
                      <div class="form-group">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="aceptoTerminos"
                          />
                          <label
                            class="custom-control-label"
                            for="aceptoTerminos"
                            >Acepto los términos descritos a continuación
                          </label>
                          <p class="terms">
                            Mediante la presente autorizo (amos) expresamente al
                            Banco de Desarrollo Productivo-Sociedad Anónima
                            Mixta (BDP - S.A.M) a consultar y obtener
                            información referente a los datos, antecedentes
                            comerciales y/o financieros de mi (nuestra)
                            persona(s) a través de la Central de Información
                            Crediticia (CIC) de la Autoridad de Supervisión del
                            Sistema Financiero (ASFI), Burós de Información,
                            Registro Único de Identificación Administrado por el
                            Servicio General de Identificación Personal (SEGIP),
                            el Sistema de Registro de Garantías No
                            Convencionales (SRGNC) y otros, según corresponda.
                            La citada consulta y obtención de información podra
                            ser efectuada por cualquier medio físoco,
                            documental, electrónico, magnético, informático u
                            otros que se encuentren disponibles.
                            <br />
                            Declaro tener conocimiento que para solicitar un
                            crédito con TEBANKO debo contar con los siguientes
                            respaldos:
                            <br />
                            CI Vigente emitido por el SEGIP - Fuente de ingreso
                            dependiente con al menos 6 meses de continuidad -
                            Extracto AFP - Respaldo activos declarados - Caja de
                            ahorro o cuenta bancaria - Tener teléfono celular y
                            correo electrónico.
                          </p>
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                  <div class="row">
                    <div class="col-sm-12 text-center">
                      <input
                        @click="advanceStep"
                        class="submitBnt btn btn-primary"
                        value="Continuar"
                      />
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </form>
                <!--end form-->
              </div>
            </div>
            <!--end custom-form-->
          </div>
          <div class="col-lg-10 col-md-7">
            <div
              class="card custom-form border-0 bgcolor"
              v-show="current_step == 2"
            >
              <h2 class="text-center pt-5">Datos del Carnet</h2>
              <p class="text-center ">
                Completa la información básica para seguir con los pasos.
              </p>
              <div class="card-body">
                <form class="rounded shadow p-4">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-md-8">
                          <div class="form-group position-relative">
                            <label>Nro. Carnet de Identidad :</label>
                            <i class="pi pi-check"></i>
                            <i class="pi pi-times"></i>
                            <input
                              name="name"
                              id="name"
                              type="text"
                              class="form-control pl-5"
                              placeholder="------- :"
                            />
                            <i class="pi pi-check"></i>
                            <i class="pi pi-times"></i>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Expedido en :</label>
                            <select
                              class="form-control custom-select"
                              id="Sortbylist-Shop"
                            >
                              <option>SC</option>
                              <option>CB</option>
                              <option>TJ</option>
                              <option>SU</option>
                              <option>LP</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Nacionalidad:</label>
                        <select
                          class="form-control custom-select"
                          id="Sortbylist-Shop"
                        >
                          <option>Boliviana</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group position-relative">
                        <label>Fecha de Vencimiento:</label>
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          class="form-control pl-5"
                          placeholder="--/--/--"
                        />
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                      </div>
                    </div>
                    <!--end col-->

                    <!--end col-->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Lugar de Nacimiento :</label>
                        <select
                          class="form-control custom-select"
                          id="Sortbylist-Shop"
                        >
                          <option>Santa Cruz</option>
                          <option>Cochabamba</option>
                          <option>Tarija</option>
                          <option>Sucre</option>
                          <option>La Paz</option>
                        </select>
                      </div>
                    </div>
                    <!--end col-->
                    <!--end col-->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Estado civil :</label>
                        <select
                          class="form-control custom-select"
                          id="Sortbylist-Shop"
                        >
                          <option>Soltero</option>
                          <option>Casado</option>
                          <option>Viudo</option>
                        </select>
                      </div>
                    </div>

                    <!--end col-->
                  </div>
                  <h2 class="text-center pt-5">Datos Personales</h2>
                  <p class="text-center ">
                    Completa la información básica para seguir con los pasos.
                  </p>

                  <!--end col-->
                  <div class="row">
                    <!--start col-->
                    <div class="col-md-12">
                      <div class="form-group position-relative">
                        <label>Dirección personal:</label>
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          class="form-control pl-5"
                          placeholder="--/--/--"
                        />
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                      </div>
                    </div>
                    <!--end col-->
                    <!--end col-->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>La vivienda donde usted vide es :</label>
                        <select
                          class="form-control custom-select"
                          id="Sortbylist-Shop"
                        >
                          <option>Propia</option>
                          <option>Alquilada</option>
                          <option>Hipotecada</option>
                          <option>Anticrético</option>
                        </select>
                      </div>
                    </div>
                    <!--end col-->
                    <!--end col-->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Nivel de educación :</label>
                        <select
                          class="form-control custom-select"
                          id="Sortbylist-Shop"
                        >
                          <option>Bachiller</option>
                          <option>Graduado</option>
                          <option>Masterado</option>
                        </select>
                      </div>
                    </div>
                    <!--end col-->
                    <!--start col-->
                    <div class="col-md-6">
                      <div class="form-group position-relative">
                        <label>Referencia familiar:</label>
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          class="form-control pl-5"
                          placeholder="--/--/--"
                        />
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                      </div>
                    </div>
                    <!--end col-->
                    <!--start col-->
                    <div class="col-md-6">
                      <div class="form-group position-relative">
                        <label>Teléfono celular:</label>
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          class="form-control pl-5"
                          placeholder="--/--/--"
                        />
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                      </div>
                    </div>
                    <!--end col-->
                    <!--start col-->
                    <div class="col-md-6">
                      <div class="form-group position-relative">
                        <label>Referencia laboral:</label>
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          class="form-control pl-5"
                          placeholder="--/--/--"
                        />
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                      </div>
                    </div>
                    <!--end col-->
                    <!--start col-->
                    <div class="col-md-6">
                      <div class="form-group position-relative">
                        <label>Teléfono celular:</label>
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          class="form-control pl-5"
                          placeholder="--/--/--"
                        />
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                      </div>
                    </div>
                    <!--end col-->
                  </div>

                  <!--end col-->

                  <h2 class="text-center pt-5">Información laboral</h2>
                  <p class="text-center ">
                    Completa la información básica para seguir con los pasos.
                  </p>

                  <!--end col-->
                  <div class="row">
                    <!--start col-->
                    <div class="col-md-6">
                      <div class="form-group position-relative">
                        <label>Nombre de la empresa:</label>
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          class="form-control pl-5"
                          placeholder="--/--/--"
                        />
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                      </div>
                    </div>
                    <!--end col-->
                    <!--start col-->
                    <div class="col-md-6">
                      <div class="form-group position-relative">
                        <label>Teléfono de la empresa:</label>
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          class="form-control pl-5"
                          placeholder="--/--/--"
                        />
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                      </div>
                    </div>
                    <!--end col-->
                    <!--end col-->
                    <div class="col-md-12">
                      <div class="form-group position-relative">
                        <label>Dirección personal:</label>
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          class="form-control pl-5"
                          placeholder="--/--/--"
                        />
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                      </div>
                    </div>
                    <!--end col-->
                    <!--end col-->

                    <!--end col-->

                    <!--start col-->
                    <div class="col-md-6">
                      <div class="form-group position-relative">
                        <label>Cargo en la empresa:</label>
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          class="form-control pl-5"
                          placeholder="--/--/--"
                        />
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                      </div>
                    </div>
                    <!--end col-->
                    <!--start col-->
                    <!--end col-->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Rubro de la empresa :</label>
                        <select
                          class="form-control custom-select"
                          id="Sortbylist-Shop"
                        >
                          <option>Telecomunicaciones</option>
                          <option>Construcción</option>
                          <option>Servicios</option>
                          <option>Comercio</option>
                          <option>Manufactura</option>
                          <option>Agropecuaria</option>
                        </select>
                      </div>
                    </div>
                    <!--end col-->
                    <!--end col-->
                    <!--start col-->
                    <div class="col-md-6">
                      <div class="form-group position-relative">
                        <label>Monto de ingresos líquidos:</label>
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          class="form-control pl-5"
                          placeholder="--/--/--"
                        />
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                      </div>
                    </div>
                    <!--end col-->
                    <!--end col-->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Antigüedad laboral (en meses):</label>
                        <select
                          class="form-control custom-select"
                          id="Sortbylist-Shop"
                        >
                          <option>0 - 6</option>
                          <option>7-12</option>
                          <option>Más de 12</option>
                        </select>
                      </div>
                    </div>
                    <!--end col-->
                  </div>

                  <!--end col-->
                  <!--end row-->
                  <div class="row">
                    <div class="col-sm-12 text-center">
                      <input
                        @click="advanceStep"
                        class="submitBnt btn btn-primary"
                        value="Continuar"
                      />
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </form>
                <!--end form-->
              </div>
            </div>
            <!--end custom-form-->
          </div>
          <div class="col-lg-10 col-md-7">
            <div
              class="card custom-form border-0 bgcolor"
              v-show="current_step == 3"
            >
              <h2 class="text-center pt-5">Activos</h2>
              <p class="text-center ">
                Completa la información básica para seguir con los pasos.
              </p>
              <div class="card-body">
                <form class="rounded shadow p-4">
                  <div class="row">
                    <!--end col-->
                    <!--start col-->

                    <!--end col-->
                    <!--end col-->
                    <div class="col-md-8">
                      <div class="form-group">
                        <label>Activo :</label>
                        <select
                          class="form-control custom-select"
                          id="Sortbylist-Shop"
                        >
                          <option>Auto</option>
                          <option>Casa</option>
                          <option>Equipos</option>
                        </select>
                      </div>
                    </div>
                    <!--end col-->
                    <!--start col-->
                    <div class="col-md-4">
                      <div class="form-group position-relative">
                        <label>USD:</label>
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          class="form-control pl-5"
                          placeholder="5.000,00"
                        />
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                      </div>
                    </div>
                    <!--end col-->
                    <!--end col-->
                    <div class="col-md-8">
                      <div class="form-group">
                        <label>Activo :</label>
                        <select
                          class="form-control custom-select"
                          id="Sortbylist-Shop"
                        >
                          <option>Auto</option>
                          <option>Casa</option>
                          <option>Equipos</option>
                        </select>
                      </div>
                    </div>
                    <!--end col-->
                    <!--start col-->
                    <div class="col-md-4">
                      <div class="form-group position-relative">
                        <label>USD:</label>
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          class="form-control pl-5"
                          placeholder="5.000,00"
                        />
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                      </div>
                    </div>
                    <!--end col-->
                    <!--end col-->
                    <div class="col-md-8">
                      <div class="form-group">
                        <label>Activo :</label>
                        <select
                          class="form-control custom-select"
                          id="Sortbylist-Shop"
                        >
                          <option>Auto</option>
                          <option>Casa</option>
                          <option>Equipos</option>
                        </select>
                      </div>
                    </div>
                    <!--end col-->
                    <!--start col-->
                    <div class="col-md-4">
                      <div class="form-group position-relative">
                        <label>USD:</label>
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          class="form-control pl-5"
                          placeholder="5.000,00"
                        />
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                      </div>
                    </div>
                    <!--end col-->
                    <!--end col-->
                    <div class="col-md-8">
                      <div class="form-group">
                        <label>Activo :</label>
                        <select
                          class="form-control custom-select"
                          id="Sortbylist-Shop"
                        >
                          <option>Auto</option>
                          <option>Casa</option>
                          <option>Equipos</option>
                        </select>
                      </div>
                    </div>
                    <!--end col-->
                    <!--start col-->
                    <div class="col-md-4">
                      <div class="form-group position-relative">
                        <label>USD:</label>
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          class="form-control pl-5"
                          placeholder="5.000,00"
                        />
                        <i class="pi pi-check"></i>
                        <i class="pi pi-times"></i>
                      </div>
                    </div>
                    <!--end col-->
                  </div>

                  <!--end row-->
                  <div class="row">
                    <div class="col-sm-12 float-right" style="float: right;">
                      <p>Total Activos: 8,000.00 $USD</p>
                    </div>
                    <!--end col-->
                  </div>

                  <!--end col-->

                  <!--end col-->
                  <!--end row-->
                  <div class="row">
                    <div class="col-sm-12 text-center">
                      <input
                        @click="advanceStep"
                        class="submitBnt btn btn-primary"
                        value="Continuar"
                      />
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </form>
                <!--end form-->
              </div>
            </div>
            <!--end custom-form-->
          </div>
          <div class="col-lg-10 col-md-7">
            <div
              class="card custom-form border-0 bgcolor"
              v-show="current_step == 4"
            >
              <h2 class="text-center pt-5">Validemos tu información</h2>
              <p class="text-center ">
                Sube toda la documentación solicitada para que podamos analizar
                tu crédito a la brevedad posible.
              </p>
              <div class="card-body">
                <form class="rounded shadow p-4">
                  <div class="row">
                    <!--end col-->
                    <!--start col-->
                    <!--end col-->
                    <div class="col-md-12">
                      <div class="form-group position-relative">
                        <label>Queremos conocerte :</label>
                        <p class="pinfo">
                          Sácate una selfie con tu carnet. No te olvides de
                          quitarte las gafas /gorra y que se tiene que leer
                          claramente tu número de identificación.
                        </p>
                        <input
                          type="file"
                          class="form-control-file"
                          id="fileupload"
                        />
                      </div>
                    </div>
                    <!--end col-->
                    <!--end col-->
                    <!--end col-->
                    <div class="col-md-12">
                      <div class="form-group position-relative">
                        <label>Respalda tus activos :</label>
                        <p class="pinfo">
                          Necesitamos validar tus activos. En caso que sea
                          vehículo preséntanos foto del RUAT o carnet de
                          propiedad. Si es inmueble podés enviarnos escaneado
                          una fotografía del último pago de impuestos o un
                          alodial (no necesita ser actualizado). Toma en cuenta
                          que para que sea válido, debe estar registrado a tu
                          nombre.
                        </p>
                        <input
                          type="file"
                          class="form-control-file"
                          id="fileupload"
                        />
                      </div>
                    </div>
                    <!--end col-->
                    <!--end col-->
                    <div class="col-md-12">
                      <div class="form-group position-relative">
                        <label>Respalda tus ingresos :</label>
                        <p class="pinfo">
                          Escanea con tu teléfono móvil tu extracto AFP, podés
                          solicitar este directamente en las oficinas de AFP
                          Futuro/Previsión o puedes generarlo desde la web. Si
                          no sabés cómo, nosotros te explicamos en la guiía para
                          solicitar AFP digital.
                          <a href="#"
                            >Si tienes problemas descarga esta guía.</a
                          >
                        </p>
                        <input
                          type="file"
                          class="form-control-file"
                          id="fileupload"
                        />
                      </div>
                    </div>
                    <!--end col-->
                    <!--end col-->

                    <!--end col-->
                    <div class="col-md-12">
                      <div class="form-group">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck2"
                          />
                          <label class="custom-control-label" for="customCheck2"
                            >Acepto los términos descritos a continuación
                          </label>
                          <p class="terms">
                            Mediante la presente autorizo (amos) expresamente al
                            Banco de Desarrollo Productivo-Sociedad Anónima
                            Mixta (BDP - S.A.M) a consultar y obtener
                            información referente a los datos, antecedentes
                            comerciales y/o financieros de mi (nuestra)
                            persona(s) a través de la Central de Información
                            Crediticia (CIC) de la Autoridad de Supervisión del
                            Sistema Financiero (ASFI), Burós de Información,
                            Registro Único de Identificación Administrado por el
                            Servicio General de Identificación Personal (SEGIP),
                            el Sistema de Registro de Garantías No
                            Convencionales (SRGNC) y otros, según corresponda.
                            La citada consulta y obtención de información podra
                            ser efectuada por cualquier medio físoco,
                            documental, electrónico, magnético, informático u
                            otros que se encuentren disponibles.
                            <br />
                            Declaro tener conocimiento que para solicitar un
                            crédito con TEBANKO debo contar con los siguientes
                            respaldos:
                            <br />
                            CI Vigente emitido por el SEGIP - Fuente de ingreso
                            dependiente con al menos 6 meses de continuidad -
                            Extracto AFP - Respaldo activos declarados - Caja de
                            ahorro o cuenta bancaria - Tener teléfono celular y
                            correo electrónico.
                          </p>
                        </div>
                      </div>
                    </div>

                    <!--end col-->
                  </div>

                  <!--end col-->

                  <!--end col-->
                  <!--end row-->
                  <div class="row">
                    <div class="col-sm-12 text-center">
                      <input
                        @click="advanceStep"
                        class="submitBnt btn btn-primary"
                        value="Finalizar"
                      />
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </form>
                <!--end form-->
              </div>
            </div>
            <!--end custom-form-->
          </div>
        </div>
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Job apply form End -->
  </div>
</template>

<style scoped>
.bgcolor {
  background-color: #202942;
}

.h2form {
  color: #202942;
}

.terms {
  font-size: 11px;
}

.pinfo {
  font-size: 11px;
}

.bgwhite {
  background-color: white !important;
}

p,
h3,
label,
h2,
h5 {
  color: white;
}
.pleft {
  padding-left: 20px;
}

.smallarrow {
  height: 25px;
}

.form-date {
  -webkit-box-shadow: none;
  box-shadow: none;
  background-color: #ffffff;
  border: 1px solid #dee2e6;
  color: #3c4858;
  height: 42px;
  font-size: 13px;
  border-radius: 6px;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.active {
  color: #0056b3;
}

a {
  color: #3c4858;
}
</style>
