import {defineStore} from "pinia";
import {ref} from "vue";
import {useOrganizationStore} from "./organizationStore";
import axios from "axios";
import { useToast } from 'primevue/usetoast';
import {apiUrl} from "@/main.ts";


export const useOrderStore = defineStore('order', () => {
  const servicesTime = ref<null | number>(20)
  const organizationStore = useOrganizationStore()
  const toast = useToast();
  const freeTimes = ref(null)

  const setServicesTime = (time: number) => {
    servicesTime.value = time
  }

  const getTimeSlot = (date: string) => {
     axios.post(`${apiUrl}/organization/${organizationStore.organization.id}/employee/1/time-slots`, {
       day: date,
       duration: servicesTime.value
     })
       .then(res => {
         freeTimes.value = res.data
       })
       .catch(function (error) {
         if (error.response.status === 422) {
           toast.add({ severity: 'warn', summary: 'Xizmat tanlang', detail: 'Xizmatlardan birini tanlang', life: 3000 });
         }
       });
  }


  return {
    servicesTime,
    setServicesTime,
    getTimeSlot,
    freeTimes,
  }
})
