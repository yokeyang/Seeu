import React, { Component } from 'react';
import { StyleSheet} from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button,Text } from 'native-base';
export default class Login extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Form style = {styles.form}>
                        <Item floatingLabel>
                            <Label>账号</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>密码</Label>
                            <Input />
                        </Item>
                        <Item>
                            <Button style={styles.button} block><Text> 登录 </Text></Button>
                        </Item>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    form:{
        flexDirection:"column",
        justifyContent:"center",
        width:'95%'
    },
    button:{
        marginTop:'5%',
        width:'100%',
        margin:0,
        alignSelf:'center'
    }
});