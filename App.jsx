import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    blogCategory: "",
    description: "",
    paragraph: "",
    tags: "",
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
    images: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        tags: formData.tags.split(","),
        metaKeywords: formData.metaKeywords.split(","),
        images: formData.images.split(","),
      };
      const res = await axios.post("http://localhost:5000/api/blogs/create", payload);
      alert("Blog created ✅");
      console.log(res.data);
    } catch (err) {
      console.error("Blog create failed", err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Post a Blog 📝</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} required /><br />
        <input name="slug" placeholder="Slug
