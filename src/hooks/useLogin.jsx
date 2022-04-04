import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';

const magic = new Magic('pk_live_0D019DEC03807D93', {
  extensions: [new OAuthExtension()],
});

function useLogin() {
  const loginWithGoogle = async () => {
    await magic.oauth.loginWithRedirect({
      provider: 'google' /* 'google', 'facebook', 'apple', or 'github' */,
      redirectURI:
        'https://jobzi-auth-with-magic-link-p6xxg66537555-3000.githubpreview.dev/',
    }).then((res)=>{
      console.log(res);
    });
  };

  const information = async () =>{
    console.log("here")
    const resul1 = await magic.user.isLoggedIn()
    console.log(resul1)
    //  const resul2 = await magic.oauth.getRedirectResult();
    //  console.log(resul2)
    //  const profile = JSON.stringify(resul2.oauth.userInfo, undefined, 2);
    //  alert(profile);
    const resul3 = await magic.user.getMetadata();
    console.log(resul3)
     console.log(await magic.user)
    const resul4 = await magic.user.getIdToken()
    console.log(resul4)
    console.log("fin")
  }
  
  const logOut = async () => {
    await magic.user.logout();
    alert("LogOut")
  }

  return {
    loginWithGoogle,
    information,
    logOut,
  };
}

export default useLogin;
