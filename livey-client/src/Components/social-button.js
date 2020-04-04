import React from 'react'
import SocialLogin from 'react-social-login'
import { Button } from '@material-ui/core';
 
class SocialButton extends React.Component {
 
    render() {
        return (
            <Button onClick={this.props.triggerLogin} {...this.props}
            style={{
        
                backgroundColor: "#21b6ae",
              
                magin: "18px 36px",
                fontSize: "18px",
                width:"150px",
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