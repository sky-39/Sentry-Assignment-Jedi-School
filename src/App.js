import React from "react";
import { useEffect } from "react";

const App = () => {
  useEffect(()=> {
    throw new Error('This is test sentry error.');
  }, [])

  return <div>
    <h1>Hello World</h1>
    <h2>This page has an error</h2>
  </div>
}

export default App;