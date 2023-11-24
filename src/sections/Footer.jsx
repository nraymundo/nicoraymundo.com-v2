import { useEffect, useState } from "react";
import { Box, Text, Grid, GridItem, Icon, Flex } from "@chakra-ui/react"
import { MdOutlineArrowOutward } from "react-icons/md";
import Marquee from "react-fast-marquee";
import Header from './Header'
import { motion } from "framer-motion"
// import querystring from "querystring";
// import express from "express";

// let client_id = 'CLIENT_ID';
// let redirect_uri = 'http://localhost:8888/callback';

// let app = express();

// app.get('/login', function(req, res) {

//   let state = Math.random().toString(36).substr(2, 16);
//   let scope = 'user-read-private user-read-email';

//   res.redirect('https://accounts.spotify.com/authorize?' +
//     querystring.stringify({
//       response_type: 'code',
//       client_id: client_id,
//       scope: scope,
//       redirect_uri: redirect_uri,
//       state: state
//     }));
// });

// app.get('/callback', function(req, res) {

//   var code = req.query.code || null;
//   var state = req.query.state || null;

//   if (state === null) {
//     res.redirect('/#' +
//       querystring.stringify({
//         error: 'state_mismatch'
//       }));
//   } else {
//     var authOptions = {
//       url: 'https://accounts.spotify.com/api/token',
//       form: {
//         code: code,
//         redirect_uri: redirect_uri,
//         grant_type: 'authorization_code'
//       },
//       headers: {
//         'content-type': 'application/x-www-form-urlencoded',
//         'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
//       },
//       json: true
//     };
//   }
// });

