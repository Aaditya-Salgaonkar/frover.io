import React from 'react';
import { ClerkProvider, SignIn, RedirectToSignIn, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

function SignInPage() {
  return (
    <ClerkProvider frontendApi="your-frontend-api">
      <SignedOut>
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </SignedOut>
      <SignedIn>
        <RedirectToSignIn>
          <UserButton />
        </RedirectToSignIn>
      </SignedIn>
    </ClerkProvider>
  );
}

export default SignInPage;