import React from "react"

import './BlogItem.scss';

const BlogItem = ({ data }) => (
  <div className="blog-item">
    <div className="blog-block">
      <a className="blog-image-link-block w-inline-block" target="_blank" rel="noopener noreferrer"
         href={data.path} style={{
          backgroundImage: `url('${data.cover.childImageSharp.fixed.src}')`
        }}>
        <div className="blog-overlay-block">
          <div className="blog-block-date">{data.date}</div>
        </div>
      </a>
      <div className="blog-content-block">
        <div className="blog-title">
          <a className="blog-block-title" target="_blank" rel="noopener noreferrer"
             href={data.path}>
            {data.title}
          </a>
        </div>
        <a className="learn-more-link-block w-inline-block" target="_blank" rel="noopener noreferrer"
           href={data.path}>
          <div className="learn-more-title">Leer más</div>
        </a>
      </div>
    </div>
  </div>
)


export default BlogItem;
