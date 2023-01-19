import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  ListItem,
  UnorderedList,
  Image,
  IconButton,
  Button,
  Text,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Projects = () => {
  return (
    <>
      <Text
        id="projects"
        style={{
          color: "gray",
          fontSize: "40px",
          fontWeight: "bold",
          textDecoration: "0.5px  underline",
        }}
      >
        Projects
      </Text>
      <Box border="1px solid gray" pt="3%" pl="2%" mt="2%">
        <Flex flexDirection={["column", "column", "row", "row", "row"]}>
          <Box pt="2%">
            <Carousel autoPlay={true} interval={2000}>
              <Image src="https://camo.githubusercontent.com/c26b4b17aa8e0a0a769b57200d2a86b4334442162c97890b411ec94014c40c7b/68747470733a2f2f737461727475707472616b2e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032312f30372f4e65746d6564732d2d373238783330302e706e67" />
              <Image src="https://camo.githubusercontent.com/f11ec35df073e7b7a4c8bfc1e5b6f54c719416737af6ea48a9e72b5eefcb466a/68747470733a2f2f737461727475707472616b2e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032312f30372f4e65746d6564732d776562736974652d2d373238783330372e706e67" />
              <Image src="https://camo.githubusercontent.com/c26b4b17aa8e0a0a769b57200d2a86b4334442162c97890b411ec94014c40c7b/68747470733a2f2f737461727475707472616b2e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032312f30372f4e65746d6564732d2d373238783330302e706e67" />
            </Carousel>
          </Box>

          <Box border="0px solid" width="auto" p="2%">
            <Text fontSize="3xl" color={"white"}>Netmeds </Text>
            <Text fontSize="2xl" color="green">
              (online pharmacy)
            </Text>

            <UnorderedList color={"white"}>
              <ListItem >
                At netmeds.com provide a wide range of medicines listed under
                various categories
              </ListItem>
              <ListItem>
                {" "}
                products are diet/fitness supplements, herbal products, pain
                relievers, beauty care products and surgical supplies.
              </ListItem>
            </UnorderedList>

            <Box>
              <Text fontSize="2xl" color="green">
                Tech-Stack
              </Text>
              <Text color={"white"}> HTML | CSS | JavaScript </Text>
            </Box>
            <Box border="0px solid " p="20px">
              <Flex
                flexDirection={["column", "column", "row", "row", "row"]}
                gap="5%"
              >
                <a
                  href="https://github.com/krishnakevadiya/full-purpose-7427"
                  target="_blank"
                >
                  {" "}
                  <Button
                    m="2%"
                    style={{
                      backgroundColor: "gray",
                      fontFamily: "sans-serif",
                      color: "black",
                      border: "1px solid #3AF807",
                    }}
                  >
                    Github
                  </Button>{" "}
                </a>
                <a
                  href="https://incandescent-sprite-70edf0.netlify.app/"
                  target="_blank"
                >
                  {" "}
                  <Button
                    m="2%"
                    style={{
                      backgroundColor: "gray",
                      fontFamily: "sans-serif",
                      color: "black",
                      border: "1px solid #3AF807",
                    }}
                  >
                    Deploy link
                  </Button>{" "}
                </a>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box border="1px solid gray" pt="3%" pl="2%" mt="2%">
        <Flex flexDirection={["column", "column", "row", "row", "row"]}>
          <Box pt="2%">
            <Carousel autoPlay={true} interval={2000}>
              <Image src="https://user-images.githubusercontent.com/110046267/204727055-d1c44070-1b7c-4a77-9af5-ba4a719a1a5d.png" />
              <Image src="https://user-images.githubusercontent.com/110046267/204727529-f54acfa6-b61b-4fb5-88ef-374f13bca650.png" />
              <Image src="https://user-images.githubusercontent.com/110046267/204727810-d97364ce-9a30-475b-8392-ad2cc395290d.png" />
              <Image src="https://user-images.githubusercontent.com/110046267/204727055-d1c44070-1b7c-4a77-9af5-ba4a719a1a5d.png" />
            </Carousel>
          </Box>

          <Box border="0px solid" width="auto" p="2%">
            <Text fontSize="3xl" color={"white"} >BlueFly</Text>
            <Text fontSize="2xl" color="green">
              (online shopping)
            </Text>

            <UnorderedList color={"white"}>
              <ListItem>
                Bluefly offers an e-commerce platform that sells designer
                apparel and accessories, household products and accessories at
                discounted prices.
              </ListItem>
              <ListItem>
                {" "}
                products are diet/fitness supplements, herbal products, pain
                relievers, beauty care products and surgical supplies.
              </ListItem>
            </UnorderedList>

            <Box>
              <Text fontSize="2xl" color="green">
                Tech-Stack
              </Text>
              <Text color={"white"}> HTML | CSS | JavaScript </Text>
            </Box>
            <Box border="0px solid " p="20px">
              <Flex
                flexDirection={["column", "column", "row", "row", "row"]}
                gap="5%"
              >
                <a
                  href="https://github.com/kaushalragini/BlueFly_Fashion"
                  target="_blank"
                >
                  {" "}
                  <Button
                    m="2%"
                    style={{
                      backgroundColor: "gray",
                      fontFamily: "sans-serif",
                      color: "black",
                      border: "1px solid #3AF807",
                    }}
                  >
                    Github
                  </Button>{" "}
                </a>
                <a
                  href="https://resilient-peony-306a94.netlify.app/"
                  target="_blank"
                >
                  {" "}
                  <Button
                    m="2%"
                    style={{
                      backgroundColor: "gray",
                      fontFamily: "sans-serif",
                      color: "black",
                      border: "1px solid #3AF807",
                    }}
                  >
                    Deploy link
                  </Button>{" "}
                </a>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box border="1px solid gray" pt="3%" pl="2%" mt="2%">
        <Flex flexDirection={["column", "column", "row", "row", "row"]}>
          <Box pt="2%">
            <Carousel autoPlay={true} interval={2000}>
              <Image src="https://user-images.githubusercontent.com/110034660/209763494-c73e7ace-a824-4469-921c-74315acc59b0.PNG" />
              <Image src="https://user-images.githubusercontent.com/110034660/209763663-fcaa0933-0531-49fd-9613-9bf394147126.PNG" />
              <Image src="https://user-images.githubusercontent.com/110034660/209764423-e2cf5c64-9b23-43e8-a636-5a1ddd9b202b.PNG" />
            </Carousel>
          </Box>

          <Box border="0px solid" width="auto" p="2%">
            <Text fontSize="3xl" color={"white"}>MI</Text>

            <UnorderedList color={"white"}>
              <ListItem>
                Buy Xiaomi mobiles, accessories with Mi Protect, COD & EMI
                Options at Mi.com. EMI option, COD, Mi Protect available. Mi
                Protect Warranty. Hassle-Free Replacement. Cash on delivery.
                Vast Service Network. Free Shipping. Types: Mi 10, Mi Notebook,
                Mi TV, Mi Smart Band
              </ListItem>
            </UnorderedList>

            <Box>
              <Text fontSize="2xl" color="green">
                Tech-Stack
              </Text>
              <Text color={"white"}>HTML | CSS | JavaScript | React | Material-UI </Text>
            </Box>
            <Box border="0px solid " p="20px">
              <Flex
                flexDirection={["column", "column", "row", "row", "row"]}
                gap="5%"
              >
                <a href="https://github.com/krishnakevadiya/mi" target="_blank">
                  {" "}
                  <Button
                    m="2%"
                    style={{
                      backgroundColor: "gray",
                      fontFamily: "sans-serif",
                      color: "black",
                      border: "1px solid #3AF807",
                    }}
                  >
                    Github
                  </Button>{" "}
                </a>
                <a
                  href="https://thunderous-dusk-1ff50f.netlify.app/"
                  target="_blank"
                >
                  {" "}
                  <Button
                    m="2%"
                    style={{
                      backgroundColor: "gray",
                      fontFamily: "sans-serif",
                      color: "black",
                      border: "1px solid #3AF807",
                    }}
                  >
                    Deploy link
                  </Button>{" "}
                </a>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Projects;
