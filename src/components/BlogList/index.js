// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blog-list">
      {blogsList.map(eachValue => (
        <BlogItem key={eachValue.id} listItem={eachValue} />
      ))}
    </ul>
  )
}

export default BlogList
