<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { reactive, ref } from 'vue';

import axios from 'axios';

export default {
  components: {
    //Datepicker,
    Form,
    Field,
    ErrorMessage,
  },
  setup: () => {
    const formValues = reactive({});
    let success = ref(true);
    let danger = ref(true);
    let loading = ref(true);
    let hideBtn = ref(false);

    const form = ref(null);
    const schema = yup.object().shape({
      suscripcionemail: yup
        .string()
        .required('Porfavor ingresar su correo')
        .email('Porfavor ingrese un correo válido'),
    });

    const submit = async () => {
      loading.value = false;
      hideBtn.value = true;
      try {
        await axios.post('subscription', {
          email: formValues.suscripcionemail,
        });
        await form.value.resetForm();
        success.value = false;
        danger.value = true;
        loading.value = true;
        hideBtn.value = false;
        console.log('SENT. Loading ended.');
      } catch (error) {
        console.log(error);
        danger.value = false;
        success.value = true;
        loading.value = true;
        hideBtn.value = false;
      }
    };

    function onSubmit() {
      alert(JSON.stringify(formValues, null, 2));
      console.log('should reset form');
      form.value.resetForm();
      success.value = false;
    }

    return {
      schema,
      onSubmit,
      formValues,
      submit,
      form,
      success,
      danger,
      loading,
      hideBtn,
    };
  },
};
</script>

<template>
  <div class="col-md-4 col-12">
    <h3 class="text-light footer-head">Información</h3>
    <p class="mt-4">
      Déjanos tu correo electrónico para enterarte de las ofertas y productos
      que te ofrece TeBanko.
    </p>
    <Form ref="form" @submit="submit" :validation-schema="schema">
      <div class="row">
        <div class="col-lg-12">
          <div class=" form-group position-relative">
            <h3 class="text-light footer-head">
              Ingresa tu correo electrónico
            </h3>
            <mail-icon class="fea icon-sm icons"></mail-icon>
            <Field
              type="email"
              name="suscripcionemail"
              id="correoSuscripcion"
              class="form-control pl-5 rounded"
              placeholder="Correo: "
              v-model="formValues.suscripcionemail"
              required
            />
            <ErrorMessage class="errorc" name="suscripcionemail" />
          </div>
        </div>
        <div class="col-lg-12">
          <div
            :class="{ hide: success }"
            class="alert alert-success text-center"
            role="alert"
          >
            Gracias por subscribirte a las últimas noticias de TeBanko.
          </div>
          <div
            :class="{ hide: danger }"
            class="alert alert-danger text-center"
            role="alert"
          >
            Actualmente nos encontramos con errores de conexión. Porfavor
            intentar en otro momento.
          </div>
          <input
            type="submit"
            class="btn btn-soft-primary btn-block"
            value="Ingresar"
            :class="{ hide: hideBtn }"
          />
          <div
            :class="{ hide: loading }"
            class="spinner-grow text-primary"
          ></div>
        </div>
      </div>
    </Form>
  </div>
</template>

<style scoped>
.errorc {
  color: red;
}

h3 {
  font-size: 25px !important;
}

.hide {
  display: none;
}
</style>
