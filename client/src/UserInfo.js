import React from 'react';
import { Col, Card, Form, Button} from 'react-bootstrap';
import TimeAgo from 'react-timeago';
import Switch from "react-switch";

//Displays the nav-bar
const UserInfo = ({ current_user, current_user_id, id, email, phone_number, handleChange, handleSwitchChange, checked, handleSubmit, user, userPet, handlePetSubmit }) => {

// <UserInfo current_user={this.props.current_user} current_user_id={this.state.current_user_id} id={this.state.id} email={this.state.email} name={this.state.name} phone_number={this.state.phone_number} handleChange={this.handleChange} handleSwitchChange={this.handleSwitchChange} handleSubmit={this.handleSubmit} checked={this.state.checked} user={this.props.user} userPet={this.state.userPet} handlePetSubmit={this.handlePetSubmit}/>

    return (
      <React.Fragment>
      {current_user && current_user_id === id &&
        <div className="userProfile">
            <Card className="userInfo">
            <Card.Body className="userCardBody2">

            <Form>
            <div className="email-user">Email: {email}</div>
            <hr/>
              <Form.Group controlId="formGridName">
                <Form.Label/>
                <Form.Control
                  className="register-control"
                  type="name"
                  name="name"
                  value={email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formGridPhoneNumber">
                <Form.Label/>
                <Form.Control
                  className="register-control"
                  type="phone_number"
                  name="phone_number"
                  value={phone_number}
                  onChange={handleChange}
                />

              </Form.Group>

              <div className="alerts" >Alerts : &nbsp;&nbsp;{user.alerts}<Switch onChange={handleSwitchChange} checked={checked}/> </div>
              <Button className="alert-button" onClick={handleSubmit} variant="success"> Update Profile </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="Pets">
            {userPet.map(pet =>
              <section key={pet.id}>

                <article onClick={event => handlePetSubmit(pet.id)} className="petcard">

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


          {current_user_id !== id &&
            <div className="userProfile">


            <Card className="userInfo">

            <Card.Body className="userCardBody">

              <Card.Text className="userCardText">
              <div>Name: {user.name} <br/> Email: {email} <br/> Phone Number: {phone_number} </div>
              </Card.Text>
            </Card.Body>

          </Card>

          <div className="Pets">
            {userPet.map(pet =>
              <section key={pet.id}>

                <article onClick={event => handlePetSubmit(pet.id)} className="petcard">

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


    );
};
export default UserInfo;

