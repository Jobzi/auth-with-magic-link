import useLogin from '../hooks/useLogin';

function Login() {
  const { loginWithGoogle, information,logOut } = useLogin();

  const handleClink = (e) => {
    e.preventDefault();
    console.log('HERE');
    loginWithGoogle();
  };
  const handleClinkInformation = (e) => {
    e.preventDefault();
    console.log('HERE');
    information();
  };
  return (
    <>
      <h1>Auth with Google</h1>
      <button onClick={handleClink}>Google</button>
      <button onClick={handleClinkInformation}>handleClinkInformation</button>
      <button onClick={logOut}>log</button>
    </>
  );
}

export default Login;
