import React from "react";

const UserFavoriteAnimals = (props) => {
  return (
    <>
      <h4>Favorite Animals</h4>
      <ul>
        {props.fAnimals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </>
  );
};
export default UserFavoriteAnimals;

//props es un objeto en este ejercicio no un arreglo
// destructruring the props parano repetirlo a cada rato:

// const UserFavoriteAnimals = (fAnimals) => {
//   return (
//     <>
//       <h4>Favorite Animals</h4>
//       <ul>
//         {fAnimals.map((animal, index) => (
//           <li key={index}>{animal}</li>
//         ))}
//       </ul>
//     </>
//   );
// };
