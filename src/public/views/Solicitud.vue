<script>
//import Datepicker from 'vue3-datepicker';

import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { ref, reactive } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import UploadSingle from '../components/UploadSingle.vue';

export default {
  name: 'App',
  components: {
    //Datepicker,
    Form,
    Field,
    ErrorMessage,
    UploadSingle,
  },
  setup: () => {
    const currentStep = ref(0);
    const formValues = reactive({});
    const router = useRouter();
    const picked = ref('');
    const formreset = ref(null);
    let danger = ref(true);
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
        .min(300, 'Porfavor Introducir un monto válido entre 300 y 2000')
        .max(2000, 'Porfavor Introducir un monto válido entre 300 y 2000'),
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
      carnetExpedidoEn: yup.string().required('Porfavor elegir una opción'),
      fechaVencimientoCarnet: yup
        .string()
        .required('Porfavor rellenar este campo'),
      lugarNacimiento: yup.string().required('Porfavor rellenar este campo'),
      estadoCivil: yup.string().required('Porfavor rellenar este campo'),
      nacionalidad: yup.string().required('Porfavor elegir una opción'),
      direccionPersonal: yup.string().required('Porfavor rellenar este campo'),
      nombreReferenciaFamiliar: yup
        .string()
        .required('Porfavor rellenar este campo'),
      nombreReferenciaLaboral: yup
        .string()
        .required('Porfavor rellenar este campo'),
      viviendaActual: yup.string().required('Porfavor elegir una opción'),
      nivelEducacion: yup.string().required('Porfavor elegir una opción'),
      gradoParentesco: yup.string().required('Porfavor elegir una opción'),
      telefonoReferenciaFamiliar: yup
        .string()
        .required('Porfavor rellenar este campo')
        .min(3, 'Porfavor ingresar un teléfono válido')
        .max(9, 'Porfavor ingresar un teléfono válido'),
      telefonoReferenciaLaboral: yup
        .string()
        .required('Porfavor rellenar este campo')
        .min(3, 'Porfavor ingresar un teléfono válido')
        .max(9, 'Porfavor ingresar un teléfono válido'),
      nombreEmpresa: yup.string().required('Porfavor rellenar este campo'),
      telefonoEmpresa: yup
        .string()
        .required('Porfavor rellenar este campo')
        .min(3, 'Porfavor ingresar un teléfono válido')
        .max(9, 'Porfavor ingresar un teléfono válido'),
      direccionLaboral: yup.string().required('Porfavor rellenar este campo'),
      cargoEmpresa: yup.string().required('Porfavor rellenar este campo'),
      rubroEmpresa: yup.string().required('Porfavor elegir una opción'),
      montoIngresoMensual: yup
        .number('Porfavor Introducir un valor numérico')
        .required('Porfavor rellenar este campo'),
      antiguedadLaboral: yup.string().required('Porfavor elegir una opción'),
      radioTieneInmueblesPropios: yup
        .string()
        .required('Introducir una respuesta'),
      radioTieneVehiculosPropios: yup
        .string()
        .required('Introducir una respuesta'),
      radioTieneDeudasBancarias: yup
        .string()
        .required('Introducir una respuesta'),
      radioTieneDeudasComerciales: yup
        .string()
        .required('Introducir una respuesta'),

      aceptoFinalTerminos: yup
        .bool()
        .required('Porfavor aceptar los términos para finalizar.'),
      razonPrestamo: yup
        .string()
        .required('Porfavor introducir la razón de tu préstamo.'),

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

    const submit = async () => {
      try {
        await axios.post('loanform', {
          name: formValues.nombreCompleto,
          lastName: formValues.apellidos,
          birthDate: formValues.fechaNacimiento,
          phone: formValues.telefono,
          email: formValues.correoElectronico,
          department: formValues.departamento,
          incomeRange: formValues.rangoIngresos,
          afpContribute: formValues.radioAportaAfp,
          loanAmount: formValues.montoPrestamo,
          acceptTerms: formValues.aceptoTerminos,
          ciNumber: formValues.nroCarnet,
          ciIssuedIn: formValues.carnetExpedidoEn,
          nationality: formValues.nacionalidad,
          ciExpireDate: formValues.fechaVencimientoCarnet,
          birthPlace: formValues.lugarNacimiento,
          civilStatus: formValues.estadoCivil,
          personalAddress: formValues.direccionPersonal,
          livingPlaceStatus: formValues.viviendaActual,
          educationLevel: formValues.nivelEducacion,
          referenceFamilyPhone: formValues.telefonoReferenciaFamiliar,
          referenceFamilyName: formValues.nombreReferenciaFamiliar,
          relationshipLevel: formValues.gradoParentesco,
          companyName: formValues.nombreEmpresa,
          companyPhone: formValues.telefonoEmpresa,
          referenceWorkPhone: formValues.telefonoReferenciaLaboral,
          companyIndustry: formValues.rubroEmpresa,
          companySeniority: formValues.antiguedadLaboral,
          incomeAmount: formValues.montoIngresoMensual,
          companyPosition: formValues.cargoEmpresa,
          companyAddress: formValues.direccionLaboral,
          referenceWorkName: formValues.nombreReferenciaLaboral,
          hasOwnEstates: formValues.radioTieneInmueblesPropios,
          hasBankLoans: formValues.radioTieneDeudasBancarias,
          hasCommercialLoans: formValues.radioTieneDeudasComerciales,
          hasOwnVehicles: formValues.radioTieneVehiculosPropios,
          loanReason: formValues.razonPrestamo,
          acceptFinalTerms: formValues.aceptoFinalTerminos,
        });
        await formreset.value.resetForm();
        router.push('/aceptado');
        console.log('All is good.');
      } catch (error) {
        console.log(error);
        danger.value = false;
      }
    };

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
      router,
      formValues,
      picked,
      submit,
      formreset,
      danger,
    };
  },
};
</script>

