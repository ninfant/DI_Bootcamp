import React, { useState } from "react";
import { useAddCategory, useCategories } from "./state/hooks";

const CategoryManager = () => {
  const [newCategoryName, setNewCategoryName] = useState("");
  const categories = useCategories();
  const addCategory = useAddCategory();

  const handleAddCategory = () => {
    if (!newCategoryName.trim()) return;

    const alreadyExists = categories.some(
      (cat) => cat.name.toLowerCase() === newCategoryName.toLowerCase()
    );

    if (alreadyExists) return alert("Category already exists");

    addCategory(newCategoryName, newCategoryName);
    setNewCategoryName("");
  };

  return (
    <>
      <div style={{ marginTop: "2rem" }}>
        <h3>Manage Categories</h3>
        <input
          type="text"
          placeholder="New category"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
        <button onClick={handleAddCategory}>Add Category</button>
      </div>
      <div>
        <ul>
          {categories.map((cat) => (
            <li key={cat.id}>{cat.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoryManager;
