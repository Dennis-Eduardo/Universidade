import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import "./style.css";


const Formulario = () => {
    const validarCampo = (value) =>{
        let error;
        if(!value){
            error = "*Campo Obrigatorio"
        }
        return error;
    }
    const validarIdade = (value)=>{
        let error;
        if(!value){
            error = "*Campo Obrigatorio"
        }
        if(value < 16){
            error = "Somente maiores de 16 anos"
        }
        return error;
    }
    const validarCPF = (value)=>{
        let error;
        
        if(!value){
            error = "*Campo Obrigatorio"
        }
        if(value.length!==14 || value[3]!=="." || value[7]!=="."||value[11]!=="-"){
            error ="Formato Invalido"
        }
        return error;
    }
    const validarMatricula = (value)=>{
        let error;

        if(!value){
            error = "*Campo Obrigatorio"
        }
        if(value.length!==9){
            error ="Formato Invalido"
        }
        return error;
    }
    const validarCEP = (value)=>{
        let error;

        if(!value){
            error = "*Campo Obrigatorio"
        }
        if(value.length!==9 || value[5]!=="-"){
            error ="Formato Invalido"
        }
        return error;
    }
    const estadosUF= ["RO","AC","AM","RR","PA","AP","TO","MA","PI","CE","RN","PB","PE","AL",
                      "SE","BA","MG","ES","RJ","SP","PR","SC","RS","MS","MT","GO","DF"];
    const validarEstado = (value)=>{
        let error;
        if(!value){
            error = "*Campo Obrigatorio"
        }else{
            if(!estadosUF.includes(value)){
                error="UF não encontrada"
            }
        }
        return error;
    }
    const handleSubmitting = (values, {setSubmitting}) =>{
        setTimeout(() =>{
            console.info(JSON.stringify(values,null,12));
            setSubmitting(false);
        },1000);
    };

    return (
        <div className="body">
            <div className="formulario">
            <Formik  initialValues ={{nome: '', idade:'', cpf: '', matricula:'', curso:'', endereco:'',
                                  numeroEnd:'', complementoEnd:'', bairro:'', cidade:'', estado:'', cep:''}}
                 onSubmit ={handleSubmitting}>
            {({values, handleChange, handleSubmit,handleBlur, isSubmitting}) => (
                <form onSubmit={handleSubmit}>
                    <label className="nome">
                        Nome Completo*:
                            <Field type="text" name ="nome"
                                validate={validarCampo}
                                onBlur = {handleBlur}
                                onChange={handleChange}

                            />  
                            <ErrorMessage name ="nome"/> 
                    </label>
                    <br/>
                    <label>
                        Idade*:
                            <Field type="text" name ="idade"
                                validate={validarIdade}
                                onBlur = {handleBlur}
                                onChange={handleChange}
                            />  
                            <ErrorMessage name ="idade"/> 
                    </label>
                    <br/>
                    <label>
                        CPF*:
                            <Field type="text" name ="cpf"
                                validate={validarCPF}
                                onBlur = {handleBlur}
                                onChange={handleChange}
                            />  
                            <ErrorMessage name ="cpf"/> 
                    </label>
                    <br/>
                    <label>
                        Matricula*:
                            <Field type="text" name ="matricula"
                                validate={validarMatricula}
                                onBlur = {handleBlur}
                                onChange={handleChange}
                            />  
                            <ErrorMessage name ="matricula"/> 
                    </label>
                    <br/>
                    <label>
                        Curso*:
                            <Field type="text" name ="curso"
                                validate={validarCampo}
                                onBlur = {handleBlur}
                                onChange={handleChange}
                            />  
                            <ErrorMessage name ="curso"/> 
                    </label>
                    <br/>
                    <label>
                        Endereco:
                            <Field type="text" name ="endereco"
                                validate={validarCampo}
                                onBlur = {handleBlur}
                                onChange={handleChange}
                            />  
                            <ErrorMessage name ="endereco"/> 
                    </label>
                    <br/>
                    <label>
                        Numero:
                            <Field type="text" name ="numeroEnd"
                                onBlur = {handleBlur}
                                onChange={handleChange}
                            />  
                            <ErrorMessage name ="numeroEnd"/> 
                    </label>
                    <br/>
                    <label>
                        Complemento:
                            <Field type="text" name ="complementoEnd"
                                onBlur = {handleBlur}
                                onChange={handleChange}
                            />  
                            <ErrorMessage name ="complementoEnd"/> 
                    </label>
                    <br/>
                    <label>
                        Bairro*:
                            <Field type="text" name ="bairro"
                                validate={validarCampo}
                                onBlur = {handleBlur}
                                onChange={handleChange}
                            />  
                            <ErrorMessage name ="bairro"/> 
                    </label>
                    <br/>
                    <label>
                        Cidade:
                            <Field type="text" name ="cidade"
                                validate={validarCampo}
                                onBlur = {handleBlur}
                                onChange={handleChange}
                            />  
                            <ErrorMessage name ="cidade"/> 
                    </label>
                    <br/>
                    <label>
                        Estado:
                            <Field type="text" name ="estado"
                                    validate={validarEstado}
                                    onBlur = {handleBlur}
                                    onChange={handleChange}
                                />  
                                <ErrorMessage name ="estado"/> 
                    </label>
                    <br/>
                    <label>
                        CEP:
                            <Field type="text" name ="cep"
                                validate={validarCEP}
                                onBlur = {handleBlur}
                                onChange={handleChange}
                            />  
                            <ErrorMessage name ="cep"/> 
                    </label>
                    <br/>
                    <label>
                        <input type="submit" value="Login" disabled={isSubmitting}/>   
                    </label>
                </form>
            )}
        </Formik>
            </div>
        </div>
        
    );
}

export default Formulario ;
