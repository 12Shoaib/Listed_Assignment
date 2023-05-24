import { useState, useEffect } from "react";
import dashboard from "./dashboard.module.css";
import DashboardSidebar from "../../Components/DashboardSidebar/DashboardSidebar";
import DashboardHeader from "../../Components/Dashboardheader/DashboardHeader";
import DashboardCard from "../../Components/DashboardCard/DashboardCard";
import ActivityCard from "../../Components/ActivityCard/ActivityCard";
import TopProducts from "../../Components/TopProducts/TopProducts";

const Dashboard = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Data.json");
        if (!response.ok) {
          throw new Error("Failed to load the data");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={dashboard.container}>
      <div className={dashboard.section_one}>
        <DashboardSidebar />
      </div>
      <div className={dashboard.section_two}>
        <DashboardHeader />
        <DashboardCard data={data} />
        <ActivityCard />
        <TopProducts data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
