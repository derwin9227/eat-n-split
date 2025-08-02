import initialFriends from "./App";
import { useState } from "react";

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriendForm((show) => !show);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        {showAddFriendForm && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriendForm ? "close" : "Add friend"}
        </Button>
      </div>
      <FromSplitBill />
    </div>
  );
}

function FriendList() {
  const friends = initialFriends;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.nameq} />
      {friend.name}

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button>Select</Button>
    </li>
  );
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>🧑‍🤝‍🧑Frien name</label>
      <input type="text" />

      <label>🎇Image URL</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}

function FromSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a billl with X</h2>

      <label>💰 Bill value</label>
      <input type="text" />

      <label>💵 Your expense</label>
      <input type="text" />

      <label>🧑‍🤝‍🧑 X's expense</label>
      <input type="text" disabled />

      <label>Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
