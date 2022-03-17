import C from "./constants";

export const updateUserInfo = (data) => ({
  type: C.UPDATE_USER_INFO,
  data,
});

export const changeTheme = (theme) => ({
  type: C.CHANGE_THEME,
  theme,
});

export const toggleSidenav = () => ({
  type: C.TOGGLE_SIDENAV,
});
