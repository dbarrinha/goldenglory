import React, { useEffect, useState } from 'react';
import { Container, BackGroundImagem, ContainerAuth, OverlayImagem } from './styles';
import LoginComponent from './LoginComponent'
import CadastroComponent from './CadastroComponent'
import { useHistory } from "react-router-dom";

const Login = () => {
    let hist = useHistory()
    const [isLogin, setIsLogin] = useState(true)

    useEffect(() => {
        let usuario = localStorage.getItem("User@testeferacode")
        if (usuario) {
            hist.push('/home')
        }
    }, [])


    return (
        <Container >
            <div className="row">
                <div className="col-sm-5 col-md-6 col-lg-7  col-xl-8">
                    <BackGroundImagem>
                        <OverlayImagem />
                    </BackGroundImagem>
                </div>
                <div className="col-sm-7 col-md-6 col-lg-5 col-xl-4">
                    <ContainerAuth>
                        {isLogin ?
                            <LoginComponent goToCad={() => setIsLogin(!isLogin)}  />
                            :
                            <CadastroComponent goToLogin={() => setIsLogin(!isLogin)} />
                        }
                    </ContainerAuth>
                </div>
            </div>
        </Container>
    );

}
export default Login
