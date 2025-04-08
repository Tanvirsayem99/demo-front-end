import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


const authOptions: any = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const res = await fetch('http://localhost:8000/auth/login', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: credentials?.username, password: credentials?.password }),
        });
        const user = await res.json();
        console.log("this is user",user)
        if (user) {
          return user;
        } else {
          return null;
        }
         
      },
    }),
  ],
  secret: process.env.NEXAUTHSECRET,
  pages: {
    signIn: "/login",
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
