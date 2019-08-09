import React, { Component } from 'react';
import Levels from './Levels.js'
import './App.scss';
import { ProgressBar, Card, Button, Form, Alert, Badge, Image, Col } from 'react-bootstrap';
import Switch from "react-switch";
import axios from "axios";
import setupNotifications from './setupNotifications.js';
import TimeAgo from 'react-timeago';
import { Link, Redirect } from 'react-router-dom'

class User extends Component {
  state = {
    checked: false,
    id: "",
    name: "",
    phone_number: "",
    alerts: false,
    current_user_id: 0,
    userPet: [],
    errors: [],
    redirect: false
  }

  componentDidMount() {
    let current_user_id
     if (!this.props.current_user) {
      current_user_id = 0
     }
     else {
      current_user_id = this.props.current_user.id
     }
     const userPet = this.props.pets.filter(pet => pet.user_id === this.props.user.id)
    this.setState({
      checked: this.props.user.alerts,
      id: this.props.user.id,
      name: this.props.user.name,
      email: this.props.user.email,
      phone_number: this.props.user.phone_number,
      alerts: this.props.user.alerts,
      current_user_id: current_user_id,
      userPet: userPet,
      points: this.props.user.points,
      redirect: false
    })

  }

  handleSwitchChange = (checked) => {
    this.setState({ checked });
    this.setState({ alerts: checked },
      ()=> {
        if (this.state.alerts === true) {
          setupNotifications();
      } else {
        axios.post('http://localhost:3001/api/unsubscribe', {id: this.props.user.id});
        navigator.serviceWorker.ready
          .then((serviceWorkerRegistration) => {
            serviceWorkerRegistration.pushManager.getSubscription()
              .then((subscription) => {
                subscription.unsubscribe()
                  .then(function() {
                    console.log("Successfully unsubscribed!.");
                  })
                  .catch((e) => {
                    console.log('Error thrown while unsubscribing from push messaging', e);
                  });
              });
          });
        }
      })
    }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
        .put(`http://localhost:3001/api/users/${this.props.user.id}`,
        {
          update: 2,
          id: this.props.user.id,
          name: this.state.name,
          phone_number: this.state.phone_number,
          alerts: this.state.alerts

        })
        .then(response => {
          console.log(response);
          this.setState({
            name: response.data.name,
            phone_number: response.data.phone_number,
            alerts: response.data.alerts
          });
          this.props.updateNavState(response.data.name)
        })
        .catch(err => {
          console.log('report user error: ', err.response.data);
          this.setState({
          errors: err.response.data
        })
        });
  };

   handlePetSubmit = (id) => {
       this.setState({
        redirect: true,
        pet_id: id
       })
      }




  render() {

    if (this.state.redirect) {
       return <Redirect to={`/pets/${this.state.pet_id}`}/>;
     }
    const { errors } = this.state;
    const user = this.props.user

    return(
<React.Fragment>
{errors.map(error => (
          <Alert variant="danger" key={error}>Error: {error}</Alert>
        ))}

        <Levels setCurrentBadge={this.setCurrentBadge} user={this.props.user} points={this.state.points} current_user={this.props.current_user} current_user_id={this.state.current_user_id} id={this.state.id} />

      {this.props.current_user && this.state.current_user_id === this.state.id &&
        <div className="userProfile">
            <Card className="userInfo">
            <Card.Body className="userCardBody2">

            <Form>
            <div className="email-user">Email: {this.state.email}</div>
            <hr/>
              <Form.Group controlId="formGridName">
                <Form.Label/>
                <Form.Control
                  className="register-control"
                  type="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formGridPhoneNumber">
                <Form.Label/>
                <Form.Control
                  className="register-control"
                  type="phone_number"
                  name="phone_number"
                  value={this.state.phone_number}
                  onChange={this.handleChange}
                />

              </Form.Group>

              <div className="alerts" >Alerts : &nbsp;&nbsp;{user.alerts}<Switch onChange={this.handleSwitchChange} checked={this.state.checked}/> </div>
              <Button className="alert-button" onClick={this.handleSubmit} variant="success"> Update Profile </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="Pets">
            {this.state.userPet.map(pet =>
              <section key={pet.id}>

                <article onClick={event => this.handlePetSubmit(pet.id)} className="petcard">

                  <div className="image">
                    <img key={pet.id} src={pet.picture} alt=""/>
                  </div>

                    <div className="fixcontainer">

                      <div className="fixtext">
                        <h1 className={`fixcard-title ${pet.status}`}>{pet.status} {pet.species}</h1>
                        <p className="fixmeta"> {pet.status} <TimeAgo date={pet.date_lost}/></p>
                        <p className="fix">Name: {pet.name}</p>
                        <p>Colour: {pet.description.colour}</p>
                      </div>

                    </div>

                  </article>
                </section>
          )}
          </div>
          </div>
          }


          {this.state.current_user_id !== this.state.id &&
            <div className="userProfile">


            <Card className="userInfo">

            <Card.Body className="userCardBody">

              <Card.Text className="userCardText">
              <div>Name: {this.state.name} <br/> Email: {this.state.email} <br/> Phone Number: {this.state.phone_number} </div>
              </Card.Text>
            </Card.Body>

          </Card>

          <div className="Pets">
            {this.state.userPet.map(pet =>
              <section key={pet.id}>

                <article onClick={event => this.handlePetSubmit(pet.id)} className="petcard">

                  <div className="image">
                    <img key={pet.id} src={pet.picture} alt=""/>
                  </div>

                    <div className="fixcontainer">

                      <div className="fixtext">
                        <h1 className={`fixcard-title ${pet.status}`}>{pet.status} {pet.species}</h1>
                        <p className="fixmeta"> {pet.status} <TimeAgo date={pet.date_lost}/></p>
                        <p className="fix">Name: {pet.name}</p>
                        <p>Colour: {pet.description.colour}</p>
                      </div>

                    </div>

                  </article>
                </section>
          )}
          </div>
          </div>}







</React.Fragment>

    )
  }
}

export default User;


// {levels  && <img scr="https://gamepedia.cursecdn.com/dota2_gamepedia/thumb/8/85/SeasonalRank1-1.png/140px-SeasonalRank1-1.png?version=ce7c6eea36971495cdad1f06e7ef3709" />}


