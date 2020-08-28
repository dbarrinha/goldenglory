import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    background-color: #fff;
    padding-top: 10px;
    top:-100px;
    width: 225px;
    height: calc(100% + 100px );
    border-radius: 0px 10px 0px 0px;
    transition: 1s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 0px 10px 0 rgba(0, 0, 0, 0.05);

    @media (max-width: 768px) {
        width: 100px;
    }
`;

export const ProfileContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const Avatar = styled.img`
    overflow: hidden;
    margin-bottom: 15px;
    position: relative;
    width: 154px;
    height: 154px;
    border-radius: 20px;

    @media (max-width: 768px) {
        width: 80px;
        height: 80px;
    }
`;

export const UserNameText = styled.span`
    font-weight: bold;
    font-size:14px;
    text-transform: uppercase;
    color: rgb(0,0,0,0.5)
`;

export const Nav = styled.ul`
    margin-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
    
`;

export const NavItem = styled.li`
    list-style-type: none;
    margin-bottom:15px;
`;

export const NavButtom = styled.div`
    display: flex; 
    font-weight: bold;
    padding-left: 20px;
    padding-right: 40px;
    font-size: 20px;
    border-radius: 30px;
    background-color:  transparent;
    justify-content: space-between;
    align-items: center;
    transition: 0.3s;

    :hover {
        background-color: rgb(0,0,0,0.1);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 0px 10px 0 rgba(0, 0, 0, 0.05);
    }
`;

export const NavIcon = styled.div`
    display: inline-block;
    margin-right: 20px;
    transition: 1s;
    
    @media (max-width: 768px) {
        margin-right: 0px;
    }
`;

export const NavText = styled.span`
     @media (max-width: 768px) {
        display: none;
    }
`;
