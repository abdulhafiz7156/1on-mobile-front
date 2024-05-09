import {defineStore} from "pinia";
import {ref} from "vue";

export const useOrderStore = defineStore('order', () => {
    const servicesTime = ref<null | number>(null)
    const orderDate = ref<null | number>(null)

    const setServicesTime = (time) => {
        servicesTime.value = time
        console.log(time)
    }

    const setOrderDate = (date) => {
        orderDate.value = date
    }

    return {
        servicesTime,
        orderDate,
        setServicesTime,
        setOrderDate,
    }
})