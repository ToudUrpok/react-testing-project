import React from "react";

const User = ({user, onDelete}) => {
    return (
        <div>
            <h3>{user.name}</h3>
            <button id="delete-user" onClick={() => onDelete(user.id)}>delete</button>
        </div>
    );
}

export default User;