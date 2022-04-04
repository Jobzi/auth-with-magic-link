import useLogin from '../hooks/useLogin';

function Login() {
  const { loginWithGoogle } = useLogin();

  const handleClink = (e) => {
    e.preventDefault();
    console.log('HERE');
    loginWithGoogle();
  };
  return (
    <>
      <h1>Auth with Google</h1>
      <button onClick={handleClink}>Google</button>
    </>
  );
}

export default Login;
