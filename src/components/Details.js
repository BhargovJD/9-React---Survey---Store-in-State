import React from 'react'

export default function Details(props) {
    return (
        <div>

                <div className="container">
  <div className="row">
    <div className="col">

    </div>
    <div className="col">

    <form onSubmit={props.submit}>

    <div className="mb-3">
    <label>Name</label>
    <input required name="uName" type="text" className="form-control"/>
  </div>

  <div className="mb-3">
    <label>Email address</label>
    <input required name="uMail" type="email" className="form-control"/>
  </div>


  <button type="submit" className="btn btn-primary">Submit</button>

</form>
    </div>
    <div className="col">

    </div>
  </div>
</div>
<hr/>
            </div>




    )
}
