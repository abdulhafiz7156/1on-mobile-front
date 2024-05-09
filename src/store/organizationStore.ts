import {defineStore} from "pinia";
import {ref} from "vue";
import {EmployeeI, OrganizationI, ServiceI} from "../types/interfaces.ts";
import axios from "axios";

export const useOrganizationStore = defineStore('organization', () => {
  const organization = ref<null | OrganizationI>(null)
  const employees = ref<null | EmployeeI>(null)
  const services = ref<null | ServiceI>(null)

  const initOrganization = async () => {
    await axios.get(`${import.meta.env.VITE_APP_URL}/init-organization`)
      .then(({data}) => {
        organization.value = data
      })
    await axios.get(`${import.meta.env.VITE_APP_URL}/organization/${organization.value.id}/employee`)
      .then(({data}) => {
        employees.value = data
      })
    await axios.get(`${import.meta.env.VITE_APP_URL}/organization/${organization.value.id}/service`)
      .then(({data}) => {
        services.value = data
      })
  }

    return { organization, initOrganization, employees, services }
})