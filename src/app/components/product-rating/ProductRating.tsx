import React from 'react';
import Star from '../../asset/star.svg';
import StarHalf from '../../asset/star-half.svg';
import StarFill from '../../asset/star-fill.svg';
import Image from 'next/image';

function ProductRating(props: any) {
  const { rate } = props;

  const stars: JSX.Element[] = [];
  const maxRating = 5;

  for (let i = 1; i <= maxRating; i++) {
    if (rate >= i) {
      stars.push(<Image key={i} src={StarFill} alt={`star-Fill-${i}`} />);
    } else if (rate + 0.5 === i) {
      stars.push(<Image key={i} src={StarHalf} alt={`star-half-${i}`} />);
    } else {
      stars.push(<Image key={i} src={Star} alt={`star-${i}`} />);
    }
  }

  return <>{stars}</>;
}

export default ProductRating;
