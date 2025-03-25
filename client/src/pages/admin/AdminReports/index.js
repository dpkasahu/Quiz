import React, { useEffect, useState } from "react";
import PageTitle from "../../../components/PageTitle";
import { message, Table } from "antd";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
import { getAllReports } from "../../../apicalls/reports";
import moment from "moment";
import { motion } from "framer-motion";
import "./AdminReports.css";

function AdminReports() {
  const [reportsData, setReportsData] = useState([]);
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    examName: "",
    userName: "",
  });

  const columns = [
    {
      title: "Exam Name",
      dataIndex: "examName",
      render: (text, record) => <>{record.exam.name}</>,
    },
    {
      title: "User Name",
      dataIndex: "userName",
      render: (text, record) => <>{record.user.name}</>,
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (text, record) => (
        <>{moment(record.createdAt).format("DD-MM-YYYY hh:mm:ss")}</>
      ),
    },
    {
      title: "Total Marks",
      dataIndex: "totalQuestions",
      render: (text, record) => <>{record.exam.totalMarks}</>,
    },
    {
      title: "Passing Marks",
      dataIndex: "correctAnswers",
      render: (text, record) => <>{record.exam.passingMarks}</>,
    },
    {
      title: "Obtained Marks",
      dataIndex: "correctAnswers",
      render: (text, record) => <>{record.result.correctAnswers.length}</>,
    },
    {
      title: "Verdict",
      dataIndex: "verdict",
      render: (text, record) => <>{record.result.verdict}</>,
    },
  ];

  const getData = async (tempFilters) => {
    try {
      dispatch(ShowLoading());
      const response = await getAllReports(tempFilters);
      if (response.success) {
        setReportsData(response.data);
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    getData(filters);
  }, []);

  return (
    <div className="admin-reports-container">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="admin-reports-box"
      >
        <PageTitle title="📊 Reports" />
        <div className="divider"></div>
        <div className="filters-container">
          <input
            type="text"
            placeholder="Search Exam"
            value={filters.examName}
            onChange={(e) => setFilters({ ...filters, examName: e.target.value })}
            className="search-input"
          />
          <input
            type="text"
            placeholder="Search User"
            value={filters.userName}
            onChange={(e) => setFilters({ ...filters, userName: e.target.value })}
            className="search-input"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="clear-button"
            onClick={() => {
              setFilters({ examName: "", userName: "" });
              getData({ examName: "", userName: "" });
            }}
          >
            Clear
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="search-button"
            onClick={() => getData(filters)}
          >
            Search
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Table columns={columns} dataSource={reportsData} className="reports-table" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AdminReports;
