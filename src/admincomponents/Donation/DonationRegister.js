import React, { useState } from "react";
import { Button, Col, Row, Form, Input, Upload, Card, Space } from "antd";
import { useDispatch } from "react-redux";

import { UploadOutlined } from "@ant-design/icons";

import { getFormData } from "../../util";
import { createDonation } from "../../RTK/Slice/donationSlice";

import "./DonationRegister.scss";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const initialState = {
  recevierName: "",
  recevierImage: "",
  requiredAmount: "",
  recevierSummary: "",
  recevierAddress: "",
  reciverPhoneNumber: "",
};

const { TextArea } = Input;

function DonationRegister() {
  const [formvalue, setFormvalue] = useState({
    ...initialState,
  });

  const dispatch = useDispatch();

  const handlevalidation = (e) => {
    const { name, value } = e.target;
    setFormvalue({ ...formvalue, [name]: value });
  };

  const handleUpload = ({ fileList }) => {
    console.log(fileList);
    setFormvalue({ ...formvalue, recevierImage: fileList });
  };

  const submitData = () => {
    console.log(formvalue);
    dispatch(createDonation(getFormData(formvalue)));
  };

  return (
    <Row style={{ marginTop: "32px" }}>
      <Col span={6} />
      <Col span={10}>
        <Space
          align="center"
          direction="vertical"
          size="large"
          style={{ display: "flex" }}
        >
          <Card
            hoverable
            title="Create Donation"
            className="form-card"
            size="default"
          >
            <Form
              {...formItemLayout}
              name="donationRegistration"
              scrollToFirstError
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "Please provide the name",
                    whitespace: true,
                  },
                ]}
              >
                <Input
                  name="recevierName"
                  value={formvalue.recevierName}
                  onChange={handlevalidation}
                />
              </Form.Item>
              <Form.Item
                name="phoneNumber"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please provide the Phone number",
                    whitespace: true,
                  },
                ]}
              >
                <Input
                  name="reciverPhoneNumber"
                  value={formvalue.reciverPhoneNumber}
                  onChange={handlevalidation}
                />
              </Form.Item>
              <Form.Item
                name="amount"
                label="Amount"
                rules={[
                  {
                    required: true,
                    message: "Please provide the Amount",
                    whitespace: true,
                  },
                ]}
              >
                <Input
                  name="recevierAmount"
                  value={formvalue.requiredAmount}
                  onChange={handlevalidation}
                />
              </Form.Item>
              <Form.Item
                name="recevierSummary"
                label="Summary"
                rule={[
                  {
                    required: true,
                    message: "Please provide the summary",
                    whitespace: true,
                  },
                ]}
              >
                <TextArea
                  name="recevierSummary"
                  row={4}
                  value={formvalue.recevierSummary}
                  onChange={handlevalidation}
                />
              </Form.Item>
              <Form.Item
                name="recevieraddress"
                label="Address"
                rule={[
                  { required: true, message: "Please provide the address" },
                ]}
              >
                <TextArea
                  name="recevierAddress"
                  row={4}
                  value={formvalue.recevierAddress}
                  onChange={handlevalidation}
                />
              </Form.Item>
              <Form.Item name="donationImage" label="Upload Image">
                <Upload
                  onChange={handleUpload}
                  name="uploadImage"
                  listType="picture"
                  beforeUpload={() => false}
                >
                  <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
              </Form.Item>
            </Form>
            <Button onClick={submitData} type="primary">
              Create
            </Button>
          </Card>
        </Space>
      </Col>
    </Row>
  );
}

export default DonationRegister;
