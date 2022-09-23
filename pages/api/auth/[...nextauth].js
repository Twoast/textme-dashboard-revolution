import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        '27233645787-5su9ctjfl06tjbbdkv6vopijnf0eliap.apps.googleusercontent.com',
      clientSecret: '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',
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code'
    })
  ],
  jwt: {
    encryption: true
  },
  secret: 'secret token',
  callbacks: {
    async jwt(token, account) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
    redirect: async (url, _baseUrl) => {
      return Promise.resolve('/login');
    }
  }
});
