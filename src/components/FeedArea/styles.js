import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    flex: 2;
    padding: 20px;
    float: left;
    overflow: scroll;
    height: calc(100%  - 100px);
    justify-content: center;

    ::-webkit-scrollbar {
        width: 0px;
    }
`;

export const PostForm = styled.div`
    min-height: 150px;
    border-radius: 20px;
    padding: 15px;
    max-width: 100%;
    background-color: rgb(0,0,0,0.02);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 0px 10px 0 rgba(0, 0, 0, 0.05);
    margin-bottom: 20px;
    transition: 1s;
    
    :hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 0px 20px 0 rgba(0, 0, 0, 0.2);
    }
`;

export const PostFormFooter = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: flex-end;
`;

export const ButtonForm = styled.button`
    background-color: rgb(0,0,0,0.05);
    border: none; 
    color: black; 
    padding: 12px 16px; 
    font-size: 16px; 
    cursor: pointer; 
    display: flex;
    align-items: center;
    border-radius: 20px;
    font-weight: bold;

    :hover {
        background-color: rgb(0,0,0,0.1); 
    }
`;

export const TextArea = styled.textarea`
    max-width: 100%;
    min-width: 100%;
    min-height: 100px;
    padding-top: 15px;
    border-style: none;
    overflow: hidden;
    border-radius: 20px;
`;

export const PostList = styled.div`
    width: 100%;
`;

export const Post = styled.div`
    min-height: 100px;
    border-radius: 20px;
    margin-bottom: 10px;
    padding: 15px;
    max-width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 0px 10px 0 rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
`;

export const Avatar = styled.img`
    overflow: hidden;
    border-radius: 50%;
    position: relative;
    width: 50px;
    height: 50px;

`;

export const ProfileContent = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid #c5c5c5;
    margin-right: 15px;
`;

export const UserNameText = styled.span`
    font-weight: bold;
    font-size:16px;
`;

export const UserEmailText = styled.p`
    font-weight: bold;
    font-size:12px;
    color: rgb(0,0,0,0.3);
    margin: 0px;
`;

export const ReactionIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    padding: 5px;
    border-radius: 10px;

    :hover {
        background-color: rgb(0,0,0,0.08); 
    }
`;

export const ReactionText = styled.span`
    margin-left: 5px;
`;

