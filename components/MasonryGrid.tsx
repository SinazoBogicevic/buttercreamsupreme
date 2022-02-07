/* eslint-disable prettier/prettier */
import React, { ReactElement } from "react";
import "../styles/tailwind.css";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export type Props = {
  gridData: {
    image: string;
    key: number;
  }[];
};

export default function MasonryGrid({ gridData }: Props): ReactElement {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        overflowY: "scroll",
        marginBottom: "4rem",
      }}
    >
      <ImageList variant="masonry" cols={3} gap={8}>
        {gridData.map(({ image, key }) => (
          <ImageListItem key={key}>
            <img src={image} srcSet={image} alt={"cake"} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
