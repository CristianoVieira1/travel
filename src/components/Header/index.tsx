import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useSession } from "../../context/Session";
import * as S from "./styles";

interface IProps {
  isIconBack?: boolean;
  isIconMenu?: boolean;
}

const Header = ({ isIconBack = true, isIconMenu = false }: IProps) => {
  const { session } = useSession();
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.Content>
        {isIconBack && (
          <Feather
            name="arrow-left"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
        )}

        {isIconMenu && <Feather name="menu" size={24} color="black" />}
        <S.UserImage>
          {session?.user?.photo ? (
            <S.Image source={{ uri: session.user.photo }} />
          ) : (
            <Feather name="camera" size={24} color="white" />
          )}
        </S.UserImage>
      </S.Content>
    </S.Container>
  );
};

export default Header;
