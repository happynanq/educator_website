import React from "react";
import s from "./Users.module.css";
import UserIcon from "../../assets/Users.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios";
import {axiosReqMethods} from '../../api/api'
const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((e) => {
          return (
            <span
              key={e}
              onClick={() => {
                props.onPageChanged(e);
              }}
              className={props.currentPage === e ? s.selectedPage : ""}
            >
              {" "}
              {e}{" "}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div className={s.photo}>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : UserIcon}
                  alt="Avatar"
                />
              </NavLink>
            </div>
            <div>
              {!u.followed ? ( 
                <button disabled ={props.followingInProgress.some(id=>{
                  debugger
                  return(id===u.id)
                  }
                  )}
                  onClick={() => {
                    props.follow(u.id);
                    
                  }}
                >
                  Follow
                </button>
              ) : (
                <button disabled ={props.followingInProgress.some(id=>{
                  return(id===u.id)
                  }
                  )}
                  onClick={() => {
                    debugger
                    props.unfollow(u.id);
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
};

export default Users;
