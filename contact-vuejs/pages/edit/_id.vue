<template>
  <div>
    <div class="row justify-content-center m-2">
      <div class="col-lg-6 col-md-8 col-sm-12 p-2">
        <FormContact :contact-prop.sync="contact"></FormContact>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditContact',
  data() {
    return {
      contact: {},
    }
  },
  created() {
    this.getContact()
  },
  methods: {
    async getContact() {
      const response = await this.$axios.get(
        `/contact/${this.$route.params.id}`
      )
      this.contact = response.data
    },
  },
}
</script>
