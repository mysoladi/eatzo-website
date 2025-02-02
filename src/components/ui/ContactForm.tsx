"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "~/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"

// Define your schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string({ required_error: "Please select a subject." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  // NOTE: We remove the onSubmit handler since we want the browser's default
  // submission behavior to send data to FormSubmit.

  return (
    <div className="min-h-screen bg-background flex flex-col items-center pt-8">
      {/* Back to Home link, outside the form container, aligned to the top left */}
      <div className="w-full max-w-md mb-4">
        <Link href="/" className="text-primary ml-4 hover:underline">
          &larr; Back to Home
        </Link>
      </div>
      <div className="w-full max-w-md mx-auto p-6 bg-card rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
        <Form {...form}>
          <form
            action="https://formsubmit.co/jsoladine@gmail.com"
            method="POST"
            className="space-y-6"
          >
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      {...field}
                      className="bg-background text-white border-gray-800 focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      {...field}
                      className="bg-background text-white border-gray-800 focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Subject Field */}
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Subject</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-background text-white border-gray-800 focus:border-primary">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="catering">Catering Inquiry</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="location">Location Request</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Message Field */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here"
                      {...field}
                      className="bg-background text-white border-gray-800 focus:border-primary min-h-[120px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-secondary hover:bg-primary text-black font-bold transition duration-300"
            >
              Send Message
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
