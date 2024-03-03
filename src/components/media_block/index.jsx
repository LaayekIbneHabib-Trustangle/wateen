import React from "react";
import { Box, Primary, Secondary } from "./style";
import { AnimatedButton } from "../";

const MediaBlock = (props) => {
  console.log(props?.row);

  return (
    <>
      <Box flxDir={props?.row}>
        <Primary theme={props?.theme}>
          <h2>{props?.h2}</h2>
          <h3>{props?.h3}</h3>
          <p>{props?.p}</p>
          <ul>
            <li>
              <img src={props?.ul?.[0]?.[0]} alt="" />
              <span>{props?.ul?.[0]?.[1]}</span>
            </li>
            <li>
              <img src={props?.ul?.[1]?.[0]} alt="" />
              <span>{props?.ul?.[1]?.[1]}</span>
            </li>
            <li>
              <img src={props?.ul?.[2]?.[0]} alt="" />
              <span>{props?.ul?.[2]?.[1]}</span>
            </li>
            <li>
              <img src={props?.ul?.[3]?.[0]} alt="" />
              <span>{props?.ul?.[3]?.[1]}</span>
            </li>
          </ul>
          <AnimatedButton bg={props?.btnClr} name="Learn More‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎" />
        </Primary>
        <Secondary>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "6rem",
            }}
          >
            <img className="laptop" src="/images/laptop.png" alt="" />
            <img
              className="screen"
              style={{
                position: "relative",
                zIndex: "1",
              }}
              src={props?.img}
              alt=""
            />
            <p>{props?.caption}</p>
          </div>
        </Secondary>
      </Box>
    </>
  );
};

export default MediaBlock;
