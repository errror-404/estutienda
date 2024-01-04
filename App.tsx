import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./routes/MainNavigation";
import { StripeProvider } from "@stripe/stripe-react-native";

const App = () => {
  return (
    <StripeProvider publishableKey="pk_test_51LVUjIJBFYzkF3lyiHqPAwKYZ6IvfjNiTzOgcGj5ddM1Wh9c6VMWu44n1zImbwbbkppOajOSwZ0uXOuBfcfoCbX700dm5MhXNB">
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </StripeProvider>
  );
};

export default App;
