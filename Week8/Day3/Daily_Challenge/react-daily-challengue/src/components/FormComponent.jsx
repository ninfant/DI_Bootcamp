import React from "react";

function FormComponent({ data, handleChange }) {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#2f4f4f",
        color: "white",
        fontFamily: "Arial",
        width: "800px",
      }}
    >
      <form>
        <h2>Form</h2>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={data.firstName}
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={data.lastName}
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          name="age"
          placeholder="Age"
          value={data.age}
          onChange={handleChange}
        />
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={data.gender === "male"}
            onChange={handleChange}
          />{" "}
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={data.gender === "female"}
            onChange={handleChange}
          />{" "}
          Female
        </label>

        <br />

        <select
          name="destination"
          value={data.destination}
          onChange={handleChange}
        >
          <option value="">Please choose a destination</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
          <option value="Germany">Germany</option>
        </select>

        <br />
        <br />

        <label>
          <input
            type="checkbox"
            name="nutFree"
            checked={data.nutFree}
            onChange={handleChange}
          />
          Nut free
        </label>

        <label>
          <input
            type="checkbox"
            name="lactoseFree"
            checked={data.lactoseFree}
            onChange={handleChange}
          />
          Lactose free
        </label>

        <label>
          <input
            type="checkbox"
            name="vegan"
            checked={data.vegan}
            onChange={handleChange}
          />
          Vegan
        </label>
      </form>

      <hr />

      <h2>Entered information:</h2>
      <p>
        Your name: {data.firstName} {data.lastName}
      </p>
      <p>Your age: {data.age}</p>
      <p>Your gender: {data.gender}</p>
      <p>Your destination: {data.destination}</p>
      <p>Your dietary restrictions:</p>
      <p>**Nuts free: {data.nutFree ? "Yes" : "No"}</p>
      <p>**Lactose free: {data.lactoseFree ? "Yes" : "No"}</p>
      <p>**Vegan meal: {data.vegan ? "Yes" : "No"}</p>
    </div>
  );
}

export default FormComponent;
