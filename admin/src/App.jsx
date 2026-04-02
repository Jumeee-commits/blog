import React from 'react';
import './index.css';

const AdminDashboard = () => {
  const posts = [
    { id: 1, title: 'The Future of AI in Web Development', category: 'Technology', status: 'Published', date: '2026-04-02', views: '1.2k' },
    { id: 2, title: 'Top 10 Travel Destinations for 2026', category: 'Travel', status: 'Draft', date: '2026-03-28', views: '850' },
    { id: 3, title: 'Modern Interior Design Trends', category: 'Life', status: 'Published', date: '2026-03-25', views: '2.1k' },
    { id: 4, title: 'Health and Wellness Tips for Office Workers', category: 'Health', status: 'Published', date: '2026-03-22', views: '1.5k' },
    { id: 5, title: 'Spring Fashion Essentials', category: 'Fashion', status: 'Draft', date: '2026-03-18', views: '420' },
  ];

  return (
    <div className="dashboard-layout">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          MY<span>BLOG</span> <span style={{ color: 'var(--primary)', fontSize: '0.75rem', verticalAlign: 'middle', marginLeft: '0.5rem' }}>ADMIN</span>
        </div>
        <nav className="nav-links">
          <a href="#" className="nav-link active">📊 Dashboard</a>
          <a href="#" className="nav-link">📝 All Posts</a>
          <a href="#" className="nav-link">📁 Categories</a>
          <a href="#" className="nav-link">👥 Users</a>
          <a href="#" className="nav-link">⚙️ Settings</a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <header className="page-header">
          <h1 className="page-title">Dashboard Overview</h1>
          <p className="page-subtitle">Welcome back, Admin. Here's what's happening today.</p>
        </header>

        {/* Dynamic Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <div style={{ color: 'var(--text-dim)', fontSize: '0.75rem', marginBottom: '0.5rem' }}>TOTAL POSTS</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>124</div>
            <div style={{ color: '#4ade80', fontSize: '0.75rem', marginTop: '0.5rem' }}>↑ 12% increase</div>
          </div>
          <div className="stat-card">
            <div style={{ color: 'var(--text-dim)', fontSize: '0.75rem', marginBottom: '0.5rem' }}>TOTAL VIEWS</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>45.2k</div>
            <div style={{ color: '#4ade80', fontSize: '0.75rem', marginTop: '0.5rem' }}>↑ 8% increase</div>
          </div>
          <div className="stat-card">
            <div style={{ color: 'var(--text-dim)', fontSize: '0.75rem', marginBottom: '0.5rem' }}>AVG. READ TIME</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>4m 32s</div>
            <div style={{ color: '#facc15', fontSize: '0.75rem', marginTop: '0.5rem' }}>→ No change</div>
          </div>
          <div className="stat-card">
            <div style={{ color: 'var(--text-dim)', fontSize: '0.75rem', marginBottom: '0.5rem' }}>ACTIVE USERS</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>1,284</div>
            <div style={{ color: '#4ade80', fontSize: '0.75rem', marginTop: '0.5rem' }}>↑ 5% increase</div>
          </div>
        </div>

        {/* Global Post Table */}
        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>POST TITLE</th>
                <th>CATEGORY</th>
                <th>STATUS</th>
                <th>DATE</th>
                <th>VIEWS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} style={{ transition: 'var(--transition)' }}>
                  <td style={{ fontWeight: '500' }}>{post.title}</td>
                  <td style={{ color: 'var(--text-dim)' }}>{post.category}</td>
                  <td>
                    <span className={`status-badge ${post.status === 'Published' ? 'status-pub' : 'status-draft'}`}>
                      {post.status}
                    </span>
                  </td>
                  <td style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>{post.date}</td>
                  <td style={{ fontWeight: '600' }}>{post.views}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className="btn-action">✏️</button>
                      <button className="btn-action" style={{ color: '#f87171' }}>🗑️</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
