export const TOKEN_KEY = "c7bff5ebaa17fa317d18c5eb659084f6a6e204b76449cde83f39fdd59a36bced";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};