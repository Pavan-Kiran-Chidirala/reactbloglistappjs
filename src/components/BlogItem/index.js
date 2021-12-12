// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {listItem} = props
  const {title, description, publishedDate} = listItem
  return (
    <li className="li-item">
      <div className="first-container">
        <h1 className="post-name">{title}</h1>
        <p className="date-given">{publishedDate}</p>
      </div>
      <p className="content-given">{description}</p>
    </li>
  )
}

export default BlogItem
