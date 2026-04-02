import React from 'react';
import PostCard from './PostCard';

const BlogGrid = ({ posts }) => {
  return (
    <section className="blog-grid" style={sectionStyle}>
      <div className="container">
        <h2 style={gridTitleStyle}>Recent Posts</h2>
        <div style={gridStyle}>
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

const sectionStyle = {
  paddingBottom: '5rem',
  backgroundColor: 'var(--bg-light)',
  paddingTop: '3rem',
};

const gridTitleStyle = {
  fontSize: '2rem',
  marginBottom: '2.5rem',
  textAlign: 'center',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '2.5rem',
};

export default BlogGrid;
