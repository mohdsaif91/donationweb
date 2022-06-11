import React from "react";
import { Space, Table, Tag } from "antd";
import "./donationList.scss";

function DonationList() {
  const { Column, ColumnGroup } = Table;
  // const [bottom, setBottom] = useState("bottomCenter");
  // const bottomOptions = [
  //   {
  //     label: "bottomCenter",
  //     value: "bottomCenter",
  //   },
  // ];

  const data = [
    {
      key: "1",
      srno: "1",
      name: "sam",
      amount: 1500,
      phone: 7854855874,
      summary: "purpose of your payment ",
      address: "New York No. 1 Lake Park",
      // tags: ["nice", "developer"],
    },
    {
      key: "2",
      srno: "2",
      name: "harry",
      amount: 1500,
      phone: 7854855874,
      summary: "purpose of your payment ",
      address: "London No. 1 Lake Park",
      // tags: ["loser"],
    },
    {
      key: "3",
      srno: "3",
      name: "joy",
      amount: 1500,
      phone: 7854855874,
      summary: "purpose of your payment ",
      address: "Sidney No. 1 Lake Park",
      // tags: ["cool", "teacher"],
    },
    {
      key: "3",
      srno: "3",
      name: "joy",
      amount: 1500,
      phone: 7854855874,
      summary: "purpose of your payment ",
      address: "Sidney No. 1 Lake Park",
      // tags: ["cool", "teacher"],
    },
    {
      key: "3",
      srno: "3",
      name: "joy",
      amount: 1500,
      phone: 7854855874,
      summary: "purpose of your payment ",
      address: "Sidney No. 1 Lake Park",
      // tags: ["cool", "teacher"],
    },
  ];

  return (
    <>
      <Table
        dataSource={data}
        style={{
          columns: "green",
          margin: 15,
          color: "blue",
          border: "4px solid red",
        }}
      >
        {/* <ColumnGroup title="Name">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup> */}
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
        {/* <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        /> */}
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
    </>
  );
}

export default DonationList;
