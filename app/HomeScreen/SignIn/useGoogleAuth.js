import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { useEffect } from 'react';
import { makeRedirectUri } from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

export function useGoogleAuth() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '688063412153-3u9aodqgtr9kptfh70o5qsekjee0nenv.apps.googleusercontent.com',
    expoClientId: '688063412153-h7honm03p6mob6gbeihsj3ean2ne6hlc.apps.googleusercontent.com',
    iosClientId: 'SEU_IOS_CLIENT_ID',
    redirectUri: makeRedirectUri({ useProxy: true }),
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      console.log('Token de acesso:', authentication?.accessToken);
    }
  }, [response]);

  return { promptAsync, request };
}
