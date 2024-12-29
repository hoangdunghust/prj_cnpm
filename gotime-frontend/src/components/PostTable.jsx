import React, { useState } from 'react';

const PostTable = () => {
  const [posts, setPosts] = useState([
    { id: 1, userId: 1, status: 'Active', title: 'Job Posting', recipientId: 2 },
    { id: 2, userId: 2, status: 'Pending', title: 'Help Needed', recipientId: 1 },
  ]);

  const [newPost, setNewPost] = useState({
    userId: '',
    status: '',
    title: '',
    recipientId: '',
  });

  // Handle input changes for new post
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add a new post
  const handleAddPost = () => {
    const id = posts.length + 1; // Automatically generate id for new post
    setPosts([...posts, { ...newPost, id }]);
    setNewPost({
      userId: '',
      status: '',
      title: '',
      recipientId: '',
    });
  };

  // Edit post data
  const handleEditPost = (id) => {
    const postToEdit = posts.find((post) => post.id === id);
    setNewPost(postToEdit); // Set form values to the post's current data
  };

  // Delete post
  const handleDeletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  return (
    <div>
      <h2>Post Table</h2>
      <form>
        <input type="text" name="userId" value={newPost.userId} onChange={handleChange} placeholder="User ID" />
        <input type="text" name="status" value={newPost.status} onChange={handleChange} placeholder="Status" />
        <input type="text" name="title" value={newPost.title} onChange={handleChange} placeholder="Title" />
        <input type="text" name="recipientId" value={newPost.recipientId} onChange={handleChange} placeholder="Recipient ID" />
        <button type="button" onClick={handleAddPost}>Add Post</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Status</th>
            <th>Title</th>
            <th>Recipient ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.userId}</td>
              <td>{post.status}</td>
              <td>{post.title}</td>
              <td>{post.recipientId}</td>
              <td>
                <button onClick={() => handleEditPost(post.id)}>Edit</button>
                <button onClick={() => handleDeletePost(post.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostTable;
