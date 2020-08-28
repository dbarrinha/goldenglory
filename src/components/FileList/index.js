import React from 'react';

import { Container, Fileinfo, Preview } from './styles';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
import { MdCheckCircle, MdError, MdPictureAsPdf } from "react-icons/md"
const Filelist = ({ files }) => (
    <Container>
        {files.map(item => {
            let nome = item.name.toLocaleLowerCase()
            return (<li key={item.id}>
                <Fileinfo>
                    {nome.includes("pdf") ?
                        <MdPictureAsPdf style={{ marginRight: '10px' }} size={36} color="#7159c1" />
                        :
                        <Preview src={item.preview} />
                    }
                    <div>
                        <strong>{item.name}</strong>
                        <span>
                            {item.readableSize}
                        </span>
                    </div>
                </Fileinfo>
                <div>
                    {!item.uploaded && !item.error && (
                        <CircularProgressbar
                            styles={{
                                root: { width: 24 },
                                path: { stroke: "#7159c1" }
                            }}
                            strokeWidth={10}
                            value={item.progress}
                        />
                    )}
                    
                    {item.uploaded && <MdCheckCircle style={{ marginRight: 8 }} size={24} color="#78e5d5" />}
                    {item.error && <MdError style={{ marginRight: 8 }} size={24} color="#e57878" />}

                </div>
            </li>)
        })}
    </Container>
);

export default Filelist;

