import C from "../constants";

export default function user(state = {}, payload) {
  let { type, theme } = payload;
  switch (type) {
    case C.CHANGE_THEME:
      return {
        ...state,
        theme: theme,
      };
    case C.TOGGLE_SIDENAV:
      return {
        ...state,
        screen: {
          ...state.screen,
          isSidenavBarExpanded: !state.screen.isSidenavBarExpanded,
        },
      };
    default:
      return state;
  }
}
