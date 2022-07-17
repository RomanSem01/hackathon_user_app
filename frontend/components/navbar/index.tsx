import React from 'react';
import * as Styled from '../../styles/home.styled';
import { INavBarProps } from '../../types/home.types';

const NavBar = ({ scrolled, name }: INavBarProps) => {
  return (
    <Styled.NavBar className={scrolled ? 'affix' : undefined}>
      <Styled.Logo>
        <Styled.LogoLink href="/">User Management</Styled.LogoLink>
      </Styled.Logo>
      <Styled.MailList>
        <Styled.List>
          <Styled.ListItem>
            <Styled.ListItemLink>Logged in as {name}</Styled.ListItemLink>
          </Styled.ListItem>
        </Styled.List>
      </Styled.MailList>
    </Styled.NavBar>
  );
};

export default NavBar;
