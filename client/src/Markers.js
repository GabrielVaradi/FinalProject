import React from 'react';
import { Marker, InfoWindow, Circle } from "react-google-maps";

const Markers = ({setMarkerRef, id, latitude, longitude, picture_merged, markerId, picture, circleVisible, name, radius}) => {

    return (

      <Marker
      setMarkerRef={setMarkerRef}
      key={id}
      position = {{lat: Number(latitude), lng: Number(longitude)}}
      name = {name}
      onClick={() => this.onMarkerClick(id)}
      options={{ icon:
                { url: picture_merged,
                  scaledSize: { width: 48, height: 48 },
                  } }}

       >
        {markerId === id && <InfoWindow >

        <img key={id} alt={`pet {id}`} src={picture}/>
        </InfoWindow>}




        {circleVisible === id && <Circle
          options={{
            visible: circleVisible,
            radius: radius,
            fillColor:'#84bcaf',
            strokeOpacity: 0,
            fillOpacity: 0.4,
            center: {lat: Number(latitude),
                            lng: Number(longitude)}
          }
          }
           />}
         </Marker>

    );
};
export default Markers;
