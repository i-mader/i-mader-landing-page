"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "./ui/use-toast";
import {
  contactFormSchema,
  ContactFormValues,
} from "@/lib/validation/contactValidation";
import { postContactForm } from "@/lib/api/contact";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const FormContactUs = () => {
  const t = useTranslations();
  const [loading, setLoading] = useState(false);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      question: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (values) => {
    setLoading(true);
    try {
      await postContactForm(values);
      toast({
        description: t('form_submit_success'), // Translation key for success message
      });
    } catch (error) {
      toast({
        variant: "destructive",
        description: t('form_submit_failure'), // Translation key for failure message
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50 text-white text-xl">
          {t('loading')}
        </div>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutral-700 text-xl">
                  {t('form_name_label')}
                </FormLabel>
                <FormControl className="mt-3">
                  <Input placeholder={t('form_name_placeholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutral-700 text-xl">
                  {t('form_email_label')}
                </FormLabel>
                <FormControl className="mt-3">
                  <Input placeholder={t('form_email_placeholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutral-700 text-xl">
                  {t('form_message_label')}
                </FormLabel>
                <FormControl className="mt-3">
                  <Textarea
                    rows={4}
                    placeholder={t('form_message_placeholder')}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-end mt-8">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="cursor-pointer max-w-max"
            >
              <Button
                type="submit"
                className="bg-primary-original hover:bg-opacity-90 rounded-none text-white font-medium text-base"
              >
                {t('form_send_button')}
              </Button>
            </motion.div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormContactUs;
