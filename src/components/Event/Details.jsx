import React from "react";
import { Button, message, Steps, theme } from "antd";
import { useState } from "react";
import BasicDetails from "./BasicDetails";
import RegistrationDetails from "./RegistrationDetails";
import {ConfigProvider} from "antd";

import { Stack} from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'

function Details() {
  const steps = [
    {
      title: "Basic Details",
      content: <BasicDetails />,
    },
    {
      title: "Registration Details",
      content: <RegistrationDetails/>,
    },
  ];

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    // lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    marginTop: 16,
    };

  return (
  <ConfigProvider theme={{
    token: {
      colorPrimary: 'gray-7',
      colorTextTertiary : "black",
      colorFillAlter : "black",
      borderRadiusLG : "20px"
    },
  }}>
        <Flex minH={"100vh"} bg={"white"} >
        <Stack
          spacing={8}
          mx={"auto"}
          width={{ md: "90%", sm: "100%" }}
          py={12}
          px={6}
        >
          <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Submit
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
        </Stack>
      </Flex>

  </ConfigProvider>
  );
}

export default Details;