<template>
  <div>
    <!-- Hero Start -->
    <section
      class="bg-halfnew bg-light d-table w-100 bgwhite"
      :class="{
        bgform0: currentStep == 0,
        bgform1: currentStep == 1,
        bgform2: currentStep == 2,
        bgform3: currentStep == 3,
      }"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-center">
            <div class="page-next-level">
              <div class="row aligntoleft">
                <div class="col-lg-6"></div>
                <!--end col-->
              </div>
              <div class="page-next">
                <nav aria-label="breadcrumb" class="d-inline-block">
                  <ul class="breadcrumb bg-white rounded shadow mb-0">
                    <li class="breadcrumb-item  ">
                      <a
                        :class="{ active: currentStep == 0 }"
                        @click.prevent="goToStep(1)"
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
                          active: currentStep == 1,
                        }"
                        @click.prevent="goToStep(2)"
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
                          active: currentStep == 2,
                        }"
                        @click.prevent="goToStep(3)"
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
                          active: currentStep == 3,
                        }"
                        @click.prevent="goToStep(4)"
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
      ref="formreset"
      @submit="submit"
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
                            placeholder="dd-mm-yyyy"
                            class="form-control pl-5 bgwhite"
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
                        <!-- <input
                          @click="handleSubmit($event, nextStep)"
                          class="submitBnt btn btn-primary"
                          value="Continuar"
                        /> -->

                        <button
                          type="submit"
                          class="transparentBtn"
                          @click="handleSubmit($event, nextStep)"
                        >
                          <img
                            src="../../assets/img/continuarblue.png"
                            class="greenbtn mt-4"
                            :class="{ hide: hideBtn }"
                            value="Enviar Mensaje"
                          />
                        </button>
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
                              <Field
                                as="select"
                                id="carnetExpedidoEn"
                                name="carnetExpedidoEn"
                                class="form-control custom-select"
                                v-model="formValues.carnetExpedidoEn"
                              >
                                <option :value="null" disabled
                                  >Seleccionar</option
                                >
                                <option>SC</option>
                                <option>CB</option>
                                <option>TJ</option>
                                <option>SU</option>
                                <option>LP</option>
                              </Field>
                              <ErrorMessage
                                class="errorc"
                                name="carnetExpedidoEn"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Nacionalidad:</label>
                          <Field
                            as="select"
                            id="nacionalidad"
                            name="nacionalidad"
                            class="form-control custom-select"
                            v-model="formValues.nacionalidad"
                          >
                            <option :value="null" disabled>Seleccionar</option>
                            <option>Boliviana</option>
                          </Field>
                          <ErrorMessage class="errorc" name="nacionalidad" />
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
                          <Field
                            as="select"
                            id="lugarNacimiento"
                            name="lugarNacimiento"
                            class="form-control custom-select"
                            v-model="formValues.lugarNacimiento"
                          >
                            <option :value="null" disabled>Seleccionar</option>
                            <option>Santa Cruz</option>
                            <option>Cochabamba</option>
                            <option>Tarija</option>
                            <option>Sucre</option>
                            <option>La Paz</option>
                          </Field>
                          <ErrorMessage class="errorc" name="lugarNacimiento" />
                        </div>
                      </div>
                      <!--end col-->
                      <!--end col-->
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Estado Civil :</label>
                          <Field
                            as="select"
                            id="estadoCivil"
                            name="estadoCivil"
                            class="form-control custom-select"
                            v-model="formValues.estadoCivil"
                          >
                            <option :value="null" disabled>Seleccionar</option>
                            <option>Soltero</option>
                            <option>Casado</option>
                            <option>Viudo</option>
                          </Field>
                          <ErrorMessage class="errorc" name="estadoCivil" />
                        </div>
                      </div>
                      <!--end col-->
                      <!--end col-->

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
                          <Field
                            name="direccionPersonal"
                            id="direccionPersonal"
                            type="text"
                            class="form-control pl-5"
                            placeholder="Ej: Avenida Beni Calle 5 - Casa Nro 45"
                            v-model="formValues.direccionPersonal"
                          />
                          <ErrorMessage
                            class="errorc"
                            name="direccionPersonal"
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
                          <Field
                            as="select"
                            id="viviendaActual"
                            name="viviendaActual"
                            class="form-control custom-select"
                            v-model="formValues.viviendaActual"
                          >
                            <option :value="null" disabled>Seleccionar</option>
                            <option>Propia</option>
                            <option>Alquilada</option>
                            <option>Hipotecada</option>
                            <option>Anticrético</option>
                          </Field>
                          <ErrorMessage class="errorc" name="viviendaActual" />
                          <i class="pi pi-check"></i>
                          <i class="pi pi-times"></i>
                        </div>
                      </div>

                      <!--end col-->
                      <!--end col-->
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Nivel de educación :</label>
                          <Field
                            as="select"
                            id="nivelEducacion"
                            name="nivelEducacion"
                            class="form-control custom-select"
                            v-model="formValues.nivelEducacion"
                          >
                            <option :value="null" disabled>Seleccionar</option>
                            <option>Bachiller</option>
                            <option>Graduado</option>
                            <option>Masterado</option>
                          </Field>
                          <ErrorMessage class="errorc" name="nivelEducacion" />
                          <i class="pi pi-check"></i>
                          <i class="pi pi-times"></i>
                        </div>
                      </div>

                      <!--end col-->
                      <!--start col-->
                      <div class="col-md-6">
                        <div class="form-group position-relative">
                          <label>Referencia familiar:</label>
                          <i class="pi pi-check"></i>
                          <i class="pi pi-times"></i>
                          <Field
                            name="nombreReferenciaFamiliar"
                            id="nombreReferenciaFamiliar"
                            type="text"
                            class="form-control pl-5"
                            placeholder="Ej: Pedro Martinez"
                            v-model="formValues.nombreReferenciaFamiliar"
                          />
                          <ErrorMessage
                            class="errorc"
                            name="nombreReferenciaFamiliar"
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
                          <Field
                            name="telefonoReferenciaFamiliar"
                            id="telefonoReferenciaFamiliar"
                            type="number"
                            class="form-control pl-5 bgwhite"
                            placeholder="Ej: 690 05655"
                            v-model="formValues.telefonoReferenciaFamiliar"
                          />
                          <ErrorMessage
                            class="errorc"
                            name="telefonoReferenciaFamiliar"
                          />

                          <i class="pi pi-check"></i>
                          <i class="pi pi-times"></i>
                        </div>
                      </div>
                      <!--end col-->
                      <!--end col-->
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Grado de parentesco :</label>
                          <Field
                            as="select"
                            id="gradoParentesco"
                            name="gradoParentesco"
                            class="form-control custom-select"
                            v-model="formValues.gradoParentesco"
                          >
                            <option :value="null" disabled>Seleccionar</option>
                            <option>Padres</option>
                            <option>Hermanos</option>
                            <option>Primos</option>
                            <option>Esposos</option>
                            <option>Hijos</option>
                            <option>Tíos</option>
                          </Field>
                          <ErrorMessage class="errorc" name="gradoParentesco" />
                          <i class="pi pi-check"></i>
                          <i class="pi pi-times"></i>
                        </div>
                      </div>

                      <!--end col-->
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
                          <Field
                            name="nombreEmpresa"
                            id="nombreEmpresa"
                            type="text"
                            class="form-control pl-5"
                            placeholder="Ej: Embol S.A"
                            v-model="formValues.nombreEmpresa"
                          />
                          <ErrorMessage class="errorc" name="nombreEmpresa" />
                        </div>
                      </div>
                      <!--end col-->
                      <!--start col-->
                      <div class="col-md-6">
                        <div class="form-group position-relative">
                          <label>Teléfono de la empresa:</label>
                          <i class="pi pi-check"></i>
                          <i class="pi pi-times"></i>
                          <Field
                            name="telefonoEmpresa"
                            id="telefonoEmpresa"
                            type="number"
                            class="form-control pl-5 bgwhite"
                            placeholder="Ej: 690 078566"
                            v-model="formValues.telefonoEmpresa"
                          />
                          <ErrorMessage class="errorc" name="telefonoEmpresa" />
                        </div>
                      </div>
                      <!--end col-->
                      <!--start col-->
                      <div class="col-md-6">
                        <div class="form-group position-relative">
                          <label>Referencia laboral:</label>
                          <i class="pi pi-check"></i>
                          <i class="pi pi-times"></i>
                          <Field
                            name="nombreReferenciaLaboral"
                            id="nombreReferenciaLaboral"
                            type="text"
                            class="form-control pl-5"
                            placeholder="Ej: Juan Delgado"
                            v-model="formValues.nombreReferenciaLaboral"
                          />
                          <ErrorMessage
                            class="errorc"
                            name="nombreReferenciaLaboral"
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
                          <Field
                            name="telefonoReferenciaLaboral"
                            id="telefonoReferenciaLaboral"
                            type="number"
                            class="form-control pl-5 bgwhite"
                            placeholder="Ej: 690 078566"
                            v-model="formValues.telefonoReferenciaLaboral"
                          />
                          <ErrorMessage
                            class="errorc"
                            name="telefonoReferenciaLaboral"
                          />
                        </div>
                      </div>
                      <!--end col-->
                      <div class="col-md-12">
                        <div class="form-group position-relative">
                          <label>Dirección laboral:</label>
                          <i class="pi pi-check"></i>
                          <i class="pi pi-times"></i>
                          <Field
                            name="direccionLaboral"
                            id="direccionLaboral"
                            type="text"
                            class="form-control pl-5"
                            placeholder="Ej: Av. Piraí No. 987"
                            v-model="formValues.direccionLaboral"
                          />
                          <ErrorMessage
                            class="errorc"
                            name="direccionLaboral"
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
                          <Field
                            name="cargoEmpresa"
                            id="cargoEmpresa"
                            type="text"
                            class="form-control pl-5"
                            placeholder="Ej: Analista de negocios"
                            v-model="formValues.cargoEmpresa"
                          />
                          <ErrorMessage class="errorc" name="cargoEmpresa" />

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
                          <Field
                            as="select"
                            id="rubroEmpresa"
                            name="rubroEmpresa"
                            class="form-control custom-select"
                            v-model="formValues.rubroEmpresa"
                          >
                            <option :value="null" disabled>Seleccionar</option>
                            <option>Telecomunicaciones</option>
                            <option>Construcción</option>
                            <option>Servicios</option>
                            <option>Comercio</option>
                            <option>Manufactura</option>
                            <option>Agropecuaria</option>
                          </Field>
                          <ErrorMessage class="errorc" name="rubroEmpresa" />
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
                          <Field
                            type="number"
                            name="montoIngresoMensual"
                            id="montoIngresoMensual"
                            class="form-control pl-5"
                            placeholder="Monto en USD$ :"
                            v-model="formValues.montoIngresoMensual"
                          />
                          <ErrorMessage
                            class="errorc"
                            name="montoIngresoMensual"
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
                          <Field
                            as="select"
                            id="antiguedadLaboral"
                            name="antiguedadLaboral"
                            class="form-control custom-select"
                            v-model="formValues.antiguedadLaboral"
                          >
                            <option :value="null" disabled>Seleccionar</option>
                            <option>0 - 6</option>
                            <option>7-12</option>
                            <option>Más de 12</option>
                          </Field>
                          <ErrorMessage
                            class="errorc"
                            name="antiguedadLaboral"
                          />
                        </div>
                      </div>
                      <!--end col-->
                    </div>

                    <!--end col-->
                    <!--end row-->
                    <div class="row">
                      <div class="col-sm-6 text-center">
                        <!-- <input
                          @click="prevStep"
                          class="submitBnt btn btn-primary"
                          value="Regresar"
                        /> -->

                        <button
                          type="submit"
                          class="transparentBtn"
                          @click="prevStep"
                        >
                          <img
                            src="../../assets/img/regresarblue.png"
                            class="greenbtn mt-4"
                            :class="{ hide: hideBtn }"
                            value="Enviar Mensaje"
                          />
                        </button>
                      </div>
                      <div class="col-sm-6 text-center">
                        <!-- <input
                          @click="handleSubmit($event, nextStep)"
                          class="submitBnt btn btn-primary"
                          value="Continuar"
                        /> -->
                        <button
                          type="submit"
                          class="transparentBtn"
                          @click="handleSubmit($event, nextStep)"
                        >
                          <img
                            src="../../assets/img/continuarblue.png"
                            class="greenbtn mt-4"
                            :class="{ hide: hideBtn }"
                            value="Enviar Mensaje"
                          />
                        </button>
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
                v-if="currentStep === 2"
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
                      <div class="col-md-6">
                        <div class="form-group position-relative">
                          <label>¿ Usted tiene inmuebles propios ? :</label>

                          <ul class="list-unstyled mt-4 mb-0 pleft">
                            <div class="row text-center">
                              <div
                                class="custom-control custom-radio custom-control-inline te"
                              >
                                <div class="form-group mb-0">
                                  <Field
                                    type="radio"
                                    id="siTieneInmueblesPropios"
                                    name="radioTieneInmueblesPropios"
                                    class="custom-control-input"
                                    value="si"
                                    v-model="
                                      formValues.radioTieneInmueblesPropios
                                    "
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="siTieneInmueblesPropios"
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
                                      id="noTieneInmueblesPropios"
                                      name="radioTieneInmueblesPropios"
                                      class="custom-control-input"
                                      value="no"
                                      v-model="
                                        formValues.radioTieneInmueblesPropios
                                      "
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="noTieneInmueblesPropios"
                                      >No</label
                                    >
                                  </div>
                                </div>
                              </li>
                            </div>
                            <ErrorMessage
                              class="errorc"
                              name="radioTieneInmueblesPropios"
                            />
                          </ul>
                        </div>
                      </div>
                      <!--end col-->
                      <!--end col-->
                      <div class="col-md-6">
                        <div class="form-group position-relative">
                          <label>¿ Usted tiene vehículos propios ? :</label>

                          <ul class="list-unstyled mt-4 mb-0 pleft">
                            <div class="row text-center">
                              <div
                                class="custom-control custom-radio custom-control-inline te"
                              >
                                <div class="form-group mb-0">
                                  <Field
                                    type="radio"
                                    id="siTieneVehiculosPropios"
                                    name="radioTieneVehiculosPropios"
                                    class="custom-control-input"
                                    value="si"
                                    v-model="
                                      formValues.radioTieneVehiculosPropios
                                    "
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="siTieneVehiculosPropios"
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
                                      id="noTieneVehiculosPropios"
                                      name="radioTieneVehiculosPropios"
                                      class="custom-control-input"
                                      value="no"
                                      v-model="
                                        formValues.radioTieneVehiculosPropios
                                      "
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="noTieneVehiculosPropios"
                                      >No</label
                                    >
                                  </div>
                                </div>
                              </li>
                            </div>
                            <ErrorMessage
                              class="errorc"
                              name="radioTieneVehiculosPropios"
                            />
                          </ul>
                        </div>
                      </div>
                      <!--end col-->
                      <!--end col-->
                      <div class="col-md-6">
                        <div class="form-group position-relative">
                          <label>¿ Usted tiene deudas bancarias ? :</label>

                          <ul class="list-unstyled mt-4 mb-0 pleft">
                            <div class="row text-center">
                              <div
                                class="custom-control custom-radio custom-control-inline te"
                              >
                                <div class="form-group mb-0">
                                  <Field
                                    type="radio"
                                    id="siTieneDeudasBancarias"
                                    name="radioTieneDeudasBancarias"
                                    class="custom-control-input"
                                    value="si"
                                    v-model="
                                      formValues.radioTieneDeudasBancarias
                                    "
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="siTieneDeudasBancarias"
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
                                      id="noTieneDeudasBancarias"
                                      name="radioTieneDeudasBancarias"
                                      class="custom-control-input"
                                      value="no"
                                      v-model="
                                        formValues.radioTieneDeudasBancarias
                                      "
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="noTieneDeudasBancarias"
                                      >No</label
                                    >
                                  </div>
                                </div>
                              </li>
                            </div>
                            <ErrorMessage
                              class="errorc"
                              name="radioTieneDeudasBancarias"
                            />
                          </ul>
                        </div>
                      </div>
                      <!--end col-->
                      <!--end col-->
                      <!--end col-->
                      <div class="col-md-6">
                        <div class="form-group position-relative">
                          <label>¿ Usted tiene deudas comerciales ? :</label>

                          <ul class="list-unstyled mt-4 mb-0 pleft">
                            <div class="row text-center">
                              <div
                                class="custom-control custom-radio custom-control-inline te"
                              >
                                <div class="form-group mb-0">
                                  <Field
                                    type="radio"
                                    id="siTieneDeudasComerciales"
                                    name="radioTieneDeudasComerciales"
                                    class="custom-control-input"
                                    value="si"
                                    v-model="
                                      formValues.radioTieneDeudasComerciales
                                    "
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="siTieneDeudasComerciales"
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
                                      id="noTieneDeudasComerciales"
                                      name="radioTieneDeudasComerciales"
                                      class="custom-control-input"
                                      value="no"
                                      v-model="
                                        formValues.radioTieneDeudasComerciales
                                      "
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="noTieneDeudasComerciales"
                                      >No</label
                                    >
                                  </div>
                                </div>
                              </li>
                            </div>
                            <ErrorMessage
                              class="errorc"
                              name="radioTieneDeudasComerciales"
                            />
                          </ul>
                        </div>
                      </div>
                      <!--end col-->
                      <!--end col-->

                      <!--end col-->
                    </div>

                    <!--end col-->

                    <!--end col-->
                    <!--end row-->
                    <div class="row">
                      <div class="col-sm-6 text-center">
                        <!-- <input
                          @click="prevStep"
                          class="submitBnt btn btn-primary"
                          value="Regresar"
                        /> -->

                        <button
                          type="submit"
                          class="transparentBtn"
                          @click="prevStep"
                        >
                          <img
                            src="../../assets/img/regresarblue.png"
                            class="greenbtn mt-4"
                            :class="{ hide: hideBtn }"
                            value="Enviar Mensaje"
                          />
                        </button>
                      </div>
                      <div class="col-sm-6 text-center">
                        <!-- <input
                          @click="handleSubmit($event, nextStep)"
                          class="submitBnt btn btn-primary"
                          value="Continuar"
                        /> -->
                        <button
                          type="submit"
                          class="transparentBtn"
                          @click="handleSubmit($event, nextStep)"
                        >
                          <img
                            src="../../assets/img/continuarblue.png"
                            class="greenbtn mt-4"
                            :class="{ hide: hideBtn }"
                            value="Enviar Mensaje"
                          />
                        </button>
                      </div>
                      <!--end col-->
                    </div>
                    <!-- <div class="row">
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
                      
                    </div> -->
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
                v-if="currentStep === 3"
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
                          <UploadSingle />
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
                          <UploadSingle />
                        </div>
                      </div>
                      <!--end col-->
                      <!--end col-->
                      <!--  <div class="col-md-12">
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
                      </div> -->
                      <!--end col-->
                      <!--end col-->
                      <!--end col-->
                      <div class="col-md-12">
                        <div class="form-group position-relative">
                          <label>¿ Cuál es la razón de tu préstamo ? :</label>
                          <message-circle-icon
                            class="fea icon-sm icons"
                          ></message-circle-icon>
                          <Field
                            type="text"
                            name="razonPrestamo"
                            id="razonPrestamo"
                            rows="4"
                            v-model="formValues.razonPrestamo"
                            class="form-control pl-5"
                            placeholder="El préstamo será digido a ...."
                          />
                          <ErrorMessage class="errorc" name="razonPrestamo" />
                        </div>
                      </div>

                      <!--end col-->
                      <div class="col-md-12">
                        <div class="form-group">
                          <div class="custom-control custom-checkbox">
                            <Field
                              type="checkbox"
                              class="custom-control-input"
                              id="aceptoFinalTerminos"
                              name="aceptoFinalTerminos"
                              v-model="formValues.aceptoFinalTerminos"
                              :value="true"
                            />
                            <label
                              class="custom-control-label"
                              for="aceptoFinalTerminos"
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
                          <ErrorMessage
                            class="errorc"
                            name="aceptoFinalTerminos"
                          />
                        </div>
                      </div>

                      <!--end col-->
                    </div>

                    <!--end col-->

                    <!--end col-->
                    <!--end row-->
                    <div class="row">
                      <div class="col-sm-6 text-center">
                        <!-- <input
                          @click="prevStep"
                          class="submitBnt btn btn-primary"
                          value="Regresar"
                        /> -->
                        <button
                          type="submit"
                          class="transparentBtn"
                          @click="prevStep"
                        >
                          <img
                            src="../../assets/img/regresarblue.png"
                            class="greenbtn mt-4"
                            :class="{ hide: hideBtn }"
                            value="Enviar Mensaje"
                          />
                        </button>
                      </div>
                      <div class="col-sm-6 text-center">
                        <!-- <input
                          type="submit"
                          class="submitBnt btn btn-primary"
                          value="Finalizar"
                        /> -->
                        <button type="submit" class="transparentBtn">
                          <img
                            src="../../assets/img/btnfinalizar.png"
                            class="greenbtn mt-4"
                            :class="{ hide: hideBtn }"
                            value="Enviar Mensaje"
                          />
                        </button>
                        <!-- <input
                          type="submit"
                          class="submitBnt btn btn-primary"
                          value="Finalizar"
                        /> -->
                      </div>
                      <!--end col-->
                    </div>
                    <div
                      :class="{ hide: danger }"
                      class="alert alert-danger text-center"
                      role="alert"
                    >
                      Actualmente nos encontramos con errores de conexión.
                      Porfavor intentar en otro momento.
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
  background-color: #001b66;
}

.h2form {
  color: #202942;
}

.errorc {
  color: red;
  font-size: 15px;
  font-weight: 800;
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

.active {
  color: #0056b3;
}

.transparentBtn {
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
}

.greenbtn {
  width: 250px;
  height: auto;
}

a {
  color: #3c4858;
}

.smallarrow {
  height: 25px;
}

.hide {
  display: none;
}

.bgform0 {
  background-image: url('../../assets/img/coverform1.png');

  background-repeat: no-repeat;
}

.bgform1 {
  background-image: url('../../assets/img/coverform2.png');

  background-repeat: no-repeat;
}

.bgform2 {
  background-image: url('../../assets/img/coverform3.png');

  background-repeat: no-repeat;
}

.bgform3 {
  background-image: url('../../assets/img/coverform4.png');

  background-repeat: no-repeat;
}

.bg-halfnew {
  padding: 330px 0 90px;

  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
  position: relative;
  background-position: center center;
}
</style>
