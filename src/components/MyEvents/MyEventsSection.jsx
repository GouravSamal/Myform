import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  VStack,
  Text,
  Spacer,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import SavedEvents from "./SavedEvents";
import RegisteredEvents from "./RegisteredEvents";
import My_Events from "./My_Events";

export default function MyEventsSection() {
  //this to store incoming data of events
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8000/myevents");
        const data = await res.json();
        setEvents(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <Box>
      <Tabs isFitted variant="line">
          <TabList width={{ base: "100%", md: "100%" }}>
            <Tab>
              <Text fontSize={{ base: "xs", md: "xl" }} fontWeight="bold">
                Registered
              </Text>
            </Tab>
            <Spacer />
            <Tab>
              <Text fontSize={{ base: "xs", md: "xl" }} fontWeight="bold">
                Saved
              </Text>
            </Tab>
            <Spacer />
            <Tab>
              <Text fontSize={{ base: "xs", md: "xl" }} fontWeight="bold">
                Myevents
              </Text>
            </Tab>
          </TabList>

        <TabPanels>
          <TabPanel>
              {events.map((event) => (
                <RegisteredEvents key={event.id} event={event} />
              ))}
          </TabPanel>
          <TabPanel>
              {events.map((event) => (
                <SavedEvents key={event.id} event={event} />
              ))}
          </TabPanel>
          <TabPanel>
            {" "}
              {events.map((event) => (
                <My_Events key={event.id} event={event} />
              ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
