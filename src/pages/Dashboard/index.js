import React from "react";
import Footer from "../../components/Footer";
import NavigationSidebar from "../../components/NavigationSidebar";
import Navbar from "../../components/Navbar";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Card from "../../components/Card";
import DataTable from "../../components/DataTable";
import DataForm from "../../components/DataForm";

const dataTableData = {
  columns: [
    { _id: 0, columnField: "name", columnName: "Name" },
    { _id: 1, columnField: "position", columnName: "Position" },
    { _id: 2, columnField: "office", columnName: "Office" },
    { _id: 3, columnField: "age", columnName: "Age" },
    { _id: 4, columnField: "startDate", columnName: "Start Date" },
    { _id: 5, columnField: "salary", columnName: "Salary" },
  ],
  rows: [
    {
      _id: 0,
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: 61,
      startDate: "25-04-2011",
      salary: "320800",
    },
    {
      _id: 1,
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: 63,
      startDate: "25-07-2011",
      salary: "170750",
    },
    {
      _id: 2,
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: 66,
      startDate: "12-01-2009",
      salary: "86000",
    },
    {
      _id: 3,
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      age: 22,
      startDate: "29-03-2012",
      salary: "433060",
    },
    {
      _id: 4,
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      age: 33,
      startDate: "28-11-2008",
      salary: "162700",
    },
    {
      _id: 5,
      name: "Brielle Williamson",
      position: "Integration Specialist",
      office: "	New York",
      age: 61,
      startDate: "02-12-2012",
      salary: "372000",
    },
  ],
};

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
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              <a
                href="#"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i className="fas fa-download fa-sm text-white-50"></i> Generate
                Report
              </a>
            </div>

            {/* <!-- Content Row --> */}
            <div className="row">
              {/* <!-- Earnings (Monthly) Card Example --> */}
              <div className="col-xl-3 col-md-6 mb-4">
                <Card
                  title="earning (monthly)"
                  description="$40,000"
                  typeClass="primary"
                  iconClass="fas fa-calendar"
                />
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <Card
                  title="Earnings (Annual)"
                  description="$215,000"
                  typeClass="success"
                  iconClass="fas fa-dollar-sign "
                />
              </div>
              {/* <!-- Earnings (Monthly) Card Example --> */}

              {/* <!-- Earnings (Monthly) Card Example --> */}
              <div className="col-xl-3 col-md-6 mb-4">
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
              </div>

              {/* <!-- Pending Requests Card Example --> */}
              <div className="col-xl-3 col-md-6 mb-4">
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
              </div>
            </div>

            {/* <!-- Content Row --> */}

            <div className="row">
              <div className="col-xl-12 col-md-6 mb-4">
                <DataTable title="DataTables Example" data={dataTableData} />
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12 col-md-6 mb-4">
                <DataForm title="QWERTY" />
              </div>
            </div>

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
      <ScrollToTopButton />
    </div>
  );
}
