import React, { Component } from 'react';
import { View, Text, FlatList, Image, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';

import axios from 'axios';

const { width: WIDTH } = Dimensions.get('window')

export default class ProjectList extends Component {
    state = {
        ideas: '',
        loading: true,
        refreshing: false,
    }

    componentDidMount(){
        this.getNewContent();
    }

    getNewContent = async () => {
        const { data } = await axios.get('http://10.100.3.136:4848/api/last_three_ideas/?format=json');
        this.setState({
            ideas: data,
            loading: false,
            refreshing: false
        });
    };

    renderFooter = () => {
        if (!this.state.loading) return null;
        return(
            <View>
                <ActivityIndicator size={"large"} />
            </View>
        )
    };

    onRefresh = () => {
        this.setState({
            refreshing: true
        }, () => {
                this.getNewContent();
            });

    };


    renderContentItem = ({ item }) => {
        const { buttonContainerStyle, containerStyle, subContainerStyle, ImageStyle, titleStyle, descriptionStyle } = styles;
        
        return (
            <View style={containerStyle}>
            <View style={subContainerStyle}>
                <Text style={titleStyle}> {item.Title} </Text>
            </View>

            <View style={subContainerStyle}>
                <Text style={descriptionStyle}> {item.Description} </Text>
            </View>

            <View style={subContainerStyle}>
                <Image style={ImageStyle} source={{ uri: item.photo_set[0].Image }} />
            </View>

            <View style={buttonContainerStyle}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('ProjectDetail')}
                    style={styles.buttonContainer}>
                        <Text> Beğen </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('ProjectDetail')}
                    style={styles.buttonContainer}>
                        <Text> Detaylar </Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }


    render() {
        return (
        <FlatList 
            ListFooterComponent={this.renderFooter}
            renderItem={this.renderContentItem}
            keyExtractor={(item) => item.id.toString()}
            data={this.state.ideas}

            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
            />
        );
    }
}


const styles = {

    containerStyle: {
        width: WIDTH - 10,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacitiy: 0.1,
        shadowRaidus: 2,
        elevation: 1,
        marginTop: 10,
    },

    subContainerStyle: {
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    },

    buttonContainerStyle: {
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        flexDirection: 'row',
        position: 'relative',
    },

    buttonContainer: {
        borderWidth:1,
        borderColor: '#ddd',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

    ImageStyle: {
        height: 200,
        flex: 1
    },

    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    descriptionStyle: {
        fontSize: 16,
    }

};
