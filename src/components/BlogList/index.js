import './index.css'

const BlogList = props => {
  const {first} = props
  const {title, description, publishedDate} = first
  return (
    <li className="lista">
      <div className="top">
        <h1 className="head">{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
    </li>
  )
}

export default BlogList
