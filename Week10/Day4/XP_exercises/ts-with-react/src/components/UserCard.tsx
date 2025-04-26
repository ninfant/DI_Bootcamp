interface userCard {
  name?: string;
  age?: number;
  role?: string;
}

const UserCard = ({
  name = "Anonymous",
  age = 0,
  role = "Visitor",
}: userCard) => {
  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </>
  );
};

export default UserCard;

/**Create a new UserCard.tsx component
Define interface with optional name, age, and role props
Implement default values for optional props
Test component with various prop combinations */