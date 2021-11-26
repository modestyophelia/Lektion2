import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { useState } from "react";
import Cat from "./Cat";
import house from "./assets/house.png";
import bed from "./assets/bed.png";
import kitchen from "./assets/kitchen.png";
import living_room from "./assets/living_room.png";

export default function App() {

  const [boxColor1, setBoxColor1] = useState("red");
  const [boxColor2, setBoxColor2] = useState("red");
  const [boxColor3, setBoxColor3] = useState("red");

  function setColorFunction1(boxColor1) {
    setBoxColor1(boxColor1);
  }

  function setColorFunction2(boxColor2) {
    setBoxColor2(boxColor2);
  }

  function setColorFunction3(boxColor3) {
    setBoxColor3(boxColor3);
  }

  return (
    <View style={styles.container}>

      <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
      <img style={{ width: 60, height: 60 }} src={house} alt="house" />
      <h3>SmartHome</h3>
      </View>

      <h1>Rooms</h1>

      <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "center", alignItems: "center"}}>
      <img style={{ width: 130, height: 150, background: '#C5D6FF', margin: 7 }} src={bed}/>
      <img style={{ width: 130, height: 150, background: '#C5D6FF', margin: 7 }} src={kitchen}/>
      <img style={{ width: 130, height: 150, background: '#C5D6FF', margin: 7 }} src={living_room}/>
      </View>

      <h1>Devices</h1>

    <View style = {{width: "100%"}}>
      <View style = {{position: "absolute", display: "flex", flexDirection: "column"}}>  
      
        <View style = {{margin: "10px", width: 425,height: 100,backgroundColor: '#F4FD89'}} />

        {/* <View style = {{margin: "10px",width: 425,height: 100,backgroundColor: '#F4FD89'}} />*/}

        {/* <View style = {{margin: "10px",width: 425,height: 100,backgroundColor: '#F4FD89'}} />*/}

        <View style = {{position: "absolute"}}>
        <h3>Living Room Lamp</h3>
        <h3>TV</h3>
        <h3>Heater</h3>
        </View>

      </View>
    </View>


    <View style = {{width: "80%", paddingLeft: "400px", top: "10px"}}>
    <View style = {{width: "3%", position: "absolute"}}>

    <Button title="On" onPress={() => setColorFunction1("green")}></Button>
    <Button title="Off" onPress={() => setColorFunction1("red")}></Button>

    <Button title="On" onPress={() => setColorFunction2("green")}></Button>
    <Button title="Off" onPress={() => setColorFunction2("red")}></Button>

    <Button title="On" onPress={() => setColorFunction3("green")}></Button>
    <Button title="Off" onPress={() => setColorFunction3("red")}></Button>

    </View>
    </View>

    <View style = {{position: "absolute", display: "flex", flexDirection: "column", top: "59%", justifyContent: "flex-end"}}>  
    <View style = {{margin: "20px", width: 20,height: 20,backgroundColor: boxColor1 }} /> 
    <View style = {{margin: "20px", width: 20,height: 20,backgroundColor: boxColor2 }} />
    <View style = {{margin: "20px", width: 20,height: 20,backgroundColor: boxColor3 }} />  
    </View>
    
    <View>

    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

});
