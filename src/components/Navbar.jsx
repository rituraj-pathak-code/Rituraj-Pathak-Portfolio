import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
  DrawerFooter,
} from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";

import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div class="nav-bar">
      <div class="logo">
        <HashLink to={"/#home"}>RP.</HashLink>
      </div>
      <ul>
        <li>
          <HashLink to={"/#home"}>Home</HashLink>
        </li>
        <li>
          <HashLink to={"/#about"}>About</HashLink>
        </li>
        <li>
          <HashLink to={"/#projects"}>Projects</HashLink>
        </li>
        <li>
          <HashLink to={"/#contact"}>Connect</HashLink>
        </li>
      </ul>
      <div className="menu_btn">
        <Button
          marginRight={"1"}
          background={"none"}
          color={"#c6f55a"}
          border={"none"}
          cursor={"pointer"}
          onClick={onOpen}
        >
          <BiMenuAltLeft size={"35"} />
        </Button>
      </div>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton color={"#bbd186"} />
            <DrawerHeader backgroundColor={"#01140e"} color={"#bbe45d"}>
              <h1 style={{ fontSize: "3rem" }}>RP.</h1>
              <h2>Rituraj's Portfolio</h2>
            </DrawerHeader>
            <DrawerBody backgroundColor={"#033626"}>
              <VStack alignItems={"flex-start"}>
                <Button color={"#bbd186"} variant={"ghost"} onClick={onClose}>
                  <Link
                    activeClass="active"
                    to="home"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={onClose}
                  >
                    Home
                  </Link>
                </Button>
                <Button color={"#bbd186"} variant={"ghost"} onClick={onClose}>
                  <Link
                    activeClass="active"
                    to="about"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={onClose}
                  >
                    About
                  </Link>
                </Button>
                <Button color={"#bbd186"} variant={"ghost"} onClick={onClose}>
                  <Link
                    activeClass="active"
                    to="projects"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={onClose}
                  >
                    Projects
                  </Link>
                </Button>
                <Button color={"#bbd186"} variant={"ghost"}>
                  <Link
                    activeClass="active"
                    to="contact"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={onClose}
                  >
                    Connect
                  </Link>
                </Button>
              </VStack>

              <HStack
                w={"full"}
                justifyContent={"space-evenly"}
                position={"absolute"}
                bottom={"10"}
                left={"0"}
              >
                <a
                  href={"https://github.com/rituraj-pathak-code"}
                  target="_blank"
                >
                  <FontAwesomeIcon className="social-icon" icon={faGithub} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rituraj-pathak-0983191a0/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="social-icon"
                    icon={faLinkedinIn}
                  />
                </a>
              </HStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </div>
  );
};

export default Navbar;
