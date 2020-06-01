import React from "react";
import s from "./Users.module.css";
import UserIcon from "../../assets/Users.png";


const  Users = (props)=>{
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
  let pages =  []
  for(let i = 1; i <= pagesCount; i++){
    pages.push(i)
  }
 return (
      <div>
        <div>
          {
            pages.map(e=>{
              return(
                <span onClick = {()=>{props.onPageChanged(e)}}className={props.currentPage === e ? s.selectedPage : ''}> { e } </span>
              )
            })
          }
        </div>
        {props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div className={s.photo}>

                  <img
                  src={u.photos.small != null ? u.photos.small : UserIcon}
                  alt="Avatar"
                />
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
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.sity"}</div>
              <div>{"u.location.country"}</div>
            </span>

            <span></span>
          </div>
        ))}
      </div>
    );
  }


export default Users;
