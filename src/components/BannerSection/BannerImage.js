import Prototypes from 'prop-types';
import React from 'react';

function BannerImage(props) {
  const { img } = props;
  return (
    <>
      <img src={img} style={{ width: '56rem' }} alt="cryptocollection" className="cryptocollectionImage" />
    </>
  );
}

export default BannerImage;
BannerImage.propTypes = {
  img: Prototypes.any,
};
