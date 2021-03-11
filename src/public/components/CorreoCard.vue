<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { reactive } from 'vue';
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
    const schema = yup.object().shape({
      suscripcionemail: yup
        .string()
        .required('Porfavor ingresar su correo')
        .email('Porfavor ingrese un correo válido'),
    });

    const submit = async () => {
      await axios.post('suscripcionemail', {
        email: formValues.suscripcionemail,
      });
    };

    function onSubmit() {
      alert(JSON.stringify(formValues, null, 2));
    }
    return {
      schema,
      onSubmit,
      formValues,
      submit,
    };
  },
};
</script>

<template>
  <div class="col-md-4 col-12">
    <h4 class="text-light footer-head">Información</h4>
    <p class="mt-4">
      Déjanos tu correo electrónico para enterarte de las ofertas y productos
      que te ofrece TeBanko.
    </p>
    <Form @submit="submit" :validation-schema="schema">
      <div class="row">
        <div class="col-lg-12">
          <div class="foot-subscribe form-group position-relative">
            <label
              >Ingresa tu correo electrónico
              <span class="text-danger">*</span></label
            >
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
          <input
            type="submit"
            class="btn btn-soft-primary btn-block"
            value="Ingresar"
          />
        </div>
      </div>
    </Form>
  </div>
</template>

<style scoped>
.errorc {
  color: red;
}
</style>
