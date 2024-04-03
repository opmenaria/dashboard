import React from 'react';
import { Button, Form, Input, Select, Space } from 'antd';
interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
    img:string;
  }
interface RowFormProps {
    setTablRow: React.Dispatch<React.SetStateAction<DataType[]>>;
    tablRow: DataType[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
export default function RowForm({setTablRow, tablRow, setOpen}: RowFormProps) {
    const { Option } = Select;
    
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const [form] = Form.useForm();

  const onGenderChange = (value: string) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' });
        break;
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' });
        break;
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' });
        break;
      default:
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
    setTablRow([...tablRow, {
        key: `${tablRow.length+1}`,
        name: values.name.length,
        age: values.age,
        address: values.address,
        tags: values.tags,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBk-osPazUcEkZIvAkzS1ahpLQOpLDazoeQ&usqp=CAU'
      }]
      )
    setOpen(false);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({ 
        name: `Name - ${tablRow.length+1}`,
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBk-osPazUcEkZIvAkzS1ahpLQOpLDazoeQ&usqp=CAU'
     });
  };
  return (
    <div>
         <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="age" label="Age" rules={[{ required: true }]}>
        <Input type='number' />
      </Form.Item>
      <Form.Item name="address" label="Address" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="tags" label="Tags" rules={[{ required: true }]}>
        <Select
                  mode="tags"
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="nice">NICE </Option>
          <Option value="developer">DEVELOPER</Option>
          <Option value="loser">LOSER</Option>
          <Option value="cool">COOL</Option>
          <Option value="teacher">TEACHER</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Space>
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Space>
      </Form.Item>
    </Form>
    </div>
  )
}
