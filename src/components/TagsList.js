import { Link } from 'gatsby';
import React from 'react'
import setTags from '../utils/setTags'

const TagsList = ({ recipes }) => {

  const newTags = setTags(recipes);
  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {
          newTags.map((tag, index) => {

            const [text, value] = tag;
            return (
              <Link to={`/tags/`} key={index}>
                {text}({value})
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default TagsList
