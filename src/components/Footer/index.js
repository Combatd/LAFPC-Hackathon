import React, { Component } from 'react';
import { MainContainer, Container1, Container2, LeftDiv, RightDiv } from './style'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';

class Footer extends Component{
    render(){
        return(
            <MainContainer>
                <Container1>
                    <LeftDiv>
                        <h3>STAY CONNECTED</h3>
                        <a href="https://www.facebook.com/LosAngelesFoodPolicyCouncil"><FacebookIcon href="https://www.facebook.com/LosAngelesFoodPolicyCouncil" style={{margin:'10px'}}/></a> 
                        <a href="https://www.instagram.com/lagoodfood/"><InstagramIcon style={{margin:'10px'}}/></a>
                        <a href="https://twitter.com/GoodFoodLA"><TwitterIcon style={{margin:'10px'}}/></a>
                    </LeftDiv>
                    <RightDiv>
                        <h3>GET INVOLVED</h3>
                        <Button variant="contained" style={{backgroundColor:'orange'}}>DONATE</Button>
                    </RightDiv>
                </Container1>
                <Container2>
                    <p>Copyright © 2018 Los Angeles Food Policy Council. All Rights Reserved</p>
                </Container2>
            </MainContainer>
        )
    }
}

export default Footer