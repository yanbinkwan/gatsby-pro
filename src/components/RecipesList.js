import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {
        recipes.map(recipe => {
          const { id, title, image, prepTime, cookieTime } = recipe
          const pathToImage = getImage(image)
          return (
            <Link key={id} to={``} className="recipe">
              <GatsbyImage
                image={pathToImage}
                className="recipe-img"
                alt={title}
              />
              <h5>{title}</h5>
              <p>
                Prep : {prepTime}min | Cook : {cookieTime}min
              </p>
            </Link>
          )
        })
      }
    </div>
  )
}

export default RecipesList
