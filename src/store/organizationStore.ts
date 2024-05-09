import {defineStore} from "pinia";
import {ref} from "vue";
import {Employee, OrganizationI, ServiceI} from "../types/interfaces.ts";
import axios from "axios";

export const useOrganizationStore = defineStore('organization', () => {
    const organization = ref<null | OrganizationI>(null)
    const employees = ref<null | Employee>(null)
    const organization_id = ref(null)
    const services = ref<null | ServiceI>(null)
    const getOrganizationId = () => {
        return organization_id
    }
    const initOrganization = async() => {
        await axios.get(`${import.meta.env.VITE_APP_URL}/init-organization`)
      .then(({data}) => {
            organization.value = data
            organization_id.value = data.id
      })
      await axios.get(`${import.meta.env.VITE_APP_URL}/organization/${organization_id.value}/employee`)
          .then(({data}) => {
              employees.value = data
          })
      await axios.get(`${import.meta.env.VITE_APP_URL}/organization/${organization_id.value}/service`)
          .then(({data}) => {
              services.value = data
          })
    }

    return { organization, initOrganization, employees, services, getOrganizationId }
})