import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://www.meme-arsenal.com/memes/52b065ac2be8a907cfaecb71205fedd4.jpg",
        followed: true,
        fullName: "Kirill A.",
        status: "Focusing",
        location: { sity: "Krasnoyarsk", country: "Russia" },
      },
      {
        id: 2,
        photoUrl:
          "https://www.meme-arsenal.com/memes/52b065ac2be8a907cfaecb71205fedd4.jpg",
        followed: true,
        fullName: "Andrew L.",
        status: "Start Business",
        location: { sity: "Moscow", country: "Russia" },
      },
      {
        id: 3,
        photoUrl:
          "https://www.meme-arsenal.com/memes/52b065ac2be8a907cfaecb71205fedd4.jpg",
        followed: false,
        fullName: "Ali X.",
        status: "I'm a big-data programmer",
        location: { sity: "Nur-Sultan", country: "Kazakhstan" },
      },
      {
        id: 4,
        photoUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNVWyPoLhXQW33UQ3SK4tBE4mdm6rS_1Op_U177D2sUcHiQRbb&usqp=CAU",
        location: { sity: "New-York", country: "USA" },
      },
    ]);
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div className={s.photo}>
              <img src={u.photoUrl} alt="Avatar" />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Unfollow
                </button>
              )}
            </div>
          </span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.sity}</div>
            <div>{u.location.country}</div>
          </span>

          <span></span>
        </div>
      ))}
    </div>
  );
};
export default Users;
