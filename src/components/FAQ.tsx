import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { dataFaq } from "@/lib/data";

const SectionFAQ = () => {
  return (
    <section className="faq">
      <div className="container mx-auto">
        <h1 className="text-white font-semibold font-raleway">
          {dataFaq.title}
        </h1>
        <p className="text-white mt-2">{dataFaq.desc}</p>
        <div className="mt-8 lg:mt-[70px]">
          <Accordion type="single" collapsible className="w-full">
            {dataFaq.data.map((item: any) => {
              return (
                <AccordionItem
                  value={`item-${item.id}`}
                  key={item.id}
                  className="border-b border-neutral-500 mt-6"
                >
                  <AccordionTrigger className="text-white text-base lg:text-[28px] hover:no-underline text-left">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-sm">
                    {item.desc}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default SectionFAQ;
