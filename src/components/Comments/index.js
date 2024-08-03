import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import {
  CommentsContainer,
  CommentsTitle,
  CommentsList,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
} from './styledComponents'

import CommentItem from '../CommentItem'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [commentsList, setCommentsList] = useState([])

  const onChangeCommentText = event => setCommentText(event.target.value)
  const onChangeName = event => setName(event.target.value)

  const onAddComment = event => {
    event.preventDefault()
    const newComment = {
      id: uuidv4,
      name,
      commentText,
    }
    setCommentsList(prevList => [...prevList, newComment])
    setName('')
    setCommentText('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={onChangeCommentText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentsList.map(each => (
          <CommentItem key={each.id} commentDetails={each} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
