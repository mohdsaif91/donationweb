import React, { useState, useEffect } from "react";
import { Space, Table, Tag } from "antd";
import "./donationList.scss";
import { useSelector, useDispatch } from "react-redux";
// import { donationSlice } from "../Donation/donationSlice";
import DonatinRegister from "../Donation/DonationRegister";
import { getAllDonationMethod } from "../../RTK/Slice/donationSlice";

function DonationList() {
  const tabledata = useSelector((state) => state.donation.donationSlice);
  console.log(tabledata);
  const dispatch = useDispatch();

  const { Column, ColumnGroup } = Table;

  const data = [
    // recevierName: "",
    // recevierImages: "",
    // requiredAmount: "",
    // recevierSummary: "",
    // recevierAddress: "",
    // reciverPhoneNumber: "",
    // {
    //   key: "1",
    //   srno: "1",
    //   name: "recevierName",
    //   amount: 1500,
    //   phone: 7854855874,
    //   summary: "purpose of your payment ",
    //   address: "New York No. 1 Lake Park",
    // },
    {
      key: "1",
      srno: "1",
      name: "sam",
      amount: 1500,
      phone: 7854855874,
      summary: "purpose of your payment ",
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      srno: "2",
      name: "harry",
      amount: 1500,
      phone: 7854855874,
      summary: "purpose of your payment ",
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      srno: "3",
      name: "joy",
      amount: 1500,
      phone: 7854855874,
      summary: "purpose of your payment ",
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "3",
      srno: "3",
      name: "joy",
      amount: 1500,
      phone: 7854855874,
      summary: "purpose of your payment ",
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "3",
      srno: "3",
      name: "joy",
      amount: 1500,
      phone: 7854855874,
      summary: "purpose of your payment ",
      address: "Sidney No. 1 Lake Park",
    },
  ];

  const diapatch = useDispatch();

  useEffect(() => {
    getAllDonation();
  }, []);

  const getAllDonation = () => {
    diapatch(getAllDonationMethod());
    // console.log(getAllDonation);
  };

  return (
    <>
      {/* <div>
        <button onClick={getAllDonation}>submit</button>
      </div> */}
      <form action="">
        <Table
          dataSource={data}
          style={{
            columns: "green",
            margin: 15,
            color: "blue",
            border: "4px solid red",
          }}
        >
          <Column
            style={{
              // columns: "green",
              color: "blue",
              fontsize: 855,
              margin: 777,
              borderbottom: "9px solid red",
            }}
            title="SrNo."
            dataIndex="srno"
            key="srno"
          />
          <Column title="FullName" dataIndex="name" key="name" />
          <Column title="Amount" dataIndex="amount" key="amount" />
          <Column title="PhoneNumber" dataIndex="phone" key="phone" />
          <Column title="Summary" dataIndex="summary" key="summary" />
          <Column title="Address" dataIndex="address" key="address" />

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
      </form>
    </>
  );
}

export default DonationList;
