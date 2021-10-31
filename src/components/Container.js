import React, { Component } from 'react'
import Details from './Details'
import Questions from './Questions'




export default class Container extends Component {

    constructor(props) {
        super(props)

        this.state = {

            name: null,
            email: null,
            isSubmitted: false,

            questions: {
                q1: null,
                q2: null,
            }

        }
    }

    detailsSubmitHandler = (e) => {
        e.preventDefault();
        // alert("Hello");

        const name = e.target.uName.value;
        const email = e.target.uMail.value;

        this.setState({ name, email }, () => {
            console.log(this.state)
        });

        // Call back to see updated state
        // this.setState({ name, email }, () => {
        //     console.log(this.state);
        // });


    }


    questionsSubmitHandler = (e) => {
        e.preventDefault();

        const questions = {};

        questions.q1 = e.target.cName.value;
        questions.q2 = e.target.cAddress.value;
        this.setState({ questions },()=>{
            console.log(this.state);
        });


    }



    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">

                        </div>
                        <div className="col">
                            <h1>Tech Survey</h1>
                        </div>
                        <div className="col">

                        </div>
                    </div>
                </div>
                <hr />
                {
                    this.state.name === null && this.state.email === null ? <Details submit={this.detailsSubmitHandler} /> : <Questions submit={this.questionsSubmitHandler} />
                }




            </div>
        )
    }
}
