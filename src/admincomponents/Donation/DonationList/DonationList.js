import React, { useEffect } from "react";
import { Space, Table } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { getAllDonationMethod } from "../../../RTK/Slice/donationSlice";
import TableLoader from "./tableLoader";

import "./donationList.scss";

function DonationList() {
  const tabledata = useSelector((state) => state.donation?.donation);

  const diapatch = useDispatch();

  useEffect(() => {
    if (!tabledata) {
      getAllDonation();
    }
  }, [tabledata]);

  const getAllDonation = () => {
    diapatch(getAllDonationMethod());
  };

  const { Column } = Table;

  return (
    <Table
      dataSource={tabledata || []}
      style={{
        columns: "green",
        margin: 15,
        color: "blue",
        border: "4px solid red",
      }}
      loading={{
        indicator: <TableLoader />,
        spinning: !tabledata,
      }}
    >
      <Column
        style={{
          color: "blue",
          fontsize: 855,
          margin: 777,
          borderbottom: "9px solid red",
        }}
        title="SrNo."
        dataIndex="srno"
        key="srno"
      />
      <Column title="Created At" dataIndex="createdAt" key="createdAt" />
      <Column title="Amount" dataIndex="amount" key="amount" />
      <Column title="PhoneNumber" dataIndex="phone" key="phone" />
      <Column title="Summary" dataIndex="summary" key="summary" />
      <Column
        title="Reciver Address"
        dataIndex="recevierAddress"
        key="recevierAddress"
      />

      <Column
        title="Action"
        key="action"
        render={(_, record) => (
          <Space size="middle">
            <a>Edit {record.lastName}</a>
            <a>Delete</a>
          </Space>
        )}
      />
    </Table>
  );
}

export default DonationList;
