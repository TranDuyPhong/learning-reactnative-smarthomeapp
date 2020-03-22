import React from 'react';
import {
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { LineChart } from "react-native-svg-charts";
import * as shape from 'd3-shape';

import {
    Block,
    Text
} from '../components';
import { sizes, colors } from '../theme';
import settings from '../settings'

class Dashboard extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        const { navigation, settings } = this.props;
        const LightIcon = settings['light'].icon;
        const ACIcon = settings['ac'].icon;
        const TemperatureIcon = settings['temperature'].icon;
        const FanIcon = settings['fan'].icon;
        const WifiIcon = settings['wi-fi'].icon;
        const ElectricityIcon = settings['electricity'].icon;

        return (
            <Block style={styles.dashboard}>
                <Block column style={{
                    marginVertical: sizes.base * 2
                }}>
                    <Text welcome>Welcome</Text>
                    <Text name>John Doe</Text>
                </Block>
                <Block row style={{
                    paddingVertical: 10
                }}>
                    <Block flex={1.5} row style={{
                        alignItems: 'flex-end'
                    }}>
                        <Text h1>34</Text>
                        <Text h1 size={34} height={80} weight={'600'} spacing={0.1}>°C</Text>
                    </Block>
                    <Block flex={1} column style={{
                        paddingHorizontal: sizes.base
                    }}>
                        <Text caption>Humidity</Text>
                        <LineChart 
                            yMax={100}
                            yMin={0}
                            curve={shape.curveNatural}
                            style={{
                                flex: 0.8
                            }}
                            data={[0, 20, 25, 15, 20, 55, 60]}
                            svg={{
                                strokeWidth: 4,
                                stroke: 'url(#gradient)'
                            }}
                        />
                    </Block>
                </Block>
                <ScrollView style={styles.buttons} showsVerticalScrollIndicator={false}>
                    <Block column space='between'>
                        <Block row space='around' style={{
                            marginVertical: sizes.base
                        }}>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Settings', {
                                name: 'light'
                            })}>
                                <Block center middle style={styles.button}>
                                    <LightIcon size={38} />
                                    <Text style={{
                                        marginTop: sizes.base * 0.75
                                    }} button>{settings.light.name}</Text>
                                </Block>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Settings', {
                                name: 'ac'
                            })}>
                                <Block center middle style={styles.button}>
                                    <ACIcon size={38} />
                                    <Text style={{
                                        marginTop: sizes.base * 0.75
                                    }} button>{settings.ac.name}</Text>
                                </Block>
                            </TouchableOpacity>
                        </Block>
                        <Block row space='around' style={{
                            marginVertical: sizes.base
                        }}>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Settings', {
                                name: 'temperature'
                            })}>
                                <Block center middle style={styles.button}>
                                    <TemperatureIcon size={38} />
                                    <Text style={{
                                        marginTop: sizes.base * 0.75
                                    }} button>{settings.temperature.name}</Text>
                                </Block>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Settings', {
                                name: 'fan'
                            })}>
                                <Block center middle style={styles.button}>
                                    <FanIcon size={38} />
                                    <Text style={{
                                        marginTop: sizes.base * 0.75
                                    }} button>{settings.fan.name}</Text>
                                </Block>
                            </TouchableOpacity>
                        </Block>
                        <Block row space='around' style={{
                            marginVertical: sizes.base
                        }}>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Settings', {
                                name: 'wi-fi'
                            })}>
                                <Block center middle style={styles.button}>
                                    <WifiIcon size={38} />
                                    <Text style={{
                                        marginTop: sizes.base * 0.75
                                    }} button>{settings["wi-fi"].name}</Text>
                                </Block>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Settings', {
                                name: 'electricity'
                            })}>
                                <Block center middle style={styles.button}>
                                    <ElectricityIcon size={38} />
                                    <Text style={{
                                        marginTop: sizes.base * 0.75
                                    }} button>{settings.electricity.name}</Text>
                                </Block>
                            </TouchableOpacity>
                        </Block>
                    </Block>
                </ScrollView>
            </Block>
        )
    }
}

Dashboard.defaultProps = {
    settings: settings
};

const styles = StyleSheet.create({
    dashboard: {
        padding: sizes.base * 2,
        backgroundColor: 'white',
        flex: 1,
    },
    buttons: {
        flex: 1
    },  
    button: {
        backgroundColor: colors.button,
        width: 151,
        height: 151,
        borderRadius: 151 / 2
    }
});

export default Dashboard;