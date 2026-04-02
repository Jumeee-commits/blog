import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import BlogGrid from './components/BlogGrid';
import Footer from './components/Footer';

const App = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of Technology in Everyday Life',
      category: 'Technology',
      tagClass: 'tech',
      excerpt: 'Discover how emerging technologies are reshaping our daily routines and simplifying complex tasks.',
      image: '/images/blog1.png',
      date: 'April 2, 2026',
      comments: 12
    },
    {
      id: 2,
      title: 'Spring Fashion Trends: What to Wear This Season',
      category: 'Fashion',
      tagClass: 'fashion',
      excerpt: 'From vibrant colors to minimalist designs, explore the top fashion trends for this spring.',
      image: '/images/blog2.png',
      date: 'April 1, 2026',
      comments: 8
    },
    {
      id: 3,
      title: 'Top 10 Travel Destinations for Your Summer Vacation',
      category: 'Travel',
      tagClass: 'travel',
      excerpt: 'Plan your next adventure with our curated list of the most beautiful and exciting travel spots.',
      image: '/images/blog3.png',
      date: 'March 30, 2026',
      comments: 15
    },
    {
      id: 4,
      title: 'How to Build a Productive Remote Workspace',
      category: 'Life',
      tagClass: 'tech', // Reusing tech color for life or could add a life tag
      excerpt: 'Essential tips and tricks for creating an efficient and inspiring workspace from home.',
      image: '/images/life.png', // Reusing life hero image
      date: 'March 28, 2026',
      comments: 5
    },
    {
      id: 5,
      title: 'The Art of Minimalist Living',
      category: 'Fun',
      tagClass: 'fun',
      excerpt: 'Learn how simplifying your life can lead to more happiness and sustained productivity.',
      image: '/images/fashion.png', // Reusing fashion hero image
      date: 'March 25, 2026',
      comments: 20
    },
    {
      id: 6,
      title: 'A Guide to Capturing Stunning Travel Photos',
      category: 'Travel',
      tagClass: 'travel',
      excerpt: 'Master the basics of photography and take breathtaking photos on your next trip.',
      image: '/images/travel.png', // Reusing travel hero image
      date: 'March 22, 2026',
      comments: 3
    }
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <HeroSlider />
        <BlogGrid posts={posts} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
