import { computed, ref } from 'vue'

export function useLoader() {
  const loaderFlag = ref(false)
  const isLoading = computed(() => loaderFlag.value)

  const startLoading = () => {
    loaderFlag.value = true
  }
  const stopLoading = () => {
    loaderFlag.value = false
  }

  return { startLoading, stopLoading, isLoading }
}
