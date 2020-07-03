import React from 'react'
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component{
  state={
    editMode:false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({editMode:true})
  }

  deactivateEditMode = () => {
    this.setState({editMode:false})
    this.props.updateStatus(this.state.status)
  }
  onStatusChange=(e)=>{
    this.setState({status:e.currentTarget.value})
  }
  componentDidUpdate (prevProps, prevState){
    if( prevProps.status !== this.props.status){
      this.setState({
        status:this.props.status
      })
    }
  }

  render(){

    return (
      <>
        <div className={s.wrapper__block +' '+ s.wrapper__block_2}>
          <div className={s.wrapper__content + " " + s.wrapper__content_1}>
            <img src={this.props.profile.photos.large} alt="AVATAR"/>
            { !this.state.editMode?
              <div>
                <span onDoubleClick={()=>{ this.activateEditMode() }}>{this.props.status || "no status"}</span>
              </div>
              :
              <div>
                <input autoFocus={true} value={this.state.status}
                 onBlur ={this.deactivateEditMode} onChange={this.onStatusChange}/>
              </div>
              
            }
            
            
          </div>  
          <div className={s.wrapper__content + " " + s.wrapper__content_2} >
            <div className={s.fullName}>{this.props.profile.fullName}</div>
            <div className={s.aboutMe}>
              <div>About Me:</div>
              <div>{this.props.profile.aboutMe}</div>
            </div>
          </div>
          <div className={s.wrapper__content + " " + s.wrapper__content_3}>
          <div>
            <div>Job:</div>
            <div> search work: {this.props.profile.lookingForAJob ? "YES" : "NO"} </div>
            <div> search work status: {this.props.profile.lookingForAJobDescription} </div>
          </div>
          </div>

        </div>
      </>
        
    );
  }
}

export default ProfileStatus



/* 
<div className={s.wrapper__block +' '+ s.wrapper__block_2}>
        <div className={s.wrapper__content + " " + s.wrapper__content_1}>
          <img src={props.profile.photos.large} alt="AVATAR"/>
        </div>  
        <div className={s.wrapper__content + " " + s.wrapper__content_2} >
          <div className={s.fullName}>{props.profile.fullName}</div>
          <div className={s.aboutMe}>
            <div>About Me:</div>
            <div>{props.profile.aboutMe}</div>
          </div>
        </div>
        <div className={s.wrapper__content + " " + s.wrapper__content_3}>
        <div>
          <div>Job:</div>
          <div> search work: {props.profile.lookingForAJob ? "YES" : "NO"} </div>
          <div> search work status: {props.profile.lookingForAJobDescription} </div>
        </div>
        </div>

      </div>

*/