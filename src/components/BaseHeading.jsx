import React from 'react';

const BaseHeading = ({ level, text }) => {
  const HeadingTag = `h${level}`;

  return (
    <HeadingTag className="text-[50px] md:text-[64px] text-center font-header font-bold">
      {text}
    </HeadingTag>
  );
};

export default BaseHeading;