import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { DropContainer, UploadMessage } from './styles';
import uniqueId from "lodash/uniqueId"

export default class Upload extends Component {

  renderDragMessage=(isDragActive, isDragReject)=>{
    if(!isDragActive) return <UploadMessage>Arraste itens Aqui!</UploadMessage>

    if(isDragReject) return <UploadMessage type="error">Arquivo Não Suportado!</UploadMessage>

    return <UploadMessage type="success">Solte os arquivos aqui!</UploadMessage>
  }

  render() {
    let {onUpload, multiple, onlyImage} = this.props

    return (
      <Dropzone
        accept={(onlyImage ? ["image/*"]: ["image/*","application/pdf"])}
        multiple={multiple}
        onDropAccepted={onUpload}
      >
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer 
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
          >
            <input {... getInputProps()} />
            {this.renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
    );
  }
}
