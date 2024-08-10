"use client";
import React from "react";

import { Button } from "./ui/button";
import IconWa from "./icons/whatsapp";
import Link from "next/link";

const Whatsapp = () => {
  const windowLocationHref = (WaRco: string, InitialMessage: string) => {
    window.location.href = `https://api.whatsapp.com/send?phone=${WaRco}&text=${InitialMessage}`;
  };
  return (
    <Button
      onClick={() => windowLocationHref("6281272914023", "Hello I-Mader  ..")}
      className="text-white bg-green hover:bg-opacity-90 rounded-none"
    >
      <IconWa />
      &nbsp;Whatsapp Us
    </Button>
  );
};

export default Whatsapp;
