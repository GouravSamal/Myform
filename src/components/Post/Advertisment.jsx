import React,{ useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';
import './post.css';
import AdCard from './AdCard';

import axios from "axios";

export default function Advertisment() {

  const [ads,setAds] = useState([]);

  const getAds = async () => {
    await axios.get("http://localhost:8000/ads").then( (response) => setAds(response.data)  )
  }

  useEffect( () => {
    getAds()
  },[])


  return (
    <div>
      <Heading ml="50%" size='md'> Ads </Heading>

      {
        ads.map( (ad) => {
          return(
            <div key={ad.ad_id}>
              <AdCard image={ad.image} description={ad.description} />
            </div>
          ) 
        })
      }

    </div>
  )
}
