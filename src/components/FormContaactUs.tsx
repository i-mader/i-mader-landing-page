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

const FormContactUs = () => {
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
        description: "Form submitted successfully!",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Failed to submit form.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50 text-white text-xl">
          Loading...
        </div>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutral-700 text-xl">Name</FormLabel>
                <FormControl className="mt-3">
                  <Input placeholder="your name here..." {...field} />
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
                  Email
                </FormLabel>
                <FormControl className="mt-3">
                  <Input placeholder="yourmail@company.com" {...field} />
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
                  Message
                </FormLabel>
                <FormControl className="mt-3">
                  <Textarea
                    rows={4}
                    placeholder="your message here..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-end mt-8">
            <Button
              type="submit"
              className="bg-primary-original hover:bg-opacity-90 rounded-none text-white font-medium text-base"
            >
              Send Message
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormContactUs;
