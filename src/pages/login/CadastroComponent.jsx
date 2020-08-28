import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { FormInput, InputCustom, FormLabel, ButtomCustom, ButtomLogin, SpanError } from './styles';
import InputMask from 'react-input-mask';
import { IoIosArrowRoundForward } from "react-icons/io";
import { uploadImage, signUp } from '../../services/auth'
import Upload from '../../components/UploadComponent'
import Filelist from '../../components/FileList'
import uniqueId from 'lodash/uniqueId'
import filesize from 'filesize'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import * as actionsUser from '../../redux/actions/userAction';

export default function CadastroComponent(props) {

  const { register, handleSubmit, errors } = useForm()
  let hist = useHistory()
  const dispatch = useDispatch();
  let [isError, setIsError] = useState(false)
  const [uploadFiles, setUploadFiles] = useState([])

  const onSubmit = async data => {
    setIsError(false)
    let url = ""
    if (uploadFiles.length > 0) {
      url = await uploadImage(uploadFiles[0])
    }

    let usuario = data
    usuario.photoURL = url
    signUp(usuario).then(res => {
      console.log(res)
      if (res.success) {
        dispatch(actionsUser.create(res.response));
        localStorage.setItem("User@testeferacode", JSON.stringify(res.response))
        hist.push("/home");
      } else {
        setIsError(true)
      }
    }).catch(err => {
      setIsError(true)
    })
  }

  const handleUpload = files => {
    const uploadFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }))
    setUploadFiles(uploadFiles)
  }

  return (
    <div style={{ paddingTop: 50, paddingRight: 20, paddingLeft: 40 }} className="animated fadeIn " >
      <h2 style={{ color: '#999999', fontSize: 30 }}>FeraCode Cadastro</h2>
      <form style={{ marginTop: 10, marginBottom: 10 }} onSubmit={handleSubmit(onSubmit)}>
        {isError && <h5 style={{ color: '#e67' }}>Email Já Cadastrado!</h5>}
        <FormInput>
          <FormLabel>Nome Completo</FormLabel>
          <InputCustom name="displayName" ref={register({ required: true })} />
          {errors.displayName && <SpanError>Este campo é obrigatório</SpanError>}
        </FormInput>

        <FormInput>
          <FormLabel>E-mail</FormLabel>
          <InputCustom name="email" ref={register({ required: true })} />
          {errors.email && <SpanError>Este campo é obrigatório</SpanError>}
        </FormInput>

        <FormInput>
          <FormLabel>Senha</FormLabel>
          <InputCustom name="password" ref={register({ required: true })} />
          {errors.password && <SpanError>Este campo é obrigatório</SpanError>}
        </FormInput>

        <FormInput>
          <FormLabel>Foto de Perfil</FormLabel>
          <Upload multiple={false} onlyImage={true} onUpload={handleUpload} />
          {!!uploadFiles.length && (
            <div>
              <Filelist files={uploadFiles} />
            </div>
          )}
        </FormInput>

        <div style={{ display: 'flex', width: 300, flexDirection: 'row', justifyContent: 'space-between' }}>
          <ButtomCustom type="submit" >
            {"Cadastrar"}
          </ButtomCustom>

          <ButtomLogin onClick={() => props.goToLogin()}>
            {"Login"}<IoIosArrowRoundForward style={{ width: 20, height: 18 }} />
          </ButtomLogin>
        </div>
      </form>
    </div>
  );
}
