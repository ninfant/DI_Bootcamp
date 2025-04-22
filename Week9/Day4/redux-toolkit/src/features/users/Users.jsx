import { useSelector, useDispatch } from "react-redux";
import { adduser, adduserprepare, getUsers } from "./usersSlice";
import { use, useRef, useEffect } from "react";

const Users = () => {
  const users = useSelector((state) => state.usersReducer.users); // users lo cojo de donde se inicializo asi: const initialState= {users: [], status: "",} que es donde tendre (mi arreglo, o con lo que sea que voy a trabajar)
  const count = useSelector((state) => state.counterReducer.count); // count, lo mismo q arriba
  const dispatch = useDispatch();
  const nameRef = useRef();
  const emailRef = useRef();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <h2>Users {count}</h2>
      <div>
        <input ref={nameRef} placeholder="name" />
        <input ref={emailRef} placeholder="email" />
        <button
          onClick={() =>
            dispatch(
              adduser({
                name: nameRef.current.value,
                email: emailRef.current.value,
              })
            )
          }
        >
          Add User
        </button>
        <button
          onClick={() =>
            dispatch(
              adduserprepare(nameRef.current.value, emailRef.current.value)
            )
          }
        >
          Add User Prepare
        </button>
      </div>
      {users &&
        users.map((item) => {
          return (
            <div key={item.id}>
              {item.name} {item.email}
            </div>
          );
        })}
    </>
  );
};
export default Users;
