import React from "react"

import './BlogItem.scss';

const BlogItem = ({ data }) => (
  <div class="blog-item">
    <div class="blog-block">
      <a class="blog-image-link-block w-inline-block" target="_blank" target="_blank" rel="noopener noreferrer"
         href={data.path} style={{
          backgroundImage: `url('${data.cover.childImageSharp.fixed.src}')`
        }}>
        <div class="blog-overlay-block">
          <div class="blog-block-date">{data.date}</div>
        </div>
      </a>
      <div class="blog-content-block">
        <div class="blog-title">
          <a class="blog-block-title" target="_blank" target="_blank" rel="noopener noreferrer"
             href={data.path}>
            {data.title}
          </a>
        </div>
        <a class="learn-more-link-block w-inline-block" target="_blank" target="_blank" rel="noopener noreferrer"
           href={data.path}>
          <div class="learn-more-title">Leer más</div>
        </a>
      </div>
    </div>
  </div>
)


export default BlogItem;
