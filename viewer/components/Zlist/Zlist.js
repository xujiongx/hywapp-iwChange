import React from 'react'
import { UI } from '@hyext/hy-ui'
import './Zlist.hycss'

const { View, Text } = UI

class Zlist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: [
                { no: 1, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
                { no: 2, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
                { no: 3, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
                { no: 4, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
                { no: 1, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' }, { no: 1, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我', countNumber: '100' }, { no: 1, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' }, { no: 1, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙vsdcsdcd', countNumber: '100' }, { no: 1, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' }, { no: 1, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
            ]
        }
    }
    render() {
        return (
            <View className={this.props.colorCheck === 1 ? 'zList blueb' : 'zList redb'}>
                <View className={this.props.colorCheck === 1 ? 'zhuLi blueb bluebg' : 'zhuLi redb redbg'}>
                    <Text className='zhuliText lh62 whiteText '>助力榜单</Text>
                </View>
                <View className={this.props.colorCheck === 1 ? 'zhuliHead bluebg blueb' : 'zhuliHead redbg redb'}>
                    <Text className='lh62 whiteText' >排名</Text>
                    <Text className='lh62 whiteText'>用户名</Text>
                    <Text className='lh62 whiteText'>票数</Text>
                </View>
                <View className='userUl'>
                    {
                        this.state.user.map((item, index) => {
                            return (<View key={index} className='userLi'>
                                
                                <Text className={this.props.colorCheck === 1 ? 'blueText' : 'redText'}>{item.no}</Text>

                                <View className='userLi_Two'>
                                    <Text><img src={item.userAvatarUrl} className='userLI_userAvatarUrl' /></Text>
                                    <Text className={this.props.colorCheck === 1 ? 'blueText' : 'redText'}>{item.userNick.substring(0, 7)}</Text>
                                </View>
                                <Text className={this.props.colorCheck === 1 ? 'blueText' : 'redText'}>{item.countNumber}</Text>
                            </View>)
                        })
                    }


                </View>

            </View>
        )
    }
}


export default Zlist