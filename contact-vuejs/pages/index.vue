<template>
  <div class="row justify-content-center m-2">
    <div class="col-lg-8 col-md-10 col-sm-12 card">
      <div class="row m-1 justify-content-end">
        <div class="col-lg-2 col-md-4 col-sm-6">
          <NuxtLink to="/create" class="btn btn-primary">
          Create
          </NuxtLink>
        </div>
      </div>
      <h3>Lista de contato</h3>
      <TableContacts :items.sync="contacts" @delete="getContacts"> </TableContacts>
      <b-pagination
        v-model="currentPage"
        :total-rows.sync="totalRow"
        :per-page.sync="perPage"
        @input="changePage"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      contacts: [],
      perPage: 3,
      currentPage: 1,
      totalRow: 0,
    }
  },
  mounted() {
    this.getContacts()
  },
  methods: {
    async getContacts() {
      const response = await this.$axios.get('contact', {
        params: {
          per_page: this.perPage,
          page: this.currentPage,
        },
      })

      this.contacts = response.data.data
      this.totalRow = response.data.total
      this.currentPage = response.data.current_page
    },
    changePage(page) {
      this.currentPage = page
      this.getContacts()
    },
  },
}
</script>
