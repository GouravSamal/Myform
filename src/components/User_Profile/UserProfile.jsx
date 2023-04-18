import React, { useState } from 'react';
import { Button, Input, InputGroup, InputLeftAddon, InputRightAddon } from '@chakra-ui/react';
import { AiOutlineSearch } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter, BsPlusCircleFill } from "react-icons/bs";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { 
    Box,
    Avatar,
    Text,
    Heading,
    Flex,
    Center,
    Image 
} from '@chakra-ui/react';
import skillimage from '../../Images/skills.png';
import educationimage from '../../Images/edu.png';
import workimage from '../../Images/work.png'
import certificateimage from '../../Images/certificate.png';

import './UserProfile.css';

export default function UserProfile() {

    const [name, setName] = useState("Priyansu Priyaranjan Baral");
    const [email, setEmail] = useState("pratapabaral863@gmail.com");
    const [search, setSearch] = useState("");
    const [skills,setSkills]=useState([]);
    const [educations,setEducations]=useState([]);
    const [workExperience,setWorkExperience]=useState([]);

    return (
        <Box display="flex" >
        <Box w={{base:"0%",md:"20%"}} display={{ base:"hidden"}}>SideBar</Box>
        <Box w={{base:"100%",md:"80%"}} >

            <Box h="25%">

                <Box 
                //  bg="black"
                bgImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS85KqJoHWEhJyC1rpdnePSsHNmseHP-yIrTYWh85S&s"}
                bgRepeat="no-repeat" 
                bgSize="cover"
                h="13vh" position={"relative"}>
                    <Box  mt="3%" ml={{base:"30%",md:"5%"}} position={"absolute"}>
                        <Avatar size='xl'
                            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEVVYIDn7O3///9KVnlTXn/q7+9NWXva4ONRXH7t8vJMWHvp7u9FUna+xM1JVXlibIng4udZZIP09feTmazc3uRrdJBeaIa2usbGydNye5SAh57t7vH4+frV2N+6vsqnrryJkaWhprZ8hJunrLuQlqrEytKZoLHL0dZueJKEjaHT2d6zE6BNAAAMeElEQVR4nO2de5eCOA+HK5RargJeUMdRRx1v3/8DLqCOKNcmQdg9+zvv2T3v/qE+0zRJ2zRlWttahf7JjX4Oy8V0NAsYY8FsNF0sDz+Re/LDVevfz1r87NCf/2zPzHF0yxKSc844SxT/k3MpLEt3nOC83c/9sMVf0Rah744XgafHYKxaMaruBYux67f0S9og9KMls3RRx/bCKXQrWEZtUFIThvMxcyypAPeUtBw2nlNbLCnh13rJdQGie0jocrn+ovxRhITzHddhg/c2lDrfuXQ+lopwcvBI8B6Q+uGb6JeREIbR1Kl1mmri0plGJFOSgNA/Mp0W7w6psyOBc0UTTpYC51uqJMRy0jHh94LaPF8VG+sCOSFRhN87h867lEI6OxQjgtC/ACO7qqS+RMxHMGE49j7DlzJ6B7BfhRJGVnv+pUjC2nyU8Huqf5QvkT6FTUcI4erQSvyrE9cPkFwOQHj6sIE+JeTpA4Th2OmIL5Gj7nFUCb9HXQ3gTSKYt0v408kMzIp7Py0Sfi0+70Lz0s9KK2QVwhP/XIyvkuQqlqpAuO/cQh/i+r4NwktvABPECznh17RbH/ouMWo6GRsSTmb9mIJPyaDh2rgZ4Ulpe/cz4rKZv2lEOO8yjSmXs6YijJz+jWAqJ6Ih3Hs9BYyDf4NFYz0hLWByxkb4aV59YKwl3BPMweSwUNclC4LZaDSaBUGyqW3Vn7w1kFObpdYRbjzkT5DCY+fLceOertfh0B8MBv5weL2e3M3xcmYeGrN2FGsII0wiw7lwgm10HQ5M0zBsO/7fXcn/MUxzMLxG25kjMJbL9Rp3U024RnhRLuR5M4nZbHtQphjUNK+bs0TEW+64cEJEHOTW6GcYj1wp3FPxaF5/RhaYkTuVW1RVhBNwKsq9szswm+DdIc3B+gz32bIqgasg/AqgXykCN55qjflSezUMd2YBv48HFWl4BeEImGxLubebD19mII29hH7lFEJ4AdqoOF9NAF8i83oGDqNVvl4sJdwDt2T0wwAygPdhHGyhX1uav5URzmHzPk6jTLUJ+CrbBO6VcK9sLVVC+AVLNbi1gVroQ+YGFje4LPE2JYRT2JTHA6aIoO8u8zbFhEfYbLCOeMAYcQxD1IuT8ELCOSzdlju4j8nINhYwC/IKc5siwhAY6uWQhHBgDGGEfFR0bFNEeIBFQj2isNFEZgSbJWLcjPAEy7f5AhMmXmWfYVbkFJwv5glXwMzJ+iUk/IXmNvlT4jwh0Eb5gmYS3mQsYINYYKc5wm9g2iRcUsI1MCvWc/40RziFLpnobDSRDfwVPBf33wmBXowJkmD/lDmGDuL7ts0bYQhd1uu/lEYam+kv9LhZhJWEQDcTR/sBsZUOoJtT787mldCH7o7KJe0Qxog7qEPw/ArCJfSUUPzQTsN4Ih7B5nQpJ4RGijjSrmmNNJ6IEXRfilnfpYQ78EGvfqImtE/gP7dclhF+wzeAxZCccAgvHHAmJYTAZVmqFgjhP0buigkniHO0mU9POIP/HMcvJAQ70jhX6hlhdiY+CX342Ug8hi1YaQD/OVz4BYTg+JOqBULM0ak45glDDB/nLRDiTofDHCF0UdFTwucS448QvC7sJ+FznfggRET7XhI+o/6DcIuqzOshoTy8Eq5wxaM9JOT66oXQxRVw95CQ6fMXQviqoreEj7zmRviFLEzqIyFjXxnCNfKWQS8JdTdDiEi6+0t4381ICUNsEXcvCRkP/wjn2Ksw/SS8FS+khND95Z4T3nZOU0LkJ/WVkAUPQh9dBtxTwnQzIyGE70z2nNBa3wmxsaK3hGlawyimYV8JGbsR+mgj7S1hsiHF0OuKPhMmiRsjiIZJB7Y29rwJxvCYEgLLHrKSJ+rjw8HAOBH85RcJYYjYeb2LrhoqK2hlVFZBGBOCz33/xBdtAMaIeOvS/ZgQnXYzrwUbTWT8ov/4+jwm3KPT7im1l/nTCJ1872NC3D5iLDlux0iTohr0bzvEhMAywKdE1I6RxmYKLIh+KnambIV2pZbblpXaa3S6FaxYiF466aQ1e1kZ+HTLCRl+cdhvQp/Bizr+FYT6ibloU+81oeUy/AK/34QR+0Hnt70mFD/sgN7C6DWhHLMlPrvtMyG/MIL8vdeEO4aqUPgXEJ7ZCPsZ/SaM+Wb/7TFkM0awh9FrQjxf/wn/H8N6tbg+xCfNJGNobfq7xk8I8b60z/s0SbTAx0M+Ir4R9JCN32tjbEqQ05Df6noIfrvrqTinITi14OeW9rwJ/vpxXopfWyRtN1o5t9gQ9IOVF4L1YdIO45ce0fylaNYYrw/xa/xE3CVGtM01Ses6sSfYp0nlkQZF2xwAm2O8S0QEe22p+JRwEO3hkRM1hLVcgv3SVNwivBdkjtHHag/p3wR73jdR3se36bpHOj7BucVN8kBmphSR/iFnxVZEH0WYu5kXuqbFwYrg/PAui+qirO3TGWlyfog/A76LrKuCEdE11k7PgNHn+HfxGZGZQpvTFMlKzvGBTaHyItrNoPQzt1oMfD3NXXJHYqYGoZ+51dMQ1ETd5VAUtxlXyhcmZiFRXdtNJL7GpPJ8iW51bRS1iQ/hMzdjSJawsb/aRIJNybsImgqSDmF6fy2pESYbQ3zAsK+kbzDca4QJ6rwfQg8iqSO9XbigqdV/fiRuEA1on7Zi/dXq42ur/oTsxGMSpjMsc9+CaonIkoUwJiaaEaUjzdyZ0chifjyIW/gg2sCel2XiAd3dtYwEvH2iuaV9refWHON2/5DQOPgU6mwMl/g5osz9w5ByfltAZ2MPwT3gS5S5Q6pRRiFuXUGDaC6JhzB7D1hzKX0YrLLdRL8V8q6Xu9zY+/ivggRFihsy78rex6dMaxI7VT7ZN4b4s+g3vfZUILhWkhVnqv7U3pEP4VtfDI00HwSs9smHkFnaKyFl0IcQEpzYv+qvyeeDENOOLq8eEOZ6DOH6ROU+vnPCfJ8odHuTF3VP6K1zhNBm+oXqnjDI92vTaA70b+qcUDxfgngSfv2HCLlV1DeRMv3umjDbSjhDSLiZ0TVhSf9SwuS0Y8KyHrSEUb9jwtI+wnQzsVvC8l7Q2gTThjarTgm5NSkl1Kg2u9R3TQmTRrnVygm/aF4XVz+hsckOMRnXq/rqI5sJPyR3qkNIUdF9l3XUqghp6oeEcqGiTZf48+r3LbQ1xY6XvCoTYnpbv8ireaME13r+LsjZBfjVlTfJ8ztQjnCCrz2WE/XCGgPVvvtPb5GikBDvbBzQQTDNjrA45ngKXiVD9mfSx7DSKIpdfc4LcPL/Cdf4Wj8qvpP7kG3v0FuaRW8fF72dd4R/k2DwllG2fUQmHE3fztNW0CRR6tsh4hzfNt0p6qXzxu8fahPQ93BvcVJ4qbqQcbAewRnzb66VEmoAv8atqYt6KPcmw4ymwHil7wtZSt6SVT4osUZRxSvxSox2BLJVuShGKSFU2z3lgm8QLznnGCG2ypnae8Dad/NB5NI6+gQG+pRt2OuR2mqcF0/CCsLmKbgUlwkpX6rEVlUY1d/l1rRDo/UM93ZYB1rGOFg3n49iW8pRTqgt6g2V66Nfu62b3ArzsezF6hrCcFS3kBKziN4+M7INs9F85LOiUF9PqPmVOTgXwZ7QgZaoSezg0q+gqCKs3CKW3nHY6gD+MdbZKi/KtxsSlj/vLPXLZ/hSRns9K7dV7swrGaoJS6pQuGjLgZYxmqWxg+vraoQawsKwqJ8pMlBFxrLYkdt5UiXUondDtVjUXoCoZiyYj05ppG9MqL1WJgu274RvUJjLca8WsAFhtkpDSOIMVFFx7DhnGHmtiTYj1ObOY1Jvr13ypYzJfHwAOjVOpjFhHDSSv5sYnbrmuzFGt8v6dWFChVCbMMnE0ehoAr7JNgfb2FS5rAz0ioTa10hSd75AyDbXgTWrStXUCbWwpa7kQJnXZUWyDSLUtP4MYSKz8e9uTqiFXVNl1HQA1Qi1Vddcf1op/GoVQk3rx1y0lX6zGmEvLFXBQgGE2qrrmG+rWCiEsGuf2tyHwgk7dTiqAwgj7G4Y1QcQStjNbFSegRjCLpyqogtFE36aEWSgSMJPTkcTZqBoQm31GUYDwYckjBnbz+OADoaKsPVxxNgnEaHW5nzE89EQxn61jfhoQ+PDq2gIWzBWiuFLRUWokULivOerCAk1Ikiy0buJllDDQtrEeFoLhImAlGZIjqe1RBhrtTIVqsDseOzaoEvUFmGq1Sqs44zZwtbgUrVKeNcqJg1N07DtFDf5l2GaCVmraHf9A3HEDN2tpOABAAAAAElFTkSuQmCC'
                        />
                    </Box>
                </Box>

                <Box>

                    <Box mt="2%" w="80%" position={"absolute"} display={"flex"} flexDirection={{md:"row",base:"column-reverse"}} justifyContent={"space-between"}>

                        <Box ml={{base:"5%",md:"3%"}} mt={{base:"3%",md:"0%"}}>
                            <Text> {name}</Text>
                            <Text mt="3%"> {email} </Text>
                            <Flex mt="3%" justifyContent={"space-between"}>
                                <FaFacebookSquare size={30} color="rgb(3, 50, 82)" />
                                <FiInstagram size={30} color="rgb(206, 19, 97)" />
                                <BsTwitter size={30} color="rgb(13, 173, 221)" />
                                <FaLinkedin size={30} color="rgb(11, 27, 168);" />
                            </Flex>
                        </Box>

                        <Button ml={{md:"0%",base:"20%"}} mt={{base:"15%",md:"0%"}} mr="5%" borderRadius={25} >
                            Edit Profile
                        </Button>
                    </Box>


                </Box>
            </Box>


            <Box h="70%" mb="8">
                <Flex direction={{md:"row",base:"column"}} justifyContent={"space-between"} h="100%" mb="8">

                    <Box mt={4} w={{base:"100%",md:"40%"}} maxHeight={{base:"auto",md:"100vh"}} overflowY={{base:"none",md:"scroll"}}>
                        
                        {/* <Flex direction={"column"} pt="2%" > */}

                            <Box  borderWidth={1} mb="4" h="14rem" w="100%">
                                <Flex justifyContent={"space-between"}>
                                    <Heading ml="2%" mt="1%" size='md'>Skills</Heading>
                                    <Button bg="white">
                                        <BsPlusCircleFill />
                                    </Button>
                                </Flex>
                                {
                                    skills.length === 0 ?
                                    <Box
                                    bgImage={"data:image/png;base64,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"}
                                    bgRepeat="no-repeat" 
                                    bgSize="cover"
                                    >

                                    </Box>
                                    :
                                    <Box>
                                        <Flex alignContent={"center"} justifyContent={"center"}>                                             
                                            <Heading size="sm">Add your skills</Heading>
                                        </Flex>
                                    </Box>
                                }
                            </Box>

                            <Box mt="1%" h="14rem" mb="4" borderWidth={1}  w="100%">
                                <Flex justifyContent={"space-between"}>
                                    <Heading ml="2%" mt="1%" size='md'>Educations</Heading>
                                    <Button bg="white">
                                        <BsPlusCircleFill />
                                    </Button>
                                </Flex>
                            </Box>

                            <Box mt="1%" mb="4" h="14rem" borderWidth={1}  w="100%">
                                <Flex justifyContent={"space-between"}>
                                    <Heading ml="2%" mt="1%" size='md'>Work Experience</Heading>
                                    <Button bg="white">
                                        <BsPlusCircleFill />
                                    </Button>
                                </Flex>
                            </Box>

                            
                        {/* </Flex> */}

                    </Box>

                    <Box w={{base:"100%",md:"40%"}}>

                        <Flex direction={"column"} pt="2%">

                            <Box borderWidth={1} mb="4" h="14rem" w="100%">
                                <Flex justifyContent={"space-between"}>
                                    <Heading ml="2%" mt="1%" size='md'>Certifications</Heading>
                                    <Button bg="white">
                                        <BsPlusCircleFill />
                                    </Button>
                                </Flex>
                            </Box>

                        </Flex>

                    </Box>


                </Flex>
            </Box>

        </Box>
        </Box>
    )
}
