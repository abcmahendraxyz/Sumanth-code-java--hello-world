// pages/_app.js
import React from "react";
// import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <div id="portal"></div>
      <div id="root">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
