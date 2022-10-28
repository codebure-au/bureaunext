"use client";

import React, { useEffect } from "react";

const Title: React.FC<{ text: string }> = ({ text }) => {
  useEffect(() => {
    document.title = text;
  }, [text]);

  return <></>;
};

export default Title;
