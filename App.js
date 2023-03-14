import React from 'react';
import { StyleSheet, Text, View, SafeAreaView ,TouchableOpacity, TextInput, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';


const currencyPerRupee ={
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041
};

export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      resultValue: "0.0"
    };
  }

  buttonPressed =(currency) => {
    if (this.state.inputValue === ""){
      Alert.alert("Enter some value ");
    }
    let result = parseFloat(this.state.inputValue) * currencyPerRupee[currency];
    this.setState({resultValue: result.toFixed(2)})
  }


  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
      <View style={styles.screenview}>
        <View style={styles.resultcontainer}>
          <Text style= {styles.resultValue}>
            {this.state.resultValue}
          </Text>
        </View>
        <View style={styles.inputcontainer}>
          <TextInput 
          style={styles.input}
          selectionColor="#FFF"
          keyboardType="numeric"
          placeholder= "Enter Value"
          value={this.state.inputValue}
          onChangeText={inputValue => 
            this.setState({inputValue}) 
          }
          />
        </View>
        <View style={styles.converterbuttoncontainer}>
          <TouchableOpacity 
          onPress= { () => this.buttonPressed("DOLLAR")}
          style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>DOLLAR</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress= { () => this.buttonPressed("Euro")}
          style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>EURO</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress= { () => this.buttonPressed("POUND")}
          style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>POUND</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress= { () => this.buttonPressed("AUSDOLLAR")}
          style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>AUSDOLLAR</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress= { () => this.buttonPressed("CANDOLLAR")}
          style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>CANDOLLAR</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress= { () => this.buttonPressed("YEN")}
          style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>YEN</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress= { () => this.buttonPressed("DINAR")}
          style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>DINAR</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress= { () => this.buttonPressed("BITCOIN")}
          style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>BITCOIN</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress= { () => this.buttonPressed("RUBEL")}
          style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>RUBEL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    marginTop: 20
  },
  screeNview: {
    flex: 1
  },
  resultcontainer: {
    height: 70,
    marginTop: 80,
    justifyContent: "center",
    borderColor: "#242B2E",
    backgroundColor: "#242B2E",
    alignItems: "center",
    borderWidth: 2,
  }, 
  resultValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF"
  },
  inputcontainer: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    bordercolor: "#242B2E",
    borderWidth: 2,
    backgroundColor: "#FFFFFF"
  },
  input: {
    color: "#0D0D0D",
    fontSize: 30,
  },
  converterbuttoncontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    borderColor: "#242B2E",
    borderWidth: 2,
  },
  converterbutton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#242B2E",
    height: 100,
    borderColor: "#242B2E",
    borderWidth: 2,
    width: "33.3%"
  },
  converterbuttontext: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  }
});
