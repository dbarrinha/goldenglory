import React, { useEffect, useState } from 'react';
import { Container, Content, CoverPic, InputFile, CoverPicContent, LabelFile, CoverButton } from './styles';
import Sidebar from '../../components/Sidebar';
import FeedArea from '../../components/FeedArea';
import TrendsArea from '../../components/TrendsArea';
import { AiFillEdit } from "react-icons/ai";
import { newCoverPic, getCoverPic } from '../../services/user'
import { useSelector } from 'react-redux';

export default function Home(props) {
    const user = useSelector(state => state.user.user);
    let [coverUrl, setCoverUrl] = useState("")
    let [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getCover()
    }, [])

    const getCover = () => {
        getCoverPic(user.uid).then(res=>{
            setCoverUrl(res?.coverpic)
        })
    }
    const handleUpload = file => {
        setIsLoading(true)
        newCoverPic(user, file).then(res => {
            setCoverUrl(res)
            setIsLoading(false)
        })
    }

    return (
        <Content>
            <CoverPicContent>
                <CoverButton>
                    <InputFile onChange={e => handleUpload(e.target.files[0])} id="file" type="file"></InputFile>
                    <LabelFile for="file"><AiFillEdit size="20" style={{ marginRight: 10 }} /> {isLoading ? "Carregando..." : "Editar"} </LabelFile>
                </CoverButton>
                <CoverPic src={!coverUrl ? null : coverUrl}>
                </CoverPic>
            </CoverPicContent>
            <Container>
                <Sidebar />
                <FeedArea />
                <TrendsArea />
            </Container>

        </Content>
    );
}
