import { Button } from "@/components/ui/button";
import {
  FacebookIcon,
  FileTextIcon,
  InstagramIcon,
  LocationEditIcon,
  LucideIcon,
  MailIcon,
  MessageSquareIcon,
  PhoneIcon,
  TwitterIcon,
  UserIcon,
} from "lucide-react";
import React from "react";

export default function Contact() {
  return (
    <section className="py-16 px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="title-header mb-2">Contact Us</div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tighter mb-4">
            Let{"'"}s Work Together
          </h2>
          <p className="text-gray-600 max-w-xl">
            Have a question, partnership idea, or just want to say hello? We
            {"'"}d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-7 gap-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Information */}
          <div className="lg:col-span-3 relative overflow-hidden">
            <div className="bg-primary rounded-2xl p-8 text-white h-full">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="size-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <LocationEditIcon className="size-4" />
                  </div>
                  <div>
                    <div className="text-lg">Our Location</div>
                    <div className="text-sm text-white/80">
                      Flat 37A, Rockvale Manors, Rockvale Estate, Apo, FCT,
                      Abuja.
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="size-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <LocationEditIcon className="size-4" />
                  </div>
                  <div>
                    <div className="text-lg">Email</div>
                    <div className="text-sm text-white/80">
                      contact@mountainfarm.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="size-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <LocationEditIcon className="size-4 bg-primary" />
                  </div>
                  <div>
                    <div className="text-lg">Phone</div>
                    <div className="text-sm text-white/80">
                      +234 803 123 4567
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="font-medium mb-4">Stay Connected</div>
                <div className="flex space-x-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-[#3b5998]">
                      <FacebookIcon className="size-5" />
                    </span>
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-[#3b5998]">
                      <TwitterIcon className="size-5" />
                    </span>
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-[#3b5998]">
                      <InstagramIcon className="size-5" />
                    </span>
                  </div>
                </div>
              </div>
              {/* Decorative Circles */}
              <div className="absolute w-full bottom-0">
                <div className="bg-white/80 absolute -right-20 -bottom-10 p-32 size-32 rounded-full"></div>
                <div className="bg-white/40 absolute right-0 -bottom-40 z-10 p-32 size-32 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ContactForm = () => {
  return (
    <div className="lg:col-span-4">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputWithIcon
            name="firstName"
            placeholder="First Name"
            icon={UserIcon}
          />
          <InputWithIcon
            name="lastName"
            placeholder="Last Name"
            icon={UserIcon}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputWithIcon
            name="email"
            type="email"
            placeholder="Email Address"
            icon={MailIcon}
          />
          <InputWithIcon
            name="phone"
            type="tel"
            placeholder="Phone Number"
            icon={PhoneIcon}
          />
        </div>

        <InputWithIcon
          name="subject"
          placeholder="Subject"
          icon={FileTextIcon}
        />

        <TextareaWithIcon
          name="message"
          placeholder="Message"
          icon={MessageSquareIcon}
          rows={6}
        />

        <Button className="py-4 px-6">Send Message</Button>
      </form>
    </div>
  );
};

type InputWithIconProps = {
  name: string;
  placeholder: string;
  type?: string;
  icon: LucideIcon;
};

function InputWithIcon({
  name,
  placeholder,
  type = "text",
  icon: Icon,
}: InputWithIconProps) {
  return (
    <div className="relative">
      <label htmlFor={name} className="sr-only">
        {placeholder}
      </label>
      <div className="relative rounded-xl bg-gray-100 pl-12 pr-4 py-3 transition focus-within:bg-white focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/30">
        {/* Left dashed accent */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 border-dashed border-primary rounded-l-xl" />
        {/* Icon */}
        <div className="absolute inset-y-0 left-3 flex items-center text-primary">
          <Icon className="w-5 h-5" />
        </div>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          aria-label={placeholder}
          className="w-full bg-transparent outline-none placeholder:text-gray-500"
        />
      </div>
    </div>
  );
}

type TextareaWithIconProps = {
  name: string;
  placeholder: string;
  rows?: number;
  icon: LucideIcon;
};

function TextareaWithIcon({
  name,
  placeholder,
  rows = 5,
  icon: Icon,
}: TextareaWithIconProps) {
  return (
    <div className="relative">
      <label htmlFor={name} className="sr-only">
        {placeholder}
      </label>
      <div className="relative rounded-xl bg-gray-100 pl-12 pr-4 py-3 transition focus-within:bg-white focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/30">
        {/* Left dashed accent */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 border-dashed border-primary rounded-l-xl" />
        {/* Icon */}
        <div className="absolute left-3 top-3 text-primary">
          <Icon className="w-5 h-5" />
        </div>
        <textarea
          id={name}
          name={name}
          rows={rows}
          placeholder={placeholder}
          aria-label={placeholder}
          className="w-full bg-transparent outline-none placeholder:text-gray-500 resize-none pt-0"
        />
      </div>
    </div>
  );
}
