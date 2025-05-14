export enum AppPathKeys {
  HOME = "HOME",
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  CONTACT = "CONTACT",
  PROFILE = "PROFILE",
  ABOUT = "ABOUT",
  ADOPT = "ADOPT",
  UNKNOWN = "UNKNOWN",
}
export const AppRoutes: Record<AppPathKeys, string> = {
  [AppPathKeys.LOGIN]: "/login",
  [AppPathKeys.REGISTER]: "/register",
  [AppPathKeys.HOME]: "/home",
  [AppPathKeys.CONTACT]: "/contact",
  [AppPathKeys.PROFILE]: "/profile",
  [AppPathKeys.ABOUT]: "/about",
  [AppPathKeys.ADOPT]: "/adopt",
  [AppPathKeys.UNKNOWN]: "*",
};
