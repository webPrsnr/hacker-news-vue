import { ref } from 'vue'

export function useSetCommentsFlag() {
  const loadingCommentsFlag = ref(true)
  const refreshIt = ref<() => void>()

  function loadCommentsFlagHandler(status: boolean) {
    loadingCommentsFlag.value = status
  }

  function refreshHandler(func: (() => void) | undefined) {
    refreshIt.value = func
  }

  function handleRefresh() {
    if (refreshIt.value)
      refreshIt.value()
  }

  return {
    loadingCommentsFlag,
    loadCommentsFlagHandler,
    refreshHandler,
    handleRefresh,
  }
}
