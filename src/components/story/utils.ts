const utils = {
  getHost(url: string) {
    return new URL(url).host
  },
  formatTime(time: number) {
    return new Date(time).toLocaleTimeString()
  },
  isFilledComments(comments: any[]) {
    return !!comments.length
  },
}

export default utils
