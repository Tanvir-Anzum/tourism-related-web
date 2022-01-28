import React, { useState } from "react";
import AddEvents from "../../AddEvents/AddEvents";
import "./AdminDashboard.css";
import Events from "./../../Events/Events";
import Orders from "../../Orders/Orders";


const AdminDashboard = () => {
  const [control, setControl] = useState("orders");

  console.log(control);
  return (
    <div className="admin-container">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row admin-container">
            <div className="col-md-3 ">
              <div className="admin-area p-1">
                <h6>Dashboard</h6>
                <div className="all-menu mt-5">
                  <li
                    onClick={() => setControl("orders")}
                    className="admin-menu p-2"
                  >
                    {/* Orders */}
                  </li>
                  <li
                    onClick={() => setControl("addService")}
                    className="admin-menu p-2"
                  >
                    Add Service
                  </li>
                  
                </div>
              </div>
            </div>
            <div className="col-md-9 text-center  text-center">
              {control === "orders" && <Orders></Orders>}
              {control === "addService" && <AddEvents></AddEvents> }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
