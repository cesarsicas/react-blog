export const TOKEN_KEY = "c7bff5ebaa17fa317d18c5eb659084f6a6e204b76449cde83f39fdd59a36bced";

export function isAuthenticated() {
  return localStorage.getItem(TOKEN_KEY) !== null;
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function login(token) {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};