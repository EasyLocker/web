import axios from 'axios'
import {useAuthStore} from '@/stores/auth'

// ---------------- Use localhost setting ----------------
// const useApiLocalhostUrl = true
//
// const isLocalhost = location.hostname === 'localhost'
// const isDev = location.hostname.startsWith('test.')
//
// const baseURL = (!isLocalhost ? isDev
//   ? 'https://test.api.easylocker.com' : 'https://api.easylocker.com'
//   : useApiLocalhostUrl
//     ? 'http://localhost:8000'
//     : 'https://test.api.easylocker.com'
// ) + '/api'

const baseURL = 'http://localhost:8000/api/v1'

const axiosInstance = axios.create({
  baseURL
})

function updateHeaders (token: string) {
  axiosInstance.defaults.headers = token ? {
    // @ts-ignore
    Authorization: `Bearer ${token}`
  } : {};
}

function showError (text: string, callback?: () => void) {
  alert(text)
  if (callback) callback()
}

let errorOpen = false

axiosInstance.interceptors.response.use(
  value => value,
  error => {
    const auth = useAuthStore();
    if (!error.response) {
      if (!errorOpen) {
        errorOpen = true
        showError('Nessuna connessione al server!', () => { errorOpen = false })
      }
    } else if (error.response.status === 401 && auth.isLogged) {
      if (!errorOpen) {
        errorOpen = true
        showError("Sessione scaduta! Per favore, rieffettua l'accesso.", () => { errorOpen = false })
        auth.logout()
      }
    } else if (error.response.status === 403) {
      if (!errorOpen) {
        errorOpen = true
        showError('Non hai i permessi per eseguire questa azione!', () => {
          errorOpen = false
        })
      }
    } else {
      console.log(error.response)
      showError(error.response.data.message || 'C\'è stato un errore inaspettato, ci scusiamo per l\'inconveniente!')
    }

    return Promise.reject(error)
  }
)

export default axiosInstance
export { updateHeaders }
