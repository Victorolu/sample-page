import "./PageLayout.scss";
import { Header } from "./Header";
import { SideBar } from "../Compound/SideBar";
import { NewsFeedPage } from "../Pages/NewsFeedPage";

export default function PageLayout() {
  return (
    <div className="page-layout">
      <Header />
      <main className="page-content">
        <NewsFeedPage />
      </main>
      <SideBar />
    </div>
  );
}
