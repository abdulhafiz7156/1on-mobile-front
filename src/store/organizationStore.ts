import {defineStore} from "pinia";
import {ref} from "vue";
import {OrganizationI} from "../types/interfaces.ts";
import axios from "axios";

export const useOrganizationStore = defineStore('organization', () => {
  const organization = ref<null | OrganizationI>(null)

  const initOrganization = () => {
    axios.get(`${import.meta.env.VITE_APP_URL}/init-organization`)
      .then(({data}) => {
        organization.value = data
      })
  }

  return { organization, initOrganization }
})