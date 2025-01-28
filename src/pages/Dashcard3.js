import React,{ useEffect } from "react";
import "../styles/Dashcrad3.css";
import Graph1 from '../images/Graph.png';
import Graph2 from '../images/Graph (1).png';
import ApexCharts from 'apexcharts'


const DashboardCharts = () => {
    useEffect(() => {
        var options = {
            series: [
              {
                name: "Values",
                data: [350, 220, 100, 300, 500, 400, 450],
              },
            ],
            chart: {
                height : "100%",
                width : "100%",
              type: "bar",
              height: 350,
              background: "linear-gradient(135deg, #2e2f45, #1a1b2c)", // Dark gradient background
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: "20%",
                borderRadius: 5, // Rounded corners
                borderRadiusApplication: "all", // Rounded on both top and bottom
              },
            },
            dataLabels: {
              enabled: false, // Hides labels on the bars
            },
            stroke: {
              show: false, // Disables bar border stroke
            },
            xaxis: {
              labels: {
                show: false, // Hides X-axis labels
              },
              axisBorder: {
                show: false, // Hides X-axis baseline
              },
            },
            yaxis: {
              labels: {
                style: {
                  colors: "#ffffff", // White Y-axis labels
                  fontSize: "12px",
                },
              },
            },
            grid: {
              show: false, // Removes grid lines
            },
            fill: {
              colors: ["#ffffff"], // White bars
            },
            tooltip: {
              enabled: false, // Disables tooltip
            },
          };
          
          var chart = new ApexCharts(document.querySelector("#chart"), options);
          chart.render();
          
        // Cleanup on component unmount
        return () => {
          chart.destroy();
        };
      }, []);
  return (
    <div className="dashboard-charts">
      {/* Bar Chart Section */}
      <div className="chart-card">
        <div className="chart-image">
          {/* <img src= { Graph1 } alt="Bar Chart" /> */}
          <div id="chart" className="chart-graph1"></div>
        </div>
        <div className="chart-details">
          <h3>Active Users</h3>
          <p className="chart-subtitle">
            <span className="positive">(+23)</span> than last week
          </p>
          <div className="chart-stats">
            <div>
              <p>32,984</p>
              <span>Users</span>
            </div>
            <div>
              <p>2.42m</p>
              <span>Clicks</span>
            </div>
            <div>
              <p>2,400$</p>
              <span>Sales</span>
            </div>
            <div>
              <p>320</p>
              <span>Items</span>
            </div>
          </div>
        </div>
      </div>

      {/* Line Chart Section */}
      <div className="chart-card">
        <h3>Sales Overview</h3>
        <p className="chart-subtitle">
          <span className="positive">(+5)</span> more in 2021
        </p>
        <div className="chart-image">
          {/* <img src= { Graph2 } alt="Line Chart" /> */}
          {/* <div id="chart1" className="chart-graph1"></div> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
