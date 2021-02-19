<script>
//import Datepicker from 'vue3-datepicker';

import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { ref, reactive } from 'vue';

export default {
  name: 'App',
  components: {
    //Datepicker,
    Form,
    Field,
    ErrorMessage,
  },
  setup: () => {
    const currentStep = ref(0);
    const formValues = reactive({});

    const picked = ref('');

    const schema = yup.object().shape({
      nombreCompleto: yup.string().required('Porfavor rellenar este campo'),
      apellidos: yup.string().required('Porfavor rellenar este campo'),
      fechaNacimiento: yup.string().required('Porfavor rellenar este campo'),
      telefono: yup
        .string()
        .required('Porfavor rellenar este campo')
        .min(3, 'Porfavor ingresar un teléfono válido')
        .max(9, 'Porfavor ingresar un teléfono válido'),
      correoElectronico: yup
        .string()
        .required('Porfavor rellenar este campo')
        .email('Porfavor ingresar un correo válido'),

      departamento: yup.string().required('Porfavor elegir una opción'),
      radioAportaAfp: yup.string().required('Porfavor elegir una opción'),
      rangoIngresos: yup.string().required('Porfavor elegir una opción'),
      montoPrestamo: yup
        .number('Porfavor Introducir un monto válido entre 1500 y 2000')
        .required('Porfavor rellenar este campo')
        .min(1500, 'Porfavor Introducir un monto válido entre 1500 y 2000')
        .max(2000, 'Porfavor Introducir un monto válido entre 1500 y 2000'),
      aceptoTerminos: yup
        .bool()
        .required(
          'Porfavor aceptar los términos para continuar al siguiente paso.'
        ),
      nroCarnet: yup
        .string()
        .required('Porfavor rellenar este campo')
        .matches(/^[0-9]+$/, 'Must be numeric')
        .min(7, 'Porfavor ingresar un carnet válido')
        .max(7, 'Porfavor ingresar un carnet válido'),
      fechaVencimientoCarnet: yup
        .string()
        .required('Porfavor rellenar este campo'),
      address: yup.string().required('Porfavor elegir una opción'),
      postalCode: yup
        .string()
        .required()
        .matches(/^[0-9]+$/, 'Must be numeric'),

      terms: yup.boolean().required('You must agree to terms and conditions'),
    });

    function onSubmit() {
      alert(JSON.stringify(formValues, null, 2));
    }

    function nextStep() {
      currentStep.value++;
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    function prevStep() {
      if (currentStep.value <= 0) {
        return;
      }

      currentStep.value--;
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    return {
      currentStep,
      schema,
      onSubmit,
      nextStep,
      prevStep,
      formValues,
      picked,
    };
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
                    <li class="breadcrumb-item  nav-link">
                      <a
                        :class="{ active: currentStep == 1 }"
                        @click.prevent="goToStep(1)"
                        href="#"
                        >Paso 1</a
                      >
                    </li>
                    <li class="breadcrumb-item nav-link">
                      <a
                        :class="{
                          disabled: max_step < 2,
                          active: currentStep == 2,
                        }"
                        @click.prevent="goToStep(2)"
                        href="#"
                        >Paso 2</a
                      >
                    </li>
                    <li class="breadcrumb-item nav-link">
                      <a
                        :class="{
                          disabled: max_step < 3,
                          active: currentStep == 3,
                        }"
                        @click.prevent="goToStep(3)"
                        href="#"
                        >Paso 3</a
                      >
                    </li>
                    <li class="breadcrumb-item nav-link">
                      <a
                        :class="{
                          disabled: max_step < 4,
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
    <Form
      @submit="onSubmit"
      v-slot="{ handleSubmit }"
      :validation-schema="schema"
    >
      <!-- Job apply form Start -->
      <section class="section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10 col-md-7">
              <div
                class="card custom-form border-0 bgcolor"
                v-if="currentStep === 0"
              >
                <h2 class="text-center pt-5">Información Básica</h2>
                <p class="text-center ">
                  Rellena la información básica para continuar al siguiente
                  paso.
                </p>
                <div class="card-body">
                  <div class="rounded shadow p-4">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group position-relative">
                          <label>Nombre Completo :</label>
                          <i class="pi pi-check"></i>
                          <i class="pi pi-times"></i>
                          <Field
                            name="nombreCompleto"
                            id="nombreCompleto"
                            type="text"
                            class="form-control pl-5"
                            placeholder="Ej: José Carlos"
                            v-model="formValues.nombreCompleto"
                          />
                          <ErrorMessage class="errorc" name="nombreCompleto" />
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
                          <Field
                            name="apellidos"
                            id="apellidos"
                            type="text"
                            class="form-control pl-5"
                            placeholder="Ej: Rodriguez Justiniano"
                            v-model="formValues.apellidos"
                          />
                          <ErrorMessage class="errorc" name="apellidos" />
                          <i class="pi pi-check"></i>
                          <i class="pi pi-times"></i>
                        </div>
                      </div>
                      <!--end col-->
                      <div class="col-md-6">
                        <div class="position-relative">
                          <label>Fecha de Nacimiento:</label>

                          <Field
                            name="fechaNacimiento"
                            id="fechaNacimiento"
                            type="date"
                            class="form-control pl-5 bgwhite"
                            placeholder="Ej: 753 84566"
                            v-model="formValues.fechaNacimiento"
                          />
                          <ErrorMessage class="errorc" name="fechaNacimiento" />
                        </div>
                      </div>
                      <!--end col-->

                      <div class="col-md-6">
                        <div class="form-group position-relative">
                          <label>Teléfono Celular :</label>
                          <phone-icon class="fea icon-sm icons"></phone-icon>
                          <Field
                            name="telefono"
                            id="telefono"
                            type="number"
                            class="form-control pl-5 bgwhite"
                            placeholder="Ej: 753 84566"
                            v-model="formValues.telefono"
                          />
                          <ErrorMessage class="errorc" name="telefono" />
                        </div>
                      </div>
                      <!--end col-->
                      <div class="col-md-6">
                        <div class="form-group position-relative">
                          <label>Correo Electrónico :</label>
                          <mail-icon class="fea icon-sm icons"></mail-icon>
                          <Field
                            name="correoElectronico"
                            id="correoElectronico"
                            type="email"
                            class="form-control pl-5"
                            placeholder="Ej: jose@gmail.com"
                            v-model="formValues.correoElectronico"
                          />
                          <ErrorMessage
                            class="errorc"
                            name="correoElectronico"
                          />
                        </div>
                      </div>
                      <!--end col-->
                      <!--end col-->
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Departamento :</label>

                          <Field
                            as="select"
                            class="form-control custom-select"
                            v-model="formValues.departamento"
                            id="departamento"
                            name="departamento"
                          >
                            <option :value="null" disabled
                              >Seleccionar departamento</option
                            >
                            <option>Santa Cruz</option>
                            <option>Cochabamba</option>
                            <option>Tarija</option>
                            <option>Sucre</option>
                            <option>La Paz</option>
                          </Field>

                          <ErrorMessage class="errorc" name="departamento" />
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
                                  <Field
                                    type="radio"
                                    id="siAportaAfp"
                                    name="radioAportaAfp"
                                    class="custom-control-input"
                                    value="si"
                                    v-model="formValues.radioAportaAfp"
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
                                    <Field
                                      type="radio"
                                      id="noAportaAfp"
                                      name="radioAportaAfp"
                                      class="custom-control-input"
                                      value="no"
                                      v-model="formValues.radioAportaAfp"
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
                            <ErrorMessage
                              class="errorc"
                              name="radioAportaAfp"
                            />
                          </ul>
                        </div>
                      </div>
                      <!--end col-->
                      <!--end col-->

                      <!--end col-->
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Rango de ingresos menuales :</label>

                          <Field
                            as="select"
                            id="rangoIngresos"
                            name="rangoIngresos"
                            class="form-control custom-select"
                            v-model="formValues.rangoIngresos"
                          >
                            <option :value="null" disabled
                              >Seleccionar rango</option
                            >
                            <option>0$ - 500$</option>
                            <option>500$ - 1000$</option>
                            <option>1000$ - 2000$</option>
                            <option>2000$ en adelante</option>
                          </Field>
                          <ErrorMessage class="errorc" name="rangoIngresos" />
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
                          <Field
                            type="number"
                            name="montoPrestamo"
                            id="montoPrestamo"
                            rows="4"
                            class="form-control pl-5"
                            placeholder="Monto en USD$ :"
                            v-model="formValues.montoPrestamo"
                          />
                          <ErrorMessage class="errorc" name="montoPrestamo" />
                        </div>
                      </div>

                      <div class="col-md-12">
                        <div class="form-group">
                          <div class="custom-control custom-checkbox">
                            <Field
                              type="checkbox"
                              class="custom-control-input"
                              id="aceptoTerminos"
                              name="aceptoTerminos"
                              v-model="formValues.aceptoTerminos"
                              :value="true"
                            />
                            <label
                              class="custom-control-label"
                              for="aceptoTerminos"
                              >Acepto los términos descritos a continuación
                            </label>
                            <p class="terms">
                              Mediante la presente autorizo (amos) expresamente
                              al Banco de Desarrollo Productivo-Sociedad Anónima
                              Mixta (BDP - S.A.M) a consultar y obtener
                              información referente a los datos, antecedentes
                              comerciales y/o financieros de mi (nuestra)
                              persona(s) a través de la Central de Información
                              Crediticia (CIC) de la Autoridad de Supervisión
                              del Sistema Financiero (ASFI), Burós de
                              Información, Registro Único de Identificación
                              Administrado por el Servicio General de
                              Identificación Personal (SEGIP), el Sistema de
                              Registro de Garantías No Convencionales (SRGNC) y
                              otros, según corresponda. La citada consulta y
                              obtención de información podra ser efectuada por
                              cualquier medio físoco, documental, electrónico,
                              magnético, informático u otros que se encuentren
                              disponibles.
                              <br />
                              Declaro tener conocimiento que para solicitar un
                              crédito con TEBANKO debo contar con los siguientes
                              respaldos:
                              <br />
                              CI Vigente emitido por el SEGIP - Fuente de
                              ingreso dependiente con al menos 6 meses de
                              continuidad - Extracto AFP - Respaldo activos
                              declarados - Caja de ahorro o cuenta bancaria -
                              Tener teléfono celular y correo electrónico.
                            </p>
                          </div>
                          <ErrorMessage class="errorc" name="aceptoTerminos" />
                        </div>
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                    <div class="row">
                      <div class="col-sm-12 text-center">
                        <input
                          @click="handleSubmit($event, nextStep)"
                          class="submitBnt btn btn-primary"
                          value="Continuar"
                        />
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                  </div>
                  <!--end form-->
                </div>
              </div>
              <!--end custom-form-->
            </div>
            <div class="col-lg-10 col-md-7">
              <div
                class="card custom-form border-0 bgcolor"
                v-if="currentStep === 1"
              >
                <h2 class="text-center pt-5">Datos del Carnet</h2>
                <p class="text-center ">
                  Completa la información básica para seguir con los pasos.
                </p>
                <div class="card-body">
                  <div class="rounded shadow p-4">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="row">
                          <div class="col-md-8">
                            <div class="form-group position-relative">
                              <label>Nro. Carnet de Identidad :</label>
                              <i class="pi pi-check"></i>
                              <i class="pi pi-times"></i>
                              <Field
                                name="nroCarnet"
                                id="nroCarnet"
                                type="text"
                                class="form-control pl-5"
                                placeholder="Ej: 4600841"
                                v-model="formValues.nroCarnet"
                              />

                              <ErrorMessage class="errorc" name="nroCarnet" />
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group">
                              <label>Expedido en :</label>
                              <select
                                class="form-control custom-select"
                                id="carnetExpedidoEn"
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
                            id="nacionalidad"
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
                          <Field
                            name="fechaVencimientoCarnet"
                            id="fechaVencimientoCarnet"
                            type="date"
                            class="form-control pl-5 bgwhite"
                            placeholder="Ej: 753 84566"
                            v-model="formValues.fechaVencimientoCarnet"
                          />
                          <ErrorMessage
                            class="errorc"
                            name="fechaVencimientoCarnet"
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
                            id="lugarDeNacimiento"
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
                            id="estadoCivil"
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
                            placeholder="Ej: Avenida Beni Calle 5 - Casa Nro 45"
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
                            id="estadoViviendaActual"
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
                            id="nivelEducacion"
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
                            name="nombreReferenciaFamiliar"
                            id="nombreReferenciaFamiliar"
                            type="text"
                            class="form-control pl-5"
                            placeholder="Ej: Pedro Martinez"
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
                            name="telefonoReferenciaFamiliar"
                            id="telefonoReferenciaFamiliar"
                            type="text"
                            class="form-control pl-5"
                            placeholder="Ej: 690 05655"
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
                            name="nombreReferenciaLaboral"
                            id="nombreReferenciaLaboral"
                            type="text"
                            class="form-control pl-5"
                            placeholder="Ej: Juan Delgado"
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
                            name="telefonoReferenciaLaboral"
                            id="telefonoReferenciaLaboral"
                            type="text"
                            class="form-control pl-5"
                            placeholder="Ej: 690 05644"
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
                            name="nombreEmpresa"
                            id="nombreEmpresa"
                            type="text"
                            class="form-control pl-5"
                            placeholder="Ej: Embol S.A"
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
                            name="telefonoEmpresa"
                            id="telefonoEmpresa"
                            type="text"
                            class="form-control pl-5"
                            placeholder="Ej: 3 458484"
                          />
                          <i class="pi pi-check"></i>
                          <i class="pi pi-times"></i>
                        </div>
                      </div>
                      <!--end col-->
                      <!--end col-->
                      <div class="col-md-12">
                        <div class="form-group position-relative">
                          <label>Dirección laboral:</label>
                          <i class="pi pi-check"></i>
                          <i class="pi pi-times"></i>
                          <input
                            name="name"
                            id="name"
                            type="text"
                            class="form-control pl-5"
                            placeholder="Ej: Av. Piraí No. 987"
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
                            name="cargoEmpresa"
                            id="cargoEmpresa"
                            type="text"
                            class="form-control pl-5"
                            placeholder="Ej: Analista de negocios"
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
                            id="rubroEmpresa"
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
                          <label>Monto de ingresos líquidos mensuales:</label>
                          <i class="pi pi-check"></i>
                          <i class="pi pi-times"></i>
                          <input
                            name="name"
                            id="name"
                            type="text"
                            class="form-control pl-5"
                            placeholder="Monto en USD"
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
                            id="antiguedadLaboral"
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
                      <div class="col-sm-6 text-center">
                        <input
                          @click="prevStep"
                          class="submitBnt btn btn-primary"
                          value="Regresar"
                        />
                      </div>
                      <div class="col-sm-6 text-center">
                        <input
                          @click="handleSubmit($event, nextStep)"
                          class="submitBnt btn btn-primary"
                          value="Continuar"
                        />
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                  </div>
                  <!--end form-->
                </div>
              </div>
              <!--end custom-form-->
            </div>
            <div class="col-lg-10 col-md-7">
              <div
                class="card custom-form border-0 bgcolor"
                v-show="currentStep == 2"
              >
                <h2 class="text-center pt-5">Activos</h2>
                <p class="text-center ">
                  Completa la información básica para seguir con los pasos.
                </p>
                <div class="card-body">
                  <div class="rounded shadow p-4">
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
                            id="primerActivo"
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
                            name="valorPrimerActivo"
                            id="name"
                            type="number"
                            class="form-control pl-5"
                            placeholder="Valor en USD"
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
                            id="segundoActivo"
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
                            name="valorSegundoActivo"
                            id="valorSegundoActivo"
                            type="text"
                            class="form-control pl-5"
                            placeholder="Valor en USD"
                          />
                          <i class="pi pi-check"></i>
                          <i class="pi pi-times"></i>
                        </div>
                      </div>
                      <!--end col-->
                      <!--end col-->
                      <div class="col-md-8">
                        <div class="form-group">
                          <label>Pasivo :</label>
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
                            placeholder="Valor en USD"
                          />
                          <i class="pi pi-check"></i>
                          <i class="pi pi-times"></i>
                        </div>
                      </div>
                      <!--end col-->
                      <!--end col-->
                      <div class="col-md-8">
                        <div class="form-group">
                          <label>Pasivo :</label>
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
                            placeholder="Valor en USD"
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
                      <div class="col-sm-6 text-center">
                        <input
                          @click="prevStep"
                          class="submitBnt btn btn-primary"
                          value="Regresar"
                        />
                      </div>
                      <div class="col-sm-6 text-center">
                        <input
                          @click="handleSubmit($event, nextStep)"
                          class="submitBnt btn btn-primary"
                          value="Continuar"
                        />
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                  </div>
                  <!--end form-->
                </div>
              </div>
              <!--end custom-form-->
            </div>
            <div class="col-lg-10 col-md-7">
              <div
                class="card custom-form border-0 bgcolor"
                v-show="currentStep == 3"
              >
                <h2 class="text-center pt-5">Validemos tu información</h2>
                <p class="text-center ">
                  Sube toda la documentación solicitada para que podamos
                  analizar tu crédito a la brevedad posible.
                </p>
                <div class="card-body">
                  <div class="rounded shadow p-4">
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
                            alodial (no necesita ser actualizado). Toma en
                            cuenta que para que sea válido, debe estar
                            registrado a tu nombre.
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
                            no sabés cómo, nosotros te explicamos en la guiía
                            para solicitar AFP digital.
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
                            <label
                              class="custom-control-label"
                              for="customCheck2"
                              >Acepto los términos descritos a continuación
                            </label>
                            <p class="terms">
                              Mediante la presente autorizo (amos) expresamente
                              al Banco de Desarrollo Productivo-Sociedad Anónima
                              Mixta (BDP - S.A.M) a consultar y obtener
                              información referente a los datos, antecedentes
                              comerciales y/o financieros de mi (nuestra)
                              persona(s) a través de la Central de Información
                              Crediticia (CIC) de la Autoridad de Supervisión
                              del Sistema Financiero (ASFI), Burós de
                              Información, Registro Único de Identificación
                              Administrado por el Servicio General de
                              Identificación Personal (SEGIP), el Sistema de
                              Registro de Garantías No Convencionales (SRGNC) y
                              otros, según corresponda. La citada consulta y
                              obtención de información podra ser efectuada por
                              cualquier medio físoco, documental, electrónico,
                              magnético, informático u otros que se encuentren
                              disponibles.
                              <br />
                              Declaro tener conocimiento que para solicitar un
                              crédito con TEBANKO debo contar con los siguientes
                              respaldos:
                              <br />
                              CI Vigente emitido por el SEGIP - Fuente de
                              ingreso dependiente con al menos 6 meses de
                              continuidad - Extracto AFP - Respaldo activos
                              declarados - Caja de ahorro o cuenta bancaria -
                              Tener teléfono celular y correo electrónico.
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
                      <div class="col-sm-6 text-center">
                        <input
                          @click="prevStep"
                          class="submitBnt btn btn-primary"
                          value="Regresar"
                        />
                      </div>
                      <div class="col-sm-6 text-center">
                        <input
                          @click="handleSubmit($event, nextStep)"
                          class="submitBnt btn btn-primary"
                          value="Finalizar"
                        />
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                  </div>
                  <!--end form-->
                </div>
              </div>
              <!--end custom-form-->
            </div>
          </div>
        </div>
        <!--end container-->
      </section>
    </Form>
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

.errorc {
  color: red;
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
</style>
