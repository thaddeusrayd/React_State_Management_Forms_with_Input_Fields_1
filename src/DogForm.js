import React, { useState } from "react";

function DogForm() {
  const handleSubmit = () => console.log("yo yoooo");

  return (
    <form>
      <label htmlFor="name">
        Name:
        <input id="name" type="text" name="name" />
      </label>
      <label htmlFor="breed">
        Breed:
        <input id="breed" type="text" name="breed" />
      </label>
      <label htmlFor="age">
        Age:
        <input id="age" type="text" name="age" />
      </label>
    </form>
  );
}

export default DogForm;
