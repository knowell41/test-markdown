import React from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import './globals.css';

const getBlogProps = async () => {
  const response = await axios.get('http://127.0.0.1:8000/blog/1')
  const blogData = response.data;
  return { blogData }
}

export default async function Home() {
  const { blogData } = await getBlogProps()
  console.log(blogData)
  return (
    <div>
      <ReactMarkdown >
      {blogData.content}
      </ReactMarkdown>
    </div>
  );
};

