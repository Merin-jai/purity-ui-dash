import React,{ useEffect } from "react";
import "../styles/Dashcrad3.css";
import Graph1 from '../images/Graph.png';
import Graph2 from '../images/Graph (1).png';
import ApexCharts from 'apexcharts'


const DashboardCharts = () => {
    useEffect(() => {
        const options = {
          series: [
            {
              name: "series1",
              data: [31, 40, 28, 51, 42, 109, 100],
            },
            {
              name: "series2",
              data: [11, 32, 45, 32, 34, 52, 41],
            },
          ],
          chart: {
            height: 350,
            type: "area",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T01:30:00.000Z",
              "2018-09-19T02:30:00.000Z",
              "2018-09-19T03:30:00.000Z",
              "2018-09-19T04:30:00.000Z",
              "2018-09-19T05:30:00.000Z",
              "2018-09-19T06:30:00.000Z",
            ],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
        };
    
        const chart = new ApexCharts(document.querySelector("#chart"), options);
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
          <img src= { Graph1 } alt="Bar Chart" />
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
          <div id="chart"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
