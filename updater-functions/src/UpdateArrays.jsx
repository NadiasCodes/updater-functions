import React, { useState } from "react";

function UpdateArrays() {
  const [flowers, setFlowers] = useState([]);

  const handleAddFlowers = () => {
    const newFlower = document.getElementById("flowerInput").value;
    document.getElementById("flowerInput").value = ""; //that resets the value every time we press enter to add it
    setFlowers((f) => [...f, newFlower]);
  };

  const handleRemoveFlower = (index) => {
    setFlowers(flowers.filter((_, i) => i !== index));
  };
  return (
    <div>
      <h2>List of Flowers</h2>
      <ul>
        {flowers.map((flower, index) => (
          <li key={index} onClick={() => handleRemoveFlower(index)}>
            {flower}
          </li>
        ))}
      </ul>
      <input type="text" id="flowerInput" placeholder="Enter flower name" />
      <button onClick={handleAddFlowers}>Add Flower</button>
    </div>
  );
}

export default UpdateArrays;

// For the removal, we will be working with the index, cause we need to access the numbers of the array
//  Our <li key={index} onClick={handleRemoveFlower} needs an arguement, so we will convert it to an arrow function
//   const handleRemoveFlower = (index) => setFlowers(flowers.filter((element, i))); Here, we got to write index as i, cause we have it already above and we wanna avoid conflict
// We are going to filter all our elements where the current index, which is presented as i does not equal the index which we receive
// Also the element parameter is given to us but we we do not use it, instead we replace it with a _, which is an indication that the parameter is being ignored
