/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import BodyPartsCard from './BodyPartsCard.jsx';

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => {
        scrollPrev();
        console.log('clicked left');
      }}
      className="left-arrow"
    >
      <img src={LeftArrowIcon} alt="Left arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => {
        scrollNext();
        console.log('clicked right');
      }}
      className="right-arrow"
    >
      <img src={RightArrowIcon} alt="Right arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
    >
      {
        data.map((item) => (
          <Box
            key={item.id || item }
            itemId={item.id || item }
            title={item.id || item }
            m="0 40px"
          >
            <BodyPartsCard
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </Box>
        ))
      }
    </ScrollMenu>
);

export default HorizontalScrollbar;