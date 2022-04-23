<template>
  <div>
    <b-table striped hover :items="items" :fields="fields">
      <template #cell(photo)="data">
        <b-avatar
          variant="info"
          :src="`${apiBaseUrl}${data.item.photo}`"
        ></b-avatar>
      </template>
      <template #cell(phone)="data">
        {{ data.item.phone | VMask('(##) ####-####') }}
      </template>
      <template #cell(action)="data">
        <NuxtLink :to="`/edit/${data.item.id}`" class="btn btn-warning m-1">
          Edit
        </NuxtLink>
        <NuxtLink :to="`/show/${data.item.id}`" class="btn btn-primary m-1">
          Show
        </NuxtLink>
        <a class="btn btn-danger" @click.prevent="deleteContact(data.item.id)">Delete</a>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'TableContacts',
  props: {
    items: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      apiBaseUrl: process.env.apiBaseUrl,
      fields: [
        {
          key: 'photo',
          label: 'Avatar',
          sortable: false,
        },
        {
          key: 'name',
          label: 'Nome',
          sortable: true,
        },
        {
          key: 'email',
          label: 'E-mail',
          sortable: true,
        },
        {
          key: 'phone',
          label: 'Fone',
          sortable: true,
        },
        {
          key: 'action',
          label: 'Ações',
          sortable: false,
        },
      ],
    }
  },
  mounted() {},
  methods: {
    async deleteContact(id) {
      await this.$axios.delete(`/contact/${id}`)
      this.$emit('delete')
    }
  }
}
</script>
