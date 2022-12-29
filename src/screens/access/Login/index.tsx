import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import LogoIcon from "../../../assets/icons/logo_icon.svg";
import Facebook from "../../../assets/icons/redes_socias/facebook_blue.svg";
import Google from "../../../assets/icons/redes_socias/google_red.svg";
import Instagram from "../../../assets/icons/redes_socias/instagram_linear.svg";
import Background from "../../../assets/images/background_login.png";
import Button from "../../../components/Button";
import InputText from "../../../components/InputText";
import * as S from "./styles";

const Login = () => {
  const navigation = useNavigation();
  const [password, setPasswordValue] = useState("");
  const [email, setEmail] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  return (
    <S.Container>
      <S.Header source={Background} resizeMode={"cover"}>
        <LogoIcon width={50} height={50} style={{ marginTop: 30 }} />
        <S.Subtitle>Que bom ter você de volta aqui!</S.Subtitle>
      </S.Header>

      <S.Content>
        <InputText
          value={email}
          keyboardType="email-address"
          validation={validationMessage}
          onChangeText={setEmail}
          label="Email"
          placeholder="Digite seu email"
          clearValidation={() => setValidationMessage("")}
        />

        <InputText
          value={password}
          displaySecureIndicator
          keyboardType="default"
          validation={validationMessage}
          onChangeText={setPasswordValue}
          label="Senha"
          placeholder="Senha"
          clearValidation={() => setValidationMessage("")}
        />
      </S.Content>

      <S.View>
        <Button
          onPress={() => {}}
          title="Entrar"
          type='accept'
          size="large"
        />
        <S.Wrapper>
          <S.Text>Ou</S.Text>
          <S.SociaisView>
            <Facebook width={45}  onPress={() => console.log("face")}/>
            <Instagram width={45}  onPress={() => console.log("insta")}/>
            <Google width={45}  onPress={() => console.log("google")}/>
          </S.SociaisView>
          <S.Register>
            <S.Accont>Ainda não tem conta?</S.Accont>
            <S.AccontRegister onPress={() => {}}>
              <S.AccontRegisterText>Registrar</S.AccontRegisterText>
            </S.AccontRegister>
          </S.Register>
        </S.Wrapper>
      </S.View>
    </S.Container>
  );
};

export default Login;