export default function Footer() {
  // const [token, setToken] = useState('');
  // const [recenlyPlayed, setRecentlyPlayed] = useState('');

  // useEffect(() => {
  //   async function getAccessToken() {
  //     try {
  //       const response = await fetch('https://accounts.spotify.com/api/token', {
  //         method: "POST",
  //         headers: {
  //           Authorization: "Bearer ", token,
  //           "Content-Type": "application/json",
  //         },
  //         body: querystring.stringify({
  //           grant_type: "refresh_token",
  //           refresh_token,
  //         }),
  //       });

  //       if (response?.type === "success") {
  //         const { access_token } = response.params;
  //         setToken(access_token);
  //       }
    
  //       if (!response.ok) {
  //         throw new Error("Failed to get access token");
  //       }
    
  //       return response.json();
  //     } catch (error) {
  //       console.error(error);
  //       return null; // or return an error object if needed
  //     }
  //   }

  //   async function getNowPlaying() {
  //     const accessTokenData = await getAccessToken();
    
  //     if (!accessTokenData) {
  //       return { isPlaying: false, error: "Failed to get access token" };
  //     }
    
  //     try {
  //       const { access_token } = accessTokenData;
    
  //       const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
  //         headers: {
  //           Authorization: `Bearer ${access_token}`,
  //         },
  //         next: { revalidate: 60 },
  //       });
    
  //       // handleFetchResponse(response, NOW_PLAYING_ENDPOINT);
    
  //       if (response.status === 204) {
  //         return { error: "Empty response body", is_playing: false };
  //       }
    
  //       const { item } = await response.json();
  //       const song = item;
    
  //       return {
  //         name: song.name,
  //         artists: song.artists,
  //         external_urls: song.external_urls,
  //         album: song.album,
  //         isPlaying: song.is_playing,
  //       };
  //     } catch (error) {
  //       console.error(error);
  //       return { isPlaying: false, error: "Failed to fetch now playing data" };
  //     }
  //   }

  //   getAccessToken();
  //   getNowPlaying();
  // }, []);
  

  // useEffect(() => {
  //   if (response?.type === "success") {
  //     const { access_token } = response.params;
  //     setToken(access_token);
  //     setIsLoggedIn(true);
  //   }
  // }, [response]);

  // useEffect(() => {
  //   if (token) {
  //     axios(
  //       "https://api.spotify.com/v1/me/player/recently-played?limit=1", {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + token,
  //       },
  //     })
  //       .then((response) => {
  //         setRecentlyPlayed(response.data.items.map(item => {
  //           const artists = [];
  //           item.track.artists.map(artist => {
  //             artists.push(artist.name);
  //           });
  //           return {
  //             name: item.track.name,
  //             image: item.track.album.images[1].url,
  //             artist: artists,
  //             url: item.track.external_urls.spotify,
  //           }
  //         }));
  //       })
  //       .catch((error) => {
  //         console.log("error", error.message);
  //       });
  //   }
  // }, [token]);

  return (
    <Box w='100%' mt={5} h='150px'>
      {/* <SimpleGrid columns={{sm: 2, md: 3, lg: 4, xl: 5}}>
        <Flex as="a" href='https://instagram.com' target='_blank' color='#DCE0D9' textStyle='secondary' align='center' _hover={{ color: '#858682' }} width=''>
          <Text _hover={{ textDecoration: 'none', color: '#858682' }}>
            GitHub
          </Text>
          <motion.button
            whileHover={{
              scale: 1.5,
            }}
          >
            <Icon as={MdOutlineArrowOutward} pl={1}/>
          </motion.button>
        </Flex>
        <Flex as="a" href='https://instagram.com' target='_blank' color='#DCE0D9' textStyle='secondary' align='center' _hover={{ color: '#858682' }}>
          <Text _hover={{ textDecoration: 'none', color: '#858682' }}>
            LinkedIn
          </Text>
          <motion.button
            whileHover={{
              scale: 1.5,
            }}
          >
            <Icon as={MdOutlineArrowOutward} pl={1}/>
          </motion.button>
        </Flex>
        <Flex as="a" href='https://instagram.com' target='_blank' color='#DCE0D9' textStyle='secondary' align='center' _hover={{ color: '#858682' }}>
          <Text _hover={{ textDecoration: 'none', color: '#858682' }}>
            Instagram
          </Text>
          <motion.button
            whileHover={{
              scale: 1.5,
            }}
          >
            <Icon as={MdOutlineArrowOutward} pl={1}/>
          </motion.button>
        </Flex>
        <Flex as="a" href='https://instagram.com' target='_blank' color='#DCE0D9' textStyle='secondary' align='center' _hover={{ color: '#858682' }}>
          <Text _hover={{ textDecoration: 'none', color: '#858682' }}>
            Twitter
          </Text>
          <motion.button
            whileHover={{
              scale: 1.5,
            }}
          >
            <Icon as={MdOutlineArrowOutward} pl={1}/>
          </motion.button>
        </Flex>
        <Flex as="a" href='https://instagram.com' target='_blank' color='#DCE0D9' textStyle='secondary' align='center' _hover={{ color: '#858682' }}>
          <Text _hover={{ textDecoration: 'none', color: '#858682' }}>
            nicoraymundo2@gmail.com
          </Text>
          <motion.button
            whileHover={{
              scale: 1.5,
            }}
          >
            <Icon as={MdOutlineArrowOutward} pl={1}/>
          </motion.button>
        </Flex>
      </SimpleGrid> */}
      <Box textStyle='secondary'>
        <Grid
          templateRows='repeat(2)'
          templateColumns='repeat(12, 1fr)'
          gap={5}
          mt={5}
        >
          <GridItem colSpan={2}>
            <Flex as="a" href='https://instagram.com' target='_blank' color='#DCE0D9' textStyle='secondary' align='center' _hover={{ color: '#858682' }} width=''>
              <Text _hover={{ textDecoration: 'none', color: '#858682' }}>
                GitHub
              </Text>
              <motion.button
                whileHover={{
                  scale: 1.5,
                }}
              >
                <Icon as={MdOutlineArrowOutward} pl={1}/>
              </motion.button>
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
            <Flex as="a" href='https://instagram.com' target='_blank' color='#DCE0D9' textStyle='secondary' align='center' _hover={{ color: '#858682' }}>
              <Text _hover={{ textDecoration: 'none', color: '#858682' }}>
                LinkedIn
              </Text>
              <motion.button
                whileHover={{
                  scale: 1.5,
                }}
              >
                <Icon as={MdOutlineArrowOutward} pl={1}/>
              </motion.button>
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
            <Flex as="a" href='https://instagram.com' target='_blank' color='#DCE0D9' textStyle='secondary' align='center' _hover={{ color: '#858682' }}>
              <Text _hover={{ textDecoration: 'none', color: '#858682' }}>
                Instagram
              </Text>
              <motion.button
                whileHover={{
                  scale: 1.5,
                }}
              >
                <Icon as={MdOutlineArrowOutward} pl={1}/>
              </motion.button>
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
            <Flex as="a" href='https://instagram.com' target='_blank' color='#DCE0D9' textStyle='secondary' align='center' _hover={{ color: '#858682' }}>
              <Text _hover={{ textDecoration: 'none', color: '#858682' }}>
                Twitter
              </Text>
              <motion.button
                whileHover={{
                  scale: 1.5,
                }}
              >
                <Icon as={MdOutlineArrowOutward} pl={1}/>
              </motion.button>
            </Flex>
          </GridItem>
          <GridItem colSpan={4}>
            <Flex as="a" href='https://instagram.com' target='_blank' color='#DCE0D9' textStyle='secondary' align='center' _hover={{ color: '#858682' }}>
              <Text _hover={{ textDecoration: 'none', color: '#858682' }}>
                nicoraymundo2@gmail.com
              </Text>
              <motion.button
                whileHover={{
                  scale: 1.5,
                }}
              >
                <Icon as={MdOutlineArrowOutward} pl={1}/>
              </motion.button>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
      {/* <Marquee
        pauseOnHover={true}
        style={{
          borderTop: '1px solid #adb5bd',
          borderBottom: '1px solid #adb5bd',
        }}
      >
        <Text color='white' fontSize='md'>text</Text>
      </Marquee> */}
    </Box>
  )
}
