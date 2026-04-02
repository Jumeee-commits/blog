import React from 'react';

const PostCard = ({ post }) => {
  return (
    <article className="post-card" style={cardStyle}>
      <div style={{ ...imageWrapper, backgroundImage: `url(${post.image})` }}>
        <span className={`tag ${post.tagClass}`}>{post.category}</span>
      </div>
      <div style={contentStyle}>
        <h3 style={titleStyle}>{post.title}</h3>
        <p style={excerptStyle}>{post.excerpt}</p>
        <div style={footerStyle}>
          <span>{post.date}</span>
          <div style={actionsStyle}>
            <span>{post.comments} Comments</span>
            <button style={shareButtonStyle}>
              📤
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

const cardStyle = {
  backgroundColor: 'var(--bg-white)',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  transition: 'var(--transition)',
  cursor: 'pointer',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
};

const imageWrapper = {
  height: '240px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '1.5rem',
  display: 'flex',
  alignItems: 'flex-start',
};

const contentStyle = {
  padding: '1.5rem',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
};

const titleStyle = {
  fontSize: '1.25rem',
  marginBottom: '1rem',
  lineHeight: '1.4',
  color: 'var(--primary-color)',
};

const excerptStyle = {
  fontSize: '0.9rem',
  color: 'var(--secondary-color)',
  marginBottom: '1.5rem',
  flex: 1,
};

const footerStyle = {
  paddingTop: '1rem',
  borderTop: '1px solid var(--border-color)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '0.8rem',
  color: 'var(--secondary-color)',
  fontWeight: '600',
};

const actionsStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
};

const shareButtonStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
};

export default PostCard;
