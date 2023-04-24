import React from "react";
import { Button, message, Steps, theme } from "antd";
import { useState } from "react";
import EventRegistrationForm1 from "./EventRegistrationForm1";
import EventRegistrationForm2 from "./EventRegistrationForm2";
import EventRegistrationForm3 from "./EventRegistrationForm3";
import {ConfigProvider} from "antd";

import { Stack} from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import styled from "@emotion/styled";

function EventForm() {
  const steps = [
    {
      title: "Event Registration Form",
      content: <EventRegistrationForm1 />,
    },
    {
      title: "Event Course Form",
      content: <EventRegistrationForm2/>,
    },
    {
        title: "Ticket ",
        content: <EventRegistrationForm3/>,
    }
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

    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    //border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
    };

   const nextbottomStyle = {
    padding:"10px 20px 35px 20px",
    width:"150px",
    fontSize:"18px"
   }

   const paybottomStyle = {
    padding:"10px 20px 35px 20px",
    width:"150px",
    fontSize:"18px"
   }

   const prevbottomStyle = {
    padding:"10px 20px 35px 20px",
    fontSize:"18px",
    width:"150px",
    margin: "0 8px",
   }

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
          // borderWidth={1}
          // borderColor={"white"}
          width={{ md: "90%", base: "100%" }}
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
          <Button style={ nextbottomStyle } type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button style={ paybottomStyle }
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Pay
          </Button>
        )}
        {current > 0 && (
          <Button style={ prevbottomStyle }
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

export default EventForm;
