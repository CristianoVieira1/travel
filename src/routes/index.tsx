import { NavigationContainerRef } from "@react-navigation/native";
import React, { createRef } from "react";

import { ParamList } from "../types/routes";
import { PrivateRoutes } from "./private.routes";
import { PublicRoutes } from "./public.routes";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamList {}
  }
}

export const navigationRef = createRef<NavigationContainerRef<ParamList>>();

interface Schema {
  isAuthenticated: boolean;
}

const Routes = ({ isAuthenticated }: Schema) => {
  return isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Routes;
