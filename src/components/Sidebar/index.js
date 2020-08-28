import React from 'react';
import { Container, ProfileContent, Avatar, Nav, NavItem, NavButtom, NavIcon, NavText,UserNameText } from './styles';
import { useHistory, useLocation } from "react-router-dom";
import { signOut } from '../../services/auth'
import rotas from '../../routes'
import { AiOutlineLogout } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import * as actionsUser from '../../redux/actions/userAction';

function Sidebar() {
  let hist = useHistory()
  let location = useLocation()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user);
  
  const sair = () => {
    signOut().then(res => {
      localStorage.removeItem("User@testeferacode")
      hist.push('/')
      dispatch(actionsUser.destroy());
    }).catch(err => {
      //trata erro de logout
    })
  }

  return (
    <Container>
      <ProfileContent>
        <Avatar
          src={!user.photoURL ? require("../../assets/imgs/profile.png"):  user.photoURL}
        />
        <UserNameText>{user.displayName}</UserNameText>
      </ProfileContent>

      <Nav>
        {
          rotas.map(({ path, name, Icon }, key) => {
            return (
              <NavItem>
                <NavButtom isCurrentPath={location.pathname == path} onClick={() => hist.push(path)}>
                  <NavIcon><Icon size={36} /></NavIcon>
                  <NavText>{name}</NavText>
                </NavButtom>
              </NavItem>
            );
          })
        }
        <NavItem>
          <NavButtom isCurrentPath={false} onClick={() => sair()}>
            <NavIcon><AiOutlineLogout size={36} /></NavIcon>
            <NavText>Sair</NavText>
          </NavButtom>
        </NavItem>
      </Nav>
    </Container>
  );
}

export default Sidebar;