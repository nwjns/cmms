export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ login }}>
      {children}
    </AuthContext.Provider>
  );
};
