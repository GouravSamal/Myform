import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

import Mypost from './Mypost';
import Savepost from './Savepost';
import Advertisment from './Advertisment';
import './post.css';

export default function Post() {
    return (
        <div className='post_background'>
            <div className='sidebar'>
                Sidebar 
            </div>
            <div className='post'>
                {/* <Tabs isFitted variant='line'>
                    <TabList mb='1em'>
                        <Tab><Heading size='md' >MyPost</Heading></Tab>
                        <Tab><Heading size='md'>Save Post</Heading></Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                        </TabPanel>
                        <TabPanel>
                            <Savepost/>
                        </TabPanel>
                    </TabPanels>
                </Tabs> */}
                <Mypost/>
            </div>
            <div className='ads'>
                <Advertisment/>
            </div>
        </div>
    )
}
