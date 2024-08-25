"use client";
import React from "react";
import { Button } from "./ui/button";
import IconWa from "./icons/whatsapp";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Whatsapp = () => {
  const t = useTranslations();
  const windowLocationHref = (WaRco: string, InitialMessage: string) => {
    window.location.href = `https://api.whatsapp.com/send?phone=${WaRco}&text=${InitialMessage}`;
  };
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="relative z-40 cursor-pointer max-w-max"
    >
      <Button
        onClick={() => windowLocationHref("6281272914023", "Hello I-Mader ..")}
        className="text-white bg-green hover:bg-opacity-90 rounded-none"
      >
        <IconWa />
        &nbsp;{t('pioneer_whatsapp')}
      </Button>
    </motion.div>
  );
};

export default Whatsapp;
