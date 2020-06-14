import React from "react"

const Card = (props) => {
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src="https://images.ru.prom.st/137655381_myagkie-igrushki-.jpg" alt="title" />
            <span className="card-title">Card Title</span> 
          </div>
          <div className="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
          <div className="card-action">
            <a href="/blog/post">Читать полностью</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
