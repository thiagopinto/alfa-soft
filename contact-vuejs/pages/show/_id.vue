<template>
  <div>
    <div class="row justify-content-center m-2">
      <div class="col-lg-6 col-md-8 col-sm-12 p-2">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <img :src="`${apiBaseUrl}${contact.photo}`" class="img-thumbnail" :alt="contact.name">
              </div>
            </div>
            <div class="row">
              <div class="col">
                <span>{{ contact.name }}</span>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <span>{{ contact.email }}</span>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <span>{{ contact.phone }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowContact',
  data() {
    return {
      contact: {},
      apiBaseUrl: process.env.apiBaseUrl,
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
