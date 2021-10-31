import React from 'react'

export default function Questions(props) {
  return (
    <div>

      <div className="container">
        <div className="row">
          <div className="col">

          </div>
          <div className="col">

            <form onSubmit={props.submit}>

              <div className="mb-3">
                <h5>Please fill up the form below:</h5>
                <label>College name?</label>
                <input name="cName" type="text" className="form-control" />
              </div>

              <div className="mb-3">
                <label>Current address?</label>
                <input name="cAddress" type="text" className="form-control" />
              </div>


              <button type="submit" className="btn btn-primary" >Submit</button>

            </form>
          </div>
          <div className="col">

          </div>
        </div>
      </div>
      <hr />
    </div>

  )
}
