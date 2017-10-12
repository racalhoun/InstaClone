import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';
const Head = styled.div`
   display: -webkit-flex;
   display: flex;
   -webkit-flex-direction: row;
   flex-direction: row;
   -webkit-align-items: center;
   align-items: center;
   -webkit-justify-content: center;
   justify-content: space-around;
    background: rgba(210,105,105,1)
`;

class Navbar extends Component{
  render(){
    return (
      <Head> 
        <h3><FaInstagram /> | Instaclone</h3>
        <FaSearch/><input type="text"/>
          <FaCompass />
          <FaHeartO />
          <FaUser />
      </Head>
    );
  }
}

export default Navbar