import React from 'react'
import { UI } from '@hyext/hy-ui'
import './Zlist.hycss'

const { View, Text,Image } = UI
const hyExt = global.hyExt

class Zlist extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {P,K}=this.props.userList
        let selector = null;
        this.props.colorCheck == 0 ? selector = P : selector = K;
        return (
            <View className={this.props.colorCheck === 1 ? 'zList blueb' : 'zList redb'}>
                <View className={this.props.colorCheck === 1 ? 'zhuLi  bluebg' : 'zhuLi  redbg'}>
                    <Text className='zhuliText lh62 whiteText '>助力榜单</Text>
                </View>
                <View className={this.props.colorCheck === 1 ? 'zhuliHead bluebg ' : 'zhuliHead redbg '}>
                    <Text className='lh62 whiteText' >排名</Text>
                    <Text className='lh62 whiteText'>用户名</Text>
                    <Text className='lh62 whiteText'>票数</Text>
                </View>

                {Object.values(this.props.userList)  == 0 ?
                    <View>
                        <Text className='helpText'>
                            暂无用户助力
                    </Text>
                    </View> :
                    <View className='userUl'>
                        {
                            //加了个||[]修复了app端兼容问题
                            Array.from(selector||[]).map((item, index) => {
                                return (<View key={index} className='userLi'>
                                    <Text className={this.props.colorCheck === 1 ? 'blueText' : 'redText'}>{item.rowid}</Text>

                                    <View className='userLi_Two'>
                                        <Image src={item.userAvatarUrl} className='userLI_userAvatarUrl' />
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