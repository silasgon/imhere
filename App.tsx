import { Home } from "./src/screems/Home";

import { StatusBar } from "react-native";
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <Home />
    </>
  );
}