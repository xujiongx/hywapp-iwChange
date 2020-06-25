import React from 'react'
import { UI } from '@hyext/hy-ui'
import './Zlist.hycss'

const { View, Text } = UI
const hyExt = global.hyExt

class Zlist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    

    render() {
        let selector = null;
        this.props.colorCheck == 1 ? selector = this.props.userList.P : selector = this.props.userList.K;
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

                {Object.keys(this.props.userList)  == 0 ?
                    <View>
                        <Text className='helpText'>
                            暂无用户助力
                    </Text>
                    </View> :
                    <View className='userUl'>
                        {
                            selector.map((item, index) => {
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



                }
            </View>
        )
    }
}


export default Zlist