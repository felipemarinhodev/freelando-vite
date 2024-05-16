import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Col, Row } from "react-grid-system";
import { Link } from "react-router-dom";
import { Botao } from "../../componentes/Botao/Botao";
import { CampoTexto } from "../../componentes/CampoTexto/CampoTexto";
import { ListaSupensa } from "../../componentes/ListaSuspensa/ListaSuspensa";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";

const estadosBrasileiros = [
  { text: "Acre", value: "AC" },
  { text: "Alagoas", value: "AL" },
  { text: "Amapá", value: "AP" },
  { text: "Amazonas", value: "AM" },
  { text: "Bahia", value: "BA" },
  { text: "Ceará", value: "CE" },
  { text: "Distrito Federal", value: "DF" },
  { text: "Espírito Santo", value: "ES" },
  { text: "Goiás", value: "GO" },
  { text: "Maranhão", value: "MA" },
  { text: "Mato Grosso", value: "MT" },
  { text: "Mato Grosso do Sul", value: "MS" },
  { text: "Minas Gerais", value: "MG" },
  { text: "Pará", value: "PA" },
  { text: "Paraíba", value: "PB" },
  { text: "Paraná", value: "PR" },
  { text: "Pernambuco", value: "PE" },
  { text: "Piauí", value: "PI" },
  { text: "Rio de Janeiro", value: "RJ" },
  { text: "Rio Grande do Norte", value: "RN" },
  { text: "Rio Grande do Sul", value: "RS" },
  { text: "Rondônia", value: "RO" },
  { text: "Roraima", value: "RR" },
  { text: "Santa Catarina", value: "SC" },
  { text: "São Paulo", value: "SP" },
  { text: "Sergipe", value: "SE" },
  { text: "Tocantins", value: "TO" },
];

const schema = Yup.object().shape({
  nome: Yup.string()
    .required("Campo obrigátorio")
    .min(2, "Digite seu nome completo"),
  cidade: Yup.string()
    .required("Campo obrigátorio")
    .max(58, "Digite uma cidade válida"),
  estado: Yup.string().required("Campo obrigátorio"),
  email: Yup.string()
    .required("Campo obrigátorio")
    .email("Digite um e-mail válido."),
  telefone: Yup.string()
    .required("Campo obrigátorio")
    .matches(/^\d{11}$/, "Número de telefone inválido."),
  senha: Yup.string().required("Campo obrigátorio"),
  confirmarSenha: Yup.string()
    .required("Campo obrigátorio")
    .oneOf([Yup.ref("senha"), null], "As senhas não conferem"),
  termos: Yup.boolean().oneOf([true], "Você deve aceitar os termos"),
});

const DadosPessoais = () => {
  return (
    <Formik
      initialValues={{
        nome: "",
        estado: "",
        cidade: "",
        telefone: "",
        email: "",
        senha: "",
        confirmarSenha: "",
      }}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log("dados do formulário", values);
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <div style={{ textAlign: "center" }}>
            <Tipografia variante="h1" componente="h1">
              Crie seu cadastro
            </Tipografia>
            <Tipografia variante="body" componente="body">
              Crie seu perfil gratuitamente para começar a trabalhar com os
              melhores freelancers. Em seguida, você poderá dar mais detalhes
              sobre suas demandas e sobre sua forma de trabalho.
            </Tipografia>
          </div>
          <Row>
            <Col>
              <CampoTexto titulo="Nome completo" name="nome" type="text" />
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={4} sm={4}>
              <ListaSupensa titulo="Estado" opcoes={estadosBrasileiros} />
            </Col>
            <Col lg={8} md={8} sm={8}>
              <CampoTexto titulo="Cidade" name="cidade" type="text" />
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={6}>
              <CampoTexto titulo="E-mail" name="email" type="email" />
            </Col>
            <Col lg={6} md={6} sm={6}>
              <CampoTexto titulo="Telefone" name="telefone" type="tel" />
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={6}>
              <CampoTexto titulo="Senha" name="senha" type="password" />
            </Col>
            <Col lg={6} md={6} sm={6}>
              <CampoTexto
                titulo="Confirme sua senha"
                name="confirmarSenha"
                type="password"
              />
            </Col>
          </Row>
          <Row>
            <label>
              <Field type="checkbox" name="termos" />
              Aceito os termos e condições
            </label>
          </Row>
          {formik.errors.termos ? (
            <div style={{ color: "red", marginTop: "4px" }}>
              {formik.errors.termos}
            </div>
          ) : null}
          <Row>
            <Col lg={6} md={6} sm={6}>
              <Link to="/cadastro/interesses">
                <Botao variante="secundaria">Anterior</Botao>
              </Link>
            </Col>
            <Col lg={6} md={6} sm={6}>
              <div style={{ textAlign: "right" }}>
                {/* <Link to='/cadastro/concluido'> */}
                <Botao>Próxima</Botao>
                {/* </Link> */}
              </div>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default DadosPessoais;
