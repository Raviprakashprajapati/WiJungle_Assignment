import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const data = [
  {
    timestamp: "2019-01-02T03:50:09.097718",
    flow_id: 52373568,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 65036,
    dest_ip: "138.68.3.71",
    dest_port: 3306,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010937,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to mySQL port 3306",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  // Other data objects...
  {
    timestamp: "2019-01-02T03:50:10.386108",
    flow_id: 52491840,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 65386,
    dest_ip: "138.68.3.71",
    dest_port: 5915,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2002911,
      rev: 5,
      signature: "ET SCAN Potential VNC Scan 5900-5920",
      category: "Attempted Information Leak",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:50:10.421359",
    flow_id: 52507296,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 65438,
    dest_ip: "138.68.3.71",
    dest_port: 5432,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010939,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to PostgreSQL port 5432",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:50:10.576769",
    flow_id: 52568784,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 49238,
    dest_ip: "138.68.3.71",
    dest_port: 1433,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010935,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to MSSQL port 1433",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:50:10.585758",
    flow_id: 52576512,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 49269,
    dest_ip: "138.68.3.71",
    dest_port: 1521,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010936,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to Oracle SQL port 1521",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:50:10.621656",
    flow_id: 52589280,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 49306,
    dest_ip: "138.68.3.71",
    dest_port: 5811,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2002910,
      rev: 5,
      signature: "ET SCAN Potential VNC Scan 5800-5820",
      category: "Attempted Information Leak",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:50:11.315110",
    flow_id: 52710912,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 49678,
    dest_ip: "138.68.3.71",
    dest_port: 22,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2001219,
      rev: 19,
      signature: "ET SCAN Potential SSH Scan",
      category: "Attempted Information Leak",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:51:01.124914",
    flow_id: 52713600,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "61.176.222.167",
    src_port: 59947,
    dest_ip: "138.68.3.71",
    dest_port: 1433,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010935,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to MSSQL port 1433",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:51:01.124914",
    flow_id: 52713600,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "61.176.222.167",
    src_port: 59947,
    dest_ip: "138.68.3.71",
    dest_port: 1433,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010935,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to MSSQL port 1433",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:55:33.229176",
    flow_id: 53188032,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 51574,
    dest_ip: "138.68.3.71",
    dest_port: 1521,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010936,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to Oracle SQL port 1521",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:55:33.315220",
    flow_id: 53259600,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 51777,
    dest_ip: "138.68.3.71",
    dest_port: 5811,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2002910,
      rev: 5,
      signature: "ET SCAN Potential VNC Scan 5800-5820",
      category: "Attempted Information Leak",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:55:33.387137",
    flow_id: 53304960,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 51918,
    dest_ip: "138.68.3.71",
    dest_port: 1433,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010935,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to MSSQL port 1433",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:55:34.803129",
    flow_id: 53395344,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 52190,
    dest_ip: "138.68.3.71",
    dest_port: 22,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2001219,
      rev: 19,
      signature: "ET SCAN Potential SSH Scan",
      category: "Attempted Information Leak",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:55:46.588852",
    flow_id: 53397360,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "205.209.162.131",
    src_port: 53787,
    dest_ip: "138.68.3.71",
    dest_port: 1433,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010935,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to MSSQL port 1433",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:56:03.598202",
    flow_id: 53397696,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "113.10.171.28",
    src_port: 43844,
    dest_ip: "138.68.3.71",
    dest_port: 1433,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010935,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to MSSQL port 1433",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:56:08.277797",
    flow_id: 53398368,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "43.227.231.129",
    src_port: 48703,
    dest_ip: "138.68.3.71",
    dest_port: 1433,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010935,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to MSSQL port 1433",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:56:08.277797",
    flow_id: 53398368,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "43.227.231.129",
    src_port: 48703,
    dest_ip: "138.68.3.71",
    dest_port: 1433,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010935,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to MSSQL port 1433",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:56:08.277797",
    flow_id: 53398368,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "43.227.231.129",
    src_port: 48703,
    dest_ip: "138.68.3.71",
    dest_port: 1433,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2403362,
      rev: 46061,
      signature:
        "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 32",
      category: "Misc Attack",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:56:51.922127",
    flow_id: 53399376,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "176.119.4.12",
    src_port: 55068,
    dest_ip: "138.68.3.71",
    dest_port: 48968,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2402000,
      rev: 5047,
      signature: "ET DROP Dshield Block Listed Source group 1",
      category: "Misc Attack",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:57:27.555965",
    flow_id: 53400048,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "198.108.67.99",
    src_port: 21496,
    dest_ip: "138.68.3.71",
    dest_port: 3792,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2402000,
      rev: 5047,
      signature: "ET DROP Dshield Block Listed Source group 1",
      category: "Misc Attack",
      severity: 2,
    },
  },
];

const linearOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "This is a Linear graph about representating severity with given time ",
      color: "white",
    },
  },
};

const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "This is a Bar graph about representating Category with given time ",
      color: "white",
    },
  },
};

const pieOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "This is a pie graph about representating dest Port with given time ",
      color: "white",
    },
  },
};

function Dashboard() {
  const formateData = () => {
    const timeData = data.map((i) => new Date(i.timestamp).toLocaleString());
    const signature = data.map((i) => i.alert.signature);
    const category = data.map((i) => i.alert.category);
    const dest_port = data.map((i) => i.dest_port);
    const signature_id = data.map((i) => i.alert.signature_id);
    const severity = data.map((i) => i.alert.severity);

    return {
      timeData,
      signature,
      category,
      dest_port,
      signature_id,
      severity,
    };
  };

  const graphData = formateData();

  const linearData = {
    labels: graphData.timeData,

    datasets: [
      {
        label: "severity ",
        data: graphData.severity,
        backgroundColor: "cyan",
        borderColor: "black",
      },
    ],
  };

  const barData = {
    labels: graphData.timeData,

    datasets: [
      {
        label: "Category",
        data: graphData.signature_id,
        backgroundColor: "#FF7F7F",
        borderColor: "black",
      },
    ],
  };

  const pieData = {
    labels: graphData.timeData,

    datasets: [
      {
        label: "dest_port",
        data: graphData.dest_port,
        backgroundColor: "#E0FFFF",
        borderColor: "black",
      },
    ],
  };

  return (
    <div className="flex flex-col gap-10 justify-center  mb-10">
      <div className="bg-slate-900 w-[80%] m-auto p-4 ">
        <Line data={linearData} options={linearOptions} />
      </div>

      <div className="bg-slate-900 w-[80%] m-auto p-4 ">
        <Bar data={barData} options={barOptions} />
      </div>

      <div className="bg-slate-900 w-[80%] m-auto p-4 ">
        <Pie data={pieData} options={pieOptions} />
      </div>
    </div>
  );
}

export default Dashboard;
