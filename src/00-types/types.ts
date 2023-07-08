type post = {
  _id?: string,
  postId?: string,
  title: string,
  content: string,
  timeStamp: string,
  comments?: coment[]
}

type coment = {
  comentId: string,
  timeStamp: string,
  content: string
}