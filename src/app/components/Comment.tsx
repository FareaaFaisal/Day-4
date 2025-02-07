"use client"
import React, { useState, useEffect } from 'react';

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);
  const [name, setName] = useState('');  // New state to hold the user's name

  // Load comments from localStorage on initial render
  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Function to add a new comment
  const addComments = () => {
    if (comment.trim() !== '') {
      const updatedComments = [...comments, `${name ? name : 'Anonymous'}: ${comment}`]; // Include name with comment
      setComments(updatedComments);
      setComment('');
      localStorage.setItem('comments', JSON.stringify(updatedComments)); // Save to localStorage
    }
  };

  return (
    <div className='mt-20'>
      <h1 className="lg:text-4xl text-2xl font-bold mt-4 text-gray-500">Post a Comment</h1>

      {/* Name input field */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="border border-[#FF9F0D] mt-3 p-2 lg:w-[79%] w-[95%] rounded-lg"
      />
      <br />
      
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment"
        className="border border-[#FF9F0D] mt-3 p-2 lg:w-[79%] w-[95%] h-[100px] lg:h-[200px] rounded-lg"
      />
      <br />
      <button
        className="bg-[#FF9F0D] p-2  text-white w-36 mt-3 mb-8"
        onClick={addComments}
      >
        Add Comment
      </button>

      {/* Display user's name above the comment */}
      {name && <p className="text-lg font-semibold mt-2">Your name: {name}</p>}

      <div className="mt-2">
        <h2>All Comments:</h2>
        {comments.length === 0 ? (
          <p>No comments yet. Add your comment!</p>
        ) : (
          <ul className="space-y-4">
            {comments.map((data, index) => (
              <li
                key={index}
                className="bg-gradient-to-r lg:w-[79%] w-[95%] from-[#FF9F0D] to-[#FFDA83] p-4 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                <p className="font-medium text-gray-800">{data}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
