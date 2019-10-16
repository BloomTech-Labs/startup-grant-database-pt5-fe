import React from 'react';
import * as firebaseui from 'firebaseui';




class Login extends React.Component {
    constructor(){
        super()
        this.state ={
            credentials: {
                username: '',
                password: '',
            }
        }
    }

    render(){
        return(
            <div>
                <Form>
                    <Input
                    type ="text"
                    placeholder = "User Name"
                    name="username"
                    />



                <Input
                type="password"
                placeholder="Password"
                name="password"
                />

                </Form>
            </div>

        
        )
    }




}