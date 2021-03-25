import Dashboard from "../../components/Dashboard";
import StockList from "../../components/StockList";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage__container">
        <Dashboard />
        <StockList />
      </div>
    </div>
  );
}
