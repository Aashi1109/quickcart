import config from "@/config";
import { connectDB } from "@/lib/database";
import { User } from "@/models";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

// @ts-ignore
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: config.nextAuth.google.clientId,
      clientSecret: config.nextAuth.google.clientSecret,
      authorization: {
        params: { prompt: "consent" },
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      await connectDB();
      const sessionUser = await User.findOne({ email: session?.user?.email });
      // @ts-ignore
      if (session.user) session.user.id = sessionUser._id;
      return session;
    },
    async signIn({ profile }) {
      try {
        console.log(profile?.image);
        await connectDB();
        const userExists = await User.findOne({ email: profile?.email });
        if (!userExists) {
          await User.create({
            email: profile?.email,
            username: profile?.name?.replace(" ", "").toLowerCase(),
            image: profile?.image,
            name: profile?.name,
          });
        }
        return true;
      } catch (error) {
        console.error(`Error in signing in ${error}`);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
