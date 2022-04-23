<template>
  <div class="card">
    <div class="card-body">
      <ValidationObserver v-slot="{ invalid }">
        <b-form @submit.stop.prevent="onSubmit">
          <h1 class="h3 mb-3 fw-normal">Contact</h1>

          <ValidationProvider
            v-slot="{ errors }"
            name="Name"
            rules="required|min:5"
            immediate
          >
            <b-form-group
              id="input-group-name"
              label="Name:"
              label-for="input-name"
            >
              <b-form-input
                id="input-name"
                v-model="contact.name"
                type="text"
                placeholder="Name"
                required
              ></b-form-input>

              <div
                v-for="(error, index) in errors"
                :key="index"
                class="invalid-feedback d-block"
              >
                {{ error }}
              </div>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors }"
            name="E-mail"
            rules="required|email"
            immediate
          >
            <b-form-group
              id="input-group-email"
              label="Email:"
              label-for="input-email"
            >
              <b-form-input
                id="input-email"
                v-model="contact.email"
                type="email"
                placeholder="E-mail"
                required
              ></b-form-input>

              <div
                v-for="(error, index) in errors"
                :key="index"
                class="invalid-feedback d-block"
              >
                {{ error }}
              </div>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors }"
            name="Phone"
            rules="required|length:9"
            immediate
          >
            <b-form-group
              id="input-group-phone"
              label="Phone:"
              label-for="input-phone"
            >
              <b-form-input
                id="input-phone"
                v-model="contact.phone"
                type="text"
                placeholder="Phone"
                required
              ></b-form-input>

              <div
                v-for="(error, index) in errors"
                :key="index"
                class="invalid-feedback d-block"
              >
                {{ error }}
              </div>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider
            v-if="contact.id === undefined"
            v-slot="{ errors }"
            name="Photo"
            rules="required"
            immediate
          >
            <b-form-group
              id="input-group-photo"
              label="Photo:"
              label-for="input-photo"
            >
              <b-form-file
                v-model="contact.photo"
                :state="Boolean(contact.photo)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
              ></b-form-file>

              <div
                v-for="(error, index) in errors"
                :key="index"
                class="invalid-feedback d-block"
              >
                {{ error }}
              </div>
            </b-form-group>
          </ValidationProvider>

          <b-form-group
            v-if="contact.id !== undefined"
            id="input-group-photo"
            label="Photo:"
            label-for="input-photo"
          >
            <b-form-file
              v-model="contact.photo"
              :state="Boolean(contact.photo)"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
            ></b-form-file>

            <div
              v-for="(error, index) in errors"
              :key="index"
              class="invalid-feedback d-block"
            >
              {{ error }}
            </div>
          </b-form-group>

          <button
            class="w-100 btn btn-lg btn-primary"
            type="submit"
            :disabled="invalid"
          >
            Save
          </button>
        </b-form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  name: 'FormContact',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    contactProp: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      contact: {
        id: null,
        name: null,
        email: null,
        phone: null,
        photo: null,
      },
    }
  },
  watch: {
    contactProp(val) {
      if (val.id !== undefined) {
        delete val.photo
        this.contact = { ...val }
      }
    },
  },
  mounted() {},
  methods: {
    async onSubmit() {
      try {
        const formData = new FormData()

        formData.append('name', this.contact.name)
        formData.append('email', this.contact.email)
        formData.append('phone', this.contact.phone)
        formData.append('photo', this.contact.photo)

        if (this.contact.id != null) {
          formData.append('_method', 'patch')
          await this.$axios.post(`/contact/${this.contact.id}`, formData, {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            },
            timeout: 9999999,
          })
        } else {
          await this.$axios.post(`/contact/`, formData, {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            },
            timeout: 9999999,
          })
        }

        this.$toast.success('Created!')

        this.$router.push('/')
      } catch (errors) {
        // const erros = error.response.data.data;

        for (const prop in errors) {
          errors[prop].forEach((element) => {
            // this.$toast.error(element);
          })
        }
      }
    },
  },
}
</script>
