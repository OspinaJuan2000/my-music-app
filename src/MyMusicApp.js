import React from "react";
import GitHubIconSidebar from "./components/layout/GitHubIconSidebar";
import AppRouter from "./components/router/AppRouter";

const MyMusicApp = () => {
  return (
    <>
      <GitHubIconSidebar url="https://github.com/ospinajuan2000" />
      <AppRouter />
    </>
  );
};

export default MyMusicApp;
