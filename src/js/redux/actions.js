import C from "./constants";

export const changeTheme = (theme) => ({
  type: C.CHANGE_THEME,
  theme,
});

export const toggleSidenav = () => ({
  type: C.TOGGLE_SIDENAV,
});
