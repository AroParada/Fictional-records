import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  View, 
  Card,
} from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import aws_exports from "../aws-exports";
Auth.configure(aws_exports);

function LoginCard({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default  withAuthenticator(LoginCard);
