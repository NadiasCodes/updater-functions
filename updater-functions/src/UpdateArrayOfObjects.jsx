import React, { useState } from "react";

const UpdateArrayOfObjects = () => {
  const [clothes, setClothes] = useState([]);
  const [clothesYear, setClothesYear] = useState(new Date().getFullYear());
  const [clothesBrand, setClothesBrand] = useState("");
  const [clothesType, setClothesType] = useState("");

  const handleAddClothes = () => {
    const newClothes = { year: clothesYear, brand: clothesBrand, type: clothesType };
    setClothes((c) => [...c, newClothes]);

    setClothesYear(new Date().getFullYear());
    setClothesBrand("");
    setClothesType("");
  };

  const handleRemoveClothes = (index) => {
    setClothes((c) => c.filter((_, i) => i !== index));
  };

  const handleYearClothes = (e) => {
    setClothesYear(e.target.value);
  };
  const handleBrandClothes = (e) => {
    setClothesBrand(e.target.value);
  };

  const handleTypeClothes = (e) => {
    setClothesType(e.target.value);
  };

  return (
    <div>
      <h2>List of Clothes Object</h2>
      <ul>
        {clothes.map((clothe, index) => (
          <li key={index} onClick={() => handleRemoveClothes(index)}>
            {clothe.year} {clothe.brand} {clothe.type}
          </li>
        ))}
      </ul>
      <input type="number" value={clothesYear} onChange={handleYearClothes} /> <br />
      <input type="text" value={clothesBrand} onChange={handleBrandClothes} placeholder="Enter the brand, e.g: Nike" /> <br />
      <input type="text" value={clothesType} onChange={handleTypeClothes} placeholder="Enter the type, e.g Jeans" /> <br />
      <button onClick={handleAddClothes}> Add Clothes</button>
    </div>
  );
};

export default UpdateArrayOfObjects;

// When i click the button, i wanna add all these 3 information at once.
// On my onClick function i will make a new constant where i am gonna store my objects and add an updater function
//  We wanna reset the values every time we enter them, so we are gonna use the set functions in our onClick function
