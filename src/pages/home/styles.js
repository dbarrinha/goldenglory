import styled from 'styled-components';

export const Content = styled.div`
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 0px;
  width: 100%;
  height: calc(100% - 100px);
`;

export const CoverPicContent = styled.div`
  display: block;
  height: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 0px 10px 0 rgba(0, 0, 0, 0.05);
  transition: 1s;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const CoverPic = styled.img`
  display: block;
  height: 300px;
  width: 100%;
  resize: vertical;
  background-size: contain;
  transition: 1s;
  
  @media (max-width: 768px) {
    height: 200px;
  }
`;


export const CoverButton = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: rgb(255,255,255,0.9);
  border: none; 
  color: black; 
  padding: 8px 10px; 
  font-size: 16px; 
  cursor: pointer; 
  display: flex;
  align-items: center;
  border-radius: 20px;

  :hover {
    background-color: rgb(255,255,255,1);
  }
`;

export const InputFile = styled.input`
  
  width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
  
`;

export const LabelFile = styled.label`
     max-width: 80%;
    font-size: 1.1rem;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    padding: 6px 12px;

  :focus{
    outline: 1px dotted #000;
	  outline: -webkit-focus-ring-color auto 5px;
  }
  :hover {
  }
`;