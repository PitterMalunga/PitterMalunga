import { useQuasar } from 'quasar'
export default function useNotify () {
  const $q = useQuasar()

  const notifySuccess = (message) => {
    $q.notify({
      type: 'positive',
      message: message || 'Efectuado com Sucesso'
    })
  }

  const notifyError = (message) => {
    $q.notify({
      type: 'negative',
      message: message || 'Erro, tente novamente!'
    })
  }

  return {
    notifySuccess,
    notifyError
  }
}
