import React, { Component } from 'react';
import { StyleSheet, View, TextInput, ScrollView } from 'react-native';

import SendButton from '../../components/SendButton';

export default class IdeaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IdeaName: '',
      IdeaType:'',
      Birim:'',
      IdeaDesc: '',
      Ilce:'',
      Mahalle:'',
      Cadde:'',
      Adres:'',

    };
  }


  render() {
    return (
        <ScrollView>
            <View style={styles.inputStyle}>
                <TextInput
                    textAlignVertical={'top'}
                    multiline = {true}
                    onChangeText={(IdeaName) => this.setState({IdeaName})}
                    value={this.state.IdeaName}
                    editable = {true}
                    maxLength = {100}
                    placeholder= {'Fikir Adı'}
                />
            </View>
            <View style={styles.inputStyle}>
                <TextInput
                    textAlignVertical={'top'}
                    multiline = {true}
                    numberOfLines = {1}
                    onChangeText={(IdeaType) => this.setState({IdeaType})}
                    value={this.state.IdeaType}
                    editable = {true}
                    maxLength = {50}
                    placeholder= {'Fikir Tipi'}
                />
            </View>
            <View style={styles.inputStyle}>
                <TextInput
                    textAlignVertical={'top'}
                    multiline = {true}
                    numberOfLines = {1}
                    onChangeText={(Birim) => this.setState({Birim})}
                    value={this.state.Birim}
                    editable = {true}
                    maxLength = {50}
                    placeholder= {'İlgili Birim'}
                />
            </View>
            <View style={styles.inputStyle}>
                <TextInput
                    textAlignVertical={'top'}
                    multiline = {true}
                    numberOfLines = {4}
                    onChangeText={(IdeaDesc) => this.setState({IdeaDesc})}
                    value={this.state.IdeaDesc}
                    editable = {true}
                    maxLength = {250}
                    placeholder= {'Fikir Açıklaması'}
                />
            </View>
            <View style={styles.inputStyle}>
                <TextInput
                    textAlignVertical={'top'}
                    multiline = {true}
                    numberOfLines = {1}
                    onChangeText={(Ilce) => this.setState({Ilce})}
                    value={this.state.Ilce}
                    editable = {true}
                    maxLength = {50}
                    placeholder= {'İlçe'}
                />
            </View>
            <View style={styles.inputStyle}>
                <TextInput
                    textAlignVertical={'top'}
                    multiline = {true}
                    numberOfLines = {1}
                    onChangeText={(Mahalle) => this.setState({Mahalle})}
                    value={this.state.Mahalle}
                    editable = {true}
                    maxLength = {50}
                    placeholder= {'Mahalle'}
                />
            </View>
            <View style={styles.inputStyle}>
                <TextInput
                    textAlignVertical={'top'}
                    multiline = {true}
                    numberOfLines = {1}
                    onChangeText={(Cadde) => this.setState({Cadde})}
                    value={this.state.Cadde}
                    editable = {true}
                    maxLength = {50}
                    placeholder= {'Cadde'}
                />
            </View>
            <View style={styles.inputStyle}>
                <TextInput
                    textAlignVertical={'top'}
                    multiline = {true}
                    numberOfLines = {4}
                    onChangeText={(Adres) => this.setState({Adres})}
                    value={this.state.Adres}
                    editable = {true}
                    maxLength = {200}
                    placeholder= {'Adres'}
                />
            </View>

            <SendButton
                    text={"Gönder"}
                    bgColor={"#47AFCB"}
                    textColor={"white"}
                />
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    inputStyle:{
        backgroundColor:'white',
        padding:5,
        borderWidth: 1,
        borderColor: '#D6D6D6',
        margin:10,
        borderRadius: 15,
    }
});