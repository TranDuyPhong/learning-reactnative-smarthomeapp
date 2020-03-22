import React from 'react';
import {
    TouchableWithoutFeedback, 
    StyleSheet,
    Slider
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import * as theme from '../theme';
import settings from '../settings';
import {
    Block,
    Text,
    PanSlider
} from '../components';

class Settings extends React.Component {
    static navigationOptions = {
        headerTitle: null,
        headerLeft: ({ onPress }) => (
            <Block>
                <TouchableWithoutFeedback onPress={() => onPress()}>
                    <FontAwesome size={theme.sizes.font * 1.5} color={theme.colors.black} name='arrow-left' />
                </TouchableWithoutFeedback>
            </Block>
        ),
        headerLeftContainerStyle: {
            paddingLeft: theme.sizes.base
        },
        headerStyle: {
            borderBottomColor: 'transparent',
            elevation: 0
        }
    }

    state = {
        direction: 45,
        speed: 12
    }

    render() {
        const { navigation, settings } = this.props;
        const name = navigation.getParam('name');

        const Icon = settings[name].icon;

        return (
            <Block flex={1} style={styles.settings}>
                <Block flex={0.7} row>
                    <Block column>
                        <Icon size={theme.sizes.font * 3} color={theme.colors.gray} />
                        <Block flex={1.2} row style={{
                            alignItems: 'flex-end'
                        }}>
                            <Text h1>34</Text>
                            <Text h1 size={34} height={80} weight={'600'} spacing={0.1}>°C</Text>
                        </Block>
                        <Text caption>Temperature</Text>
                    </Block>
                    <Block flex={1} middle center>
                        <PanSlider minValue={10} />
                    </Block>
                </Block>
                <Block flex={1} style={{
                    marginTop: theme.sizes.base * 2
                }}>
                    <Block column style={{
                        marginVertical: theme.sizes.base * 2
                    }}>
                        <Block row space='between'>
                            <Text welcome color='black'>Direction</Text>
                            <Text welcome color='black'>{this.state.direction}</Text>
                        </Block>
                        <Slider 
                            value={this.state.direction}
                            minimumValue={0} 
                            maximumValue={90}
                            thumbTintColor={theme.colors.accent}
                            minimumTrackTintColor={theme.colors.accent}
                            maximumTrackTintColor={theme.colors.gray2}
                            onValueChange={value => this.setState({ direction: parseInt(value, 10) })}
                        />
                    </Block>
                    <Block column style={{
                        marginVertical: theme.sizes.base * 2
                    }}>
                        <Block row space='between'>
                            <Text welcome color='black'>Direction</Text>
                            <Text welcome color='black'>{this.state.speed}</Text>
                        </Block>
                        <Slider
                            value={this.state.speed}
                            minimumValue={0}
                            maximumValue={30}
                            thumbTintColor={theme.colors.accent}
                            minimumTrackTintColor={theme.colors.accent}
                            maximumTrackTintColor={theme.colors.gray2}
                            onValueChange={value => this.setState({ speed: parseInt(value, 10) })}
                        />
                    </Block>
                </Block>
            </Block>
        )
    }
}

Settings.defaultProps = {
    settings: settings
}

const styles = StyleSheet.create({
    settings: {
        padding: theme.sizes.base * 2,
        backgroundColor: '#fff'
    },
    controller: {
        width: 85,
        borderRadius: 10,
        backgroundColor: theme.colors.gray,
        alignContent: 'center'
    },
    controllerValue: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        paddingTop: 24,
        zIndex: 1
    },
    controllerOverlay: {
        width: 85,
        borderRadius: 10,
        backgroundColor: theme.colors.accent
    }
});

export default Settings;