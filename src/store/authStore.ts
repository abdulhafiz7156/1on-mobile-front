import {defineStore} from "pinia";
import axios from "axios";
import {useRouter} from "vue-router";
import {ref} from "vue";
import {googleSdkLoaded} from "vue3-google-login";

export const useAuthStore = defineStore('auth', () => {
  const user = ref(JSON.parse(localStorage.getItem('user') || null))
  const router = useRouter()

  const getGCode = () => {
    googleSdkLoaded(google => {
      google.accounts.oauth2
        .initCodeClient({
          client_id: '816973990634-rbr4b66316n53kltqc0t5cd10t7a9osj.apps.googleusercontent.com',
          scope: 'email profile openid',
          redirect_uri: 'http://localhost:5173',
          callback: async response => {
            if (response.code) await getUserData(response.code)
          },
        })
        .requestCode()
    })
  }

  const getUserData = async (code) => {
    await axios.post(`http://localhost/public/api/auth/google`, {
      code,
      is_client: true,
    }).then(({data}) => {
      localStorage.setItem('token', data.token)
      user.value = data.user
      localStorage.setItem('user', JSON.stringify(data.user))
      router.push('/')
    })
  }

  const addPhone = (phone: string) => {
    user.value = {
      ...user.value,
      phone: phone,
    }
    localStorage.setItem('user', phone)
  }

  const logout = () => {
    localStorage.removeItem('token')
    user.value = null
  }

  return { user, getGCode, logout, addPhone }
})