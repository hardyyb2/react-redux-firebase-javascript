const createUserDetails = (user) => {
  const userDetails = {
    displayName: user?.displayName ?? "",
    email: user?.email ?? "",
    phoneNumber: user?.phoneNumber ?? "",
    photoURL: user?.photoURL ?? "",
    refreshToken: user?.refreshToken ?? "",
    uid: user?.uid ?? "",
  };
  return userDetails;
};

export default createUserDetails;
