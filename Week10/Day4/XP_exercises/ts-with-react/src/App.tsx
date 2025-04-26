import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import UserCard from "./components/UserCard";
import UserList from "./components/UserList";
const App = () => {
  return (
    <div>
      <Greeting name="Alice" messageCount={5} />
      <Greeting name="Bob" messageCount={1} />
      <Counter />
      <h2>All props</h2>
      <UserCard name="Alice" age={30} role="Admin" />
      <h2>Some props</h2>
      <UserCard name="Bob" />
      <UserCard age={25} />
      <UserCard role="Guest" />
      <h2>No props</h2> {/* {usa los por defecto declarados en UserCard} */}
      <UserCard />
      <UserList />
    </div>
  );
};

export default App;
