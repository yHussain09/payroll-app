import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/_Footer";
import NavigationSidebar from "../../components/_NavigationSidebar";
import Navbar from "../../components/_Navbar";
import ScrollToTopButton from "../../components/_ScrollToTopButton";
import Card from "../../components/_Card";
import DataTable from "../../components/_DataTable";
import DataForm from "../../components/_DataForm";
import Container from "../../components/_Container";
import { employeesData } from "../../data/employees";

export default function Dashboard() {
  return (
    <div id="wrapper">
      {/* <!-- Sidebar --> */}
      <NavigationSidebar />
      {/* <!-- End of Sidebar --> */}

      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          {/* <!-- Topbar --> */}
          <Navbar />
          {/* <!-- End of Topbar --> */}

          {/* <!-- Begin Page Content --> */}
          <div className="container-fluid">
            <Outlet />
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              {/* <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              <a
                href="#"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i className="fas fa-download fa-sm text-white-50"></i> Generate
                Report
              </a> */}
            </div>

            {/* <!-- Content Row --> */}
            <div className="row">
              {/* <!-- Earnings (Monthly) Card Example --> */}
              {/* <div className="col-xl-3 col-md-6 mb-4">
                <Card
                  title="earning (monthly)"
                  description="$40,000"
                  typeClass="primary"
                  iconClass="fas fa-calendar"
                />
              </div> */}
              {/* <div className="col-xl-3 col-md-6 mb-4">
                <Card
                  title="Earnings (Annual)"
                  description="$215,000"
                  typeClass="success"
                  iconClass="fas fa-dollar-sign "
                />
              </div> */}
              {/* <!-- Earnings (Monthly) Card Example --> */}

              {/* <!-- Earnings (Monthly) Card Example --> */}
              {/* <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                          Tasks
                        </div>
                        <div className="row no-gutters align-items-center">
                          <div className="col-auto">
                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                              50%
                            </div>
                          </div>
                          <div className="col">
                            <div className="progress progress-sm mr-2">
                              <div
                                className="progress-bar bg-info"
                                role="progressbar"
                                style={{
                                  width: "50%",
                                  ariaValuenow: "50",
                                  ariaValuemin: "0",
                                  ariaValuemax: "100",
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <!-- Pending Requests Card Example --> */}
              {/* <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                          Pending Requests
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          18
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-comments fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            {/* <!-- Content Row --> */}

            {/* <div className="row">
              <div className="col-xl-12 col-md-6 mb-4">
                <DataTable title="DataTables Example" data={dataTableData} />
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12 col-md-6 mb-4">
                <DataForm title="QWERTY" fields={dataTableData.columns} />
              </div>
            </div> */}

            {/* <Container data={employeesData} /> */}

            {/* <!-- Content Row --> */}
          </div>
          {/* <!-- /.container-fluid --> */}
        </div>
        {/* <!-- End of Main Content --> */}

        {/* <!-- Footer --> */}
        <Footer />
        {/* <!-- End of Footer --> */}
      </div>
      {/* <!-- End of Content Wrapper --> */}
      {/* <ScrollToTopButton /> */}
    </div>
  );
}
