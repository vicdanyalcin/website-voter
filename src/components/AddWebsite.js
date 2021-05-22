import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Form, Input, Button } from 'antd';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
export const AddWebsite = () => {
    const [text, setText] = useState("");
    const [name, setName] = useState("");

    const { addWebsite } = useContext(GlobalContext);
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onSubmit = (e) => {
        e.preventDefault();

        const  newWebsite = {
            id: Math.floor(Math.random() * 100000000),
            linkUrl:text,
            linkName: name,
        };
        addWebsite( newWebsite);
        setText("")
        setName("")
    };

    return (
        <>
            <h3>Add new website</h3>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="website name"
                    name="website"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your website!',
                        },
                    ]}
                >
                    <Input                         onChange={(e) => setText(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    label="url"
                    name="url"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your url!',
                        },
                    ]}
                >
                    <Input                         onChange={(e) => setName(e.target.value)}
                    />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" onClick={onSubmit}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
