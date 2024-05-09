import {defineStore} from "pinia";
import {ref} from "vue";
import {useOrganizationStore} from "./organizationStore";
import axios from "axios";
import { useToast } from 'primevue/usetoast';


export const useOrderStore = defineStore('order', () => {
    const servicesTime = ref<null | number>(20)
    const orderDate = ref<null | string>(null)
    const data = useOrganizationStore()
    const toast = useToast();
    const freeTimes = ref(null)

    const setServicesTime = (time) => {
        servicesTime.value = time
    }

    const setOrderDate = (date) => {
        orderDate.value = date
        console.log(date)
        getTimeSlot()
    }

     const getTimeSlot = () => {
        if (orderDate.value !== null) {
            const options = {
                url: `http://127.0.0.1:8000/api/organization/${data.getOrganizationId().value}/employee/1/time-slots`,
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                data: {
                    day: orderDate.value,
                    duration: servicesTime.value
                }
            };
           axios(options)
                .then(response => {
                    freeTimes.value = response.data
                })
                .catch(function (error) {
                    if (error.response.status === 422) {
                        toast.add({ severity: 'warn', summary: 'Xizmat tanlang', detail: 'Xizmatlardan birini tanlang', life: 3000 });
                    }
                });
        }
    }


    return {
        servicesTime,
        orderDate,
        setServicesTime,
        setOrderDate,
        getTimeSlot,
        freeTimes,
    }
})