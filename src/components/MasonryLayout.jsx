import React from 'react';
import Masonry from 'react-masonry-css';
import Post from './Post';
import "./MasonryLayout.css";

const breakpointColumnsObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

const MasonryLayout = ({ posts }) => (
  
  <Masonry className="masonryGrid" columnClassName="masonryGridColumn" breakpointCols={breakpointColumnsObj}>
    {posts.map((post) => <Post key={post.id} post={post} />)}
  </Masonry>
);

export default MasonryLayout;