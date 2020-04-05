import React from 'react'
import SocialLogin from 'react-social-login'
import { Button } from '@material-ui/core';
 
class SocialButton extends React.Component {
 
    render() {
        return (
            <Button onClick={this.props.triggerLogin} {...this.props}
            style={{
        
                backgroundColor: "white",
              
                magin: "18px 36px",
              
                fontSize: "18px",
                width:"250px",
                height:80,
                "&:hover": {
                  background: "#efefef"
                }
            }}
            >
              { this.props.children }
            </Button>
        );
    }
}
 
export default SocialLogin(SocialButton);