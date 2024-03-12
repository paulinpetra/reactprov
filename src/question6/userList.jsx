import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./usersSlice";
import { v4 as uuid } from "uuid";
import { useState } from "react";

export default function UserList() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const unique_id = uuid();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddUser = () => {
    const unique_id = uuid();
    dispatch(addUser({ id: unique_id, name: input }));
    setInput("");
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />

      <button onClick={() => dispatch(addUser(input))}>Add user</button>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
