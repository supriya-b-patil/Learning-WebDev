export const saveUserInfo = data => {
   const { name, email, isAdmin, token } = data;
   localStorage.setItem("name", name);
   localStorage.setItem("email", email);
   localStorage.setItem("isAdmin", isAdmin);
   localStorage.setItem("token", token);
}

export const logout = () => {
   localStorage.clear();
   window.location.href = "/";
};