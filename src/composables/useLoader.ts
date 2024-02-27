import { computed, ref } from 'vue'

const loaderFlag = ref(false)
const isLoading = computed(() => loaderFlag.value)

export function useLoader() {
  const startLoading = () => {
    loaderFlag.value = true
  }
  const stopLoading = () => {
    loaderFlag.value = false
  }

  return { startLoading, stopLoading, isLoading }
}
