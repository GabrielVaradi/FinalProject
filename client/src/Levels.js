import React from 'react';
import { ProgressBar, Col } from 'react-bootstrap';

//Displays the nav-bar
const Levels = ({user, points, current_user, current_user_id, id}) => {

  let badge1;
  let badge2;
  let badge3;
  let badge4;
  let badge5;
  let badge6;
  let badge7;
  let currentBadge;
  let badgeStyle = {
    opacity: 0.3,
    width: "192px",
    height: "192px"
  };
  let currentBadgeStyle = {
    opacity: 1,
    width: "192px",
    height: "192px"
  }


    const levels = Math.floor(user.points/1000)
    const progress = (user.points - levels*1000)
    const missingPoints = Math.floor(1000 - progress)
    let percentage = (Math.round((points/7000) * 100) / 100)*100
    if (percentage === Infinity) {
      percentage = 0
    } else if (percentage > 100){
      percentage = 100
    }

    if (0 <= percentage && percentage < 16.67) {
      badge1 = <img id="badge1" style={currentBadgeStyle} alt="" src="https://firebasestorage.googleapis.com/v0/b/final-project-1561040119727.appspot.com/o/badgelvl0.png?alt=media&token=65a6f1a6-4ef7-4619-ba04-8e8a84a14bad" />;
     currentBadge = badge1
    } else {
      badge1 = <img id="badge1" style={badgeStyle} alt="" src="https://firebasestorage.googleapis.com/v0/b/final-project-1561040119727.appspot.com/o/badgelvl0.png?alt=media&token=65a6f1a6-4ef7-4619-ba04-8e8a84a14bad" />;
    }
    if (16.68 < percentage && percentage < 33.33) {
      badge2 = <img id="badge2" style={currentBadgeStyle} alt="" src="https://firebasestorage.googleapis.com/v0/b/final-project-1561040119727.appspot.com/o/Badgelvl1.png?alt=media&token=136b63ac-e990-4642-aa28-2fe5415087d5" />
      currentBadge = badge2
    } else {
      badge2 = <img id="badge2" style={badgeStyle} alt="" src="https://firebasestorage.googleapis.com/v0/b/final-project-1561040119727.appspot.com/o/Badgelvl1.png?alt=media&token=136b63ac-e990-4642-aa28-2fe5415087d5" />
    }
    if (33.33 < percentage && percentage < 50) {
      badge3 = <img id="badge3" style={currentBadgeStyle} alt="" src="https://firebasestorage.googleapis.com/v0/b/final-project-1561040119727.appspot.com/o/badgelvl2.png?alt=media&token=0d572115-5875-4605-a2b9-5bf05f7a6ea6" />
      currentBadge = badge3
    } else {
      badge3 = <img id="badge3" style={badgeStyle} alt="" src="https://firebasestorage.googleapis.com/v0/b/final-project-1561040119727.appspot.com/o/badgelvl2.png?alt=media&token=0d572115-5875-4605-a2b9-5bf05f7a6ea6" />
    }
    if (50.01 < percentage && percentage < 66.67) {
      badge4 = <img id="badge4" style={currentBadgeStyle} alt="" src="https://firebasestorage.googleapis.com/v0/b/final-project-1561040119727.appspot.com/o/badgelvl3.png?alt=media&token=d5a155f7-812e-4204-b2e1-e04d7f03a5b9" />
      currentBadge = badge4
    } else {
      badge4 = <img id="badge4" style={badgeStyle} alt="" src="https://firebasestorage.googleapis.com/v0/b/final-project-1561040119727.appspot.com/o/badgelvl3.png?alt=media&token=d5a155f7-812e-4204-b2e1-e04d7f03a5b9" />
    }
    if (66.68 < percentage && percentage < 83.33) {
      badge5 = <img id="badge5" style={currentBadgeStyle} alt="" src="https://firebasestorage.googleapis.com/v0/b/final-project-1561040119727.appspot.com/o/badgelvl5.png?alt=media&token=7f821419-b0b2-4676-8cd4-e82ec1c2f9bf" />
      currentBadge = badge5
    } else {
      badge5 = <img id="badge5" style={badgeStyle} alt="" src="https://firebasestorage.googleapis.com/v0/b/final-project-1561040119727.appspot.com/o/badgelvl5.png?alt=media&token=7f821419-b0b2-4676-8cd4-e82ec1c2f9bf" />
    }
    if (83.34 < percentage && percentage <= 99.99) {
      badge6 = <img id="badge7" style={currentBadgeStyle} alt="" src="https://firebasestorage.googleapis.com/v0/b/final-project-1561040119727.appspot.com/o/badgelvl6.png?alt=media&token=e5f7dcac-33c4-41ac-9e05-8f640b4e5d87" />
      currentBadge = badge6
    } else {
      badge6 = <img id="badge7" style={badgeStyle} alt="" src="https://firebasestorage.googleapis.com/v0/b/final-project-1561040119727.appspot.com/o/badgelvl6.png?alt=media&token=e5f7dcac-33c4-41ac-9e05-8f640b4e5d87" />
    }
    if (percentage >= 100) {
      badge7 = <img id="badge7" style={currentBadgeStyle} alt="" src="https://firebasestorage.googleapis.com/v0/b/final-project-1561040119727.appspot.com/o/badgelvl7.png?alt=media&token=54ae2e9a-dd5d-4048-95a9-494ed615931e" />
      currentBadge = badge7
    } else {
      badge7 = <img id="badge7" style={badgeStyle} alt="" src="https://firebasestorage.googleapis.com/v0/b/final-project-1561040119727.appspot.com/o/badgelvl7.png?alt=media&token=54ae2e9a-dd5d-4048-95a9-494ed615931e" />
    }


    return (
      <React.Fragment>
      <React.Fragment>
      <React.Fragment>
      <React.Fragment>
        <h3 className="levels-text-2"> Level {levels}!  </h3>
        <h3 className="levels-text"> You need {missingPoints} points to reach level {levels+1} </h3>
        <div className="badges">
         Level 0
         {badge1}
         Level 1
         {badge2}
         Level 2
         {badge3}
         Level 3
         {badge4}
         Level 4
         {badge5}
         Level 5
         {badge6}
         Level 6++
         {badge7}
        </div>
        </React.Fragment>


      </React.Fragment>

                    <ProgressBar className="progressBar" label={`${percentage}%`} variant="success" animated now={percentage} />
</React.Fragment>

<Col className="userPicture" xs={0} md={0}>
      {currentBadge}
    </Col>
    </React.Fragment>

    );
};
export default Levels;

