const utils = {
  getHost(url: string) {
    return new URL(url).host
  },
  calculateComments(comments: number[] | undefined) {
    if (!comments)
      return `0 comments`
    if (comments.length === 1)
      return `1 comment`
    return `${comments.length} comments`
  },
  formatTime(time: number) {
    return new Date(time).toLocaleTimeString()
  },
  isFilledComments(comments: any[]) {
    return !!comments.length
  },
}

export default utils
