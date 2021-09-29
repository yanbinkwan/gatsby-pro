import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="page-footer">
        &copy; {new Date().getFullYear()} <span>Build by <a href="https://gatsbyjs.com">Gatsby</a></span>
      </div>
    </div>
  )
}
