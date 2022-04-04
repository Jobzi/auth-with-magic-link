import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';

const magic = new Magic('pk_live_5BE2BF80F5020B3D', {
  extensions: [new OAuthExtension()],
});

function useLogin() {
  const loginWithGoogle = async () => {
    const result = await magic.oauth.loginWithRedirect({
      provider: 'google' /* 'google', 'facebook', 'apple', or 'github' */,
      redirectURI:
        'https://auth.magic.link/v1/oauth2/w2xdYaX3MIl52e5uI0M_NDkQCUtGUGYNzw_bZzmobQE=/callback',
      scope: ['user:email'] /* optional */,
    });
    console.log(result);
  };

  return {
    loginWithGoogle,
  };
}

export default useLogin;
