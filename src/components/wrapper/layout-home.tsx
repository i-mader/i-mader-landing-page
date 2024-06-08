"use client";
import React, { ReactNode, useLayoutEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Layout,
  Menu,
  Switch,
  theme,
} from "antd";
import Image from "next/image";

import type { MenuProps } from "antd";
import type { FormProps } from "antd";
import Link from "next/link";
const { Header, Content, Footer } = Layout;

type FieldType = {
  username?: string;
  email?: string;
  help?: string;
  helpDesc?: string;
  remember?: string;
};

type MenuItem = Required<MenuProps>["items"][number];

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const leftMenus: MenuItem[]=[
  {
    key: 1,
    label: (
      <Link href="#contact-us">
        <Button type="primary">
          <span className="font-semibold text-white">Contact Us</span>
        </Button>
      </Link>
    ),
  },
  {
    key: 2,
    label: (
      <Switch checkedChildren="EN" unCheckedChildren="ID" defaultChecked />
    ),
  },
];

const menus: MenuItem[] = [
  {
    key: 1,
    label: (
      <Link href="#home">
        <span className="font-semibold text-gray-800 hover:text-blue-600 cursor-pointer transition duration-300">Home</span>
      </Link>
    ),
  },
  {
    key: 2,
    label: (
      <Link href="#why-choose-us">
        <span className="font-semibold text-gray-800 hover:text-blue-600 cursor-pointer transition duration-300">Services</span>
      </Link>
    ),
  },
  {
    key: 3,
    label: (
      <Link href="#our-clients">
        <span className="font-semibold text-gray-800 hover:text-blue-600 cursor-pointer transition duration-300">Our Clients</span>
      </Link>
    ),
  },
  {
    key: 4,
    label: <span className="font-semibold text-gray-800 hover:text-blue-600 cursor-pointer transition duration-300">About</span>,
  },
  {
    key: 5,
    label: (
      <Link href="#blog">
        <span className="font-semibold text-gray-800 hover:text-blue-600 cursor-pointer transition duration-300">Blog</span>
      </Link>
    ),
  },
];

const menus2: MenuItem[] = [
  {
    key: 1,
    label: (
      <Link href="#home">
        <span className="font-semibold">HOME</span>
      </Link>
    ),
  },
  {
    key: 2,
    label: <span className="font-semibold">SERVICE</span>,
  },
  {
    key: 3,
    label: (
      <Link href="#our-clients">
        <span className="font-semibold">OUR CLIENTS</span>
      </Link>
    ),
  },
  {
    key: 4,
    label: <span className="font-semibold">ABOUT</span>,
  },
  {
    key: 5,
    label: (
      <Link href="#blog">
        <span className="font-semibold">BLOG</span>
      </Link>
    ),
  },
];

interface LayoutHome {
  children: ReactNode;
}

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const windowLocationHref = (WaRco: string, InitialMessage: string) => {
  window.location.href = `https://api.whatsapp.com/send?phone=${WaRco}&text=${InitialMessage}`;
};

const openWhatsApp = () => {
  windowLocationHref("6281272914023", "Hello I-Mader  ..");
};

const LayoutHome = ({ children }: LayoutHome) => {
  const [isMobile, setIsMobile] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useLayoutEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Layout>
      <Header id="home" className="flex items-center bg-white px-0 sm:px-12">
        <div className="img-brand demo-logo">
          <Image
            src="/images/i-mader-blue.png"
            alt="logo"
            width={200}
            height={200}
          />
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={menus}
          style={{ flex: 1, minWidth: 0, justifyContent: "start" }}
        />
        <Menu
          theme="light"
          mode="horizontal"
          selectedKeys={[]}
          items={leftMenus}
          style={{ flex: 1, minWidth: 0, justifyContent: "end" }}
        />
      </Header>
      <Content className="p-0">
        {/* <Breadcrumb items={[{ title: "sample" }, { title: "sample1" }]} /> */}
        <div className="p-0">{children}</div>
      </Content>
      <Footer
        id="contact-us"
        style={{ backgroundColor: "#0077FF" }}
        className="px-0 sm:px-12"
      >
        <div className="footer-contact-me">
          <h2 className="text-white text-xl sm:text-3xl font-bold text-center">
            Contact Me
          </h2>
          <h3 className="text-white text-xl sm:text-2xl font-bold text-center mt-4">
            Request Free Consultancy
          </h3>
          <div className="max-w-max sm:max-w-4xl m-auto mt-5 sm:mt-14">
            <Form
              className="m-auto"
              name="basic"
              initialValues={{ remember: false }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div className="grid grid-cols-6 sm:grid-cols-12 gap-4">
                <div className="col-span-6">
                  <div className="bg-white rounded-lg px-5 pt-5 pb-4">
                    <p className="font-bold text-xl mb-4">Got a new project in mind?</p>
                    <p>Let us know what you're envisioning! Simply fill out the form on the right, and our expert solution team will get back to you within 24 hours on weekdays.</p>
                    <p className="mt-5">
                      <span>
                        <img src="/images/address.png" alt="address" className="inline-block h-6 w-auto" /> &nbsp;
                        DKI Jakarta, Indonesia
                      </span>
                    </p>
                    <p className="mt-2">
                      <Link href="mailto:business@i-mader.tech">
                        <img src="/images/email.png" alt="Email" className="inline-block h-6 w-auto" /> &nbsp;
                        business@i-mader.tech
                      </Link>
                    </p>
                    <p className="mt-2">
                      <span>
                        <img src="/images/phone.png" alt="address" className="inline-block h-6 w-auto" /> &nbsp;
                        +6281272914023
                      </span>
                    </p>
                  </div>
                </div>

                <div className="col-span-6">
                  <div className="rounded-lg">
                    <div className="grid grid-cols-2 gap-x-4">
                      <div className="col-span-1">
                        <Form.Item<FieldType>
                          name="username"
                          rules={[
                            {
                              required: true,
                              message: "Name *",
                            },
                          ]}
                          style={{ width: "100%" }}
                        >
                          <Input placeholder="Name *" />
                        </Form.Item>
                      </div>
                      <div className="col-span-1">
                        <Form.Item<FieldType>
                          name="email"
                          rules={[
                            {
                              required: true,
                              message: "Email Address*",
                            },
                          ]}
                        >
                          <Input placeholder="Email Address*" />
                        </Form.Item>
                      </div>
                      {/* <div className="col-span-2">
                        <Form.Item<FieldType>
                          name="help"
                          rules={[
                            {
                              required: true,
                              message: "How can we help you?",
                            },
                          ]}
                        >
                          <Input placeholder="How can we help you?" />
                        </Form.Item>
                      </div> */}
                      <div className="col-span-2">
                        <Form.Item<FieldType>
                          name="helpDesc"
                          rules={[
                            {
                              required: true,
                              message: "How can we help you?",
                            },
                          ]}
                        >
                          <Input.TextArea
                            placeholder="How can we help you?"
                            rows={6}
                          />
                        </Form.Item>
                      </div>
                      <div className="col-span-2">
                        <Form.Item<FieldType>
                          name="remember"
                          valuePropName="checked"
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                        >
                          <Checkbox>
                            <span className="text-white">
                              By submitting, i’m agreed to the Terms & Conditons
                            </span>
                          </Checkbox>
                        </Form.Item>
                        <Form.Item>
                          <Button
                            size="large"
                            className="bg-[#00489A] rounded-full px-10"
                            type="primary"
                            htmlType="submit"
                          >
                            Request Now
                          </Button>
                        </Form.Item>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
        {/* <div className="flex flex-wrap gap-5 sm:gap-0 items-center justify-between">
          <Menu
            theme="dark"
            mode={`${isMobile ? "vertical" : "horizontal"}`}
            defaultSelectedKeys={["2"]}
            items={menus2}
            style={{ backgroundColor: "transparent" }}
          />
          <div className="w-full sm:w-auto flex flex-col sm:flex-row flex-wrap gap-5 sm:gap-10 items-start sm:items-center px-5 sm:px-0">
            <span className="text-white whitespace-nowrap">Subscribe Us</span>
            <div className="relative border h-[54px] w-full sm:w-[26rem] rounded-md overflow-hidden">
              <Input
                className="rounded-none absolute inset-0 bg-transparent text-white placeholder-white pl-8"
                placeholder="Enter Email Address"
              />
              <Button className="absolute right-0 h-full w-[8rem] sm:w-[13rem] rounded-none text-[#217BF4]">
                Subscribe
              </Button>
            </div>
          </div>
        </div> */}
      </Footer>
      <Footer style={{ backgroundColor: "#20202D" }} className="px-5 sm:px-12">
        <div className="bg-[#20202D]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <span className="order-1 sm:order-0 text-white">
              All Rights Reserved {new Date().getFullYear()}
            </span>
            <Image
              className="order-0 sm:order-1 relative -left-5 sm:-left-0"
              src="/images/i-mader-white.png"
              alt="logo"
              width={200}
              height={100}
            />
            <div className="flex items-center gap-5 py-5 sm:py-0">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-white">
                  <svg
                    width="22"
                    height="18"
                    viewBox="0 0 22 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.7627 3.13052C19.623 2.61485 20.2836 1.79833 20.5947 0.825458C19.7897 1.30287 18.898 1.64962 17.9489 1.83652C17.1889 1.02676 16.1061 0.520752 14.9078 0.520752C12.6067 0.520752 10.7412 2.38621 10.7412 4.6871C10.7412 5.01365 10.7781 5.33165 10.8491 5.63658C7.38636 5.46283 4.31635 3.80411 2.2614 1.28341C1.90276 1.89876 1.6973 2.61448 1.6973 3.37802C1.6973 4.82348 2.43292 6.09876 3.55087 6.8459C2.86784 6.82428 2.22545 6.63687 1.66365 6.32481C1.66335 6.34219 1.66335 6.35964 1.66335 6.37717C1.66335 8.39587 3.09953 10.0799 5.00554 10.4626C4.65589 10.5578 4.28782 10.6087 3.90779 10.6087C3.63934 10.6087 3.37831 10.5826 3.12397 10.5339C3.65412 12.1893 5.1928 13.3938 7.01599 13.4275C5.59007 14.5449 3.79355 15.211 1.84155 15.211C1.50528 15.211 1.17361 15.1913 0.847656 15.1528C2.69149 16.335 4.88156 17.0247 7.23446 17.0247C14.898 17.0247 19.0887 10.676 19.0887 5.17024C19.0887 4.98958 19.0847 4.80989 19.0767 4.63124C19.8907 4.04382 20.5971 3.30998 21.1557 2.47445C20.4085 2.80583 19.6055 3.02979 18.7627 3.13052Z"
                      fill="#2B2B39"
                    />
                  </svg>
                </div>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-white">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.95443 2.25418C12.4753 2.25418 12.7503 2.25418 13.7586 2.30002C14.6753 2.34585 15.1794 2.48335 15.5003 2.62085C15.9128 2.75835 16.2794 3.03335 16.6003 3.30835C16.9211 3.62918 17.1503 3.99585 17.2878 4.40835C17.4253 4.72918 17.5628 5.23335 17.6086 6.15001C17.6544 7.15835 17.6544 7.43335 17.6544 9.95418C17.6544 12.475 17.6544 12.75 17.6086 13.7583C17.5628 14.675 17.4253 15.1792 17.2878 15.5C16.9669 16.325 16.3253 16.9667 15.5003 17.2875C15.1794 17.425 14.6753 17.5625 13.7586 17.6083C12.7503 17.6542 12.4753 17.6542 9.95443 17.6542C7.43359 17.6542 7.15859 17.6542 6.15026 17.6083C5.23359 17.5625 4.72943 17.425 4.40859 17.2875C3.99609 17.15 3.62943 16.875 3.30859 16.6C2.98776 16.2792 2.75859 15.9125 2.62109 15.5C2.48359 15.1792 2.34609 14.675 2.30026 13.7583C2.25443 12.75 2.25443 12.475 2.25443 9.95418C2.25443 7.43335 2.25443 7.15835 2.30026 6.15001C2.34609 5.23335 2.48359 4.72918 2.62109 4.40835C2.75859 3.99585 3.03359 3.62918 3.30859 3.30835C3.62943 2.98751 3.99609 2.75835 4.40859 2.62085C4.72943 2.48335 5.23359 2.34585 6.15026 2.30002C7.15859 2.25418 7.47943 2.25418 9.95443 2.25418ZM9.95443 0.55835C7.38776 0.55835 7.06693 0.55835 6.05859 0.604183C5.05026 0.650016 4.36276 0.787516 3.76693 1.06252C3.17109 1.29168 2.62109 1.65835 2.16276 2.11668C1.70443 2.57502 1.29193 3.17085 1.06276 3.76668C0.833594 4.36251 0.65026 5.05001 0.604427 6.05835C0.558594 7.06668 0.558594 7.38751 0.558594 9.95418C0.558594 12.5208 0.558594 12.8417 0.604427 13.85C0.65026 14.8583 0.78776 15.5458 1.06276 16.1417C1.29193 16.7375 1.65859 17.3333 2.16276 17.7917C2.62109 18.25 3.21693 18.6625 3.81276 18.8917C4.40859 19.1208 5.09609 19.3042 6.10443 19.35C7.11276 19.3958 7.43359 19.3958 10.0003 19.3958C12.5669 19.3958 12.8878 19.3958 13.8961 19.35C14.9044 19.3042 15.5919 19.1667 16.1878 18.8917C17.4711 18.3875 18.4336 17.425 18.9378 16.1417C19.1669 15.5458 19.3503 14.8583 19.3961 13.85C19.4419 12.8417 19.4419 12.5208 19.4419 9.95418C19.4419 7.38751 19.4419 7.06668 19.3961 6.05835C19.3503 5.05001 19.2128 4.36251 18.9378 3.76668C18.7086 3.12501 18.3419 2.57502 17.8378 2.11668C17.3794 1.65835 16.7836 1.24585 16.1878 1.01668C15.5919 0.787516 14.9044 0.604183 13.8961 0.55835C12.8419 0.55835 12.5211 0.55835 9.95443 0.55835Z"
                      fill="#2B2B39"
                    />
                    <path
                      d="M9.95313 5.1416C7.29479 5.1416 5.14062 7.29577 5.14062 9.9541C5.14062 12.6124 7.29479 14.7666 9.95313 14.7666C12.6115 14.7666 14.7656 12.6124 14.7656 9.9541C14.8115 7.29577 12.6573 5.1416 9.95313 5.1416ZM9.95313 13.1166C8.21146 13.1166 6.83646 11.6958 6.83646 9.99994C6.83646 8.25827 8.25729 6.88327 9.95313 6.88327C11.6948 6.88327 13.0698 8.3041 13.0698 9.99994C13.1156 11.6958 11.6948 13.1166 9.95313 13.1166Z"
                      fill="#2B2B39"
                    />
                    <path
                      d="M14.9974 6.10417C15.6302 6.10417 16.1432 5.59116 16.1432 4.95833C16.1432 4.32551 15.6302 3.8125 14.9974 3.8125C14.3646 3.8125 13.8516 4.32551 13.8516 4.95833C13.8516 5.59116 14.3646 6.10417 14.9974 6.10417Z"
                      fill="#2B2B39"
                    />
                  </svg>
                </div>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-white">
                  <svg
                    width="10"
                    height="20"
                    viewBox="0 0 10 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.51389 10.0949V19.2431H6.54861V10.2378H9.05555L9.45139 6.95023H6.54861V4.94908C6.54861 3.9485 6.8125 3.37674 8 3.37674H9.58333V0.51794C9.31944 0.51794 8.39583 0.375 7.34028 0.375C5.09722 0.375 3.51389 1.94734 3.51389 4.6632V6.95023H0.875V10.0949H3.51389Z"
                      fill="#2B2B39"
                    />
                  </svg>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/company/i-mader-tech/about/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-white">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.56817 6.59727C5.67587 6.59727 6.57383 5.6993 6.57383 4.5916C6.57383 3.4839 5.67587 2.58594 4.56817 2.58594C3.46047 2.58594 2.5625 3.4839 2.5625 4.5916C2.5625 5.6993 3.46047 6.59727 4.56817 6.59727Z"
                      fill="#2B2B39"
                    />
                    <path
                      d="M8.4661 8.11704V19.2445H11.921V13.7417C11.921 12.2897 12.1942 10.8835 13.9945 10.8835C15.7701 10.8835 15.7921 12.5436 15.7921 13.8334V19.2454H19.2489V13.1431C19.2489 10.1456 18.6035 7.84204 15.1 7.84204C13.4179 7.84204 12.2904 8.76512 11.8294 9.63871H11.7826V8.11704H8.4661ZM2.83594 8.11704H6.29635V19.2445H2.83594V8.11704Z"
                      fill="#2B2B39"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Footer>
      <button
        className="fixed bottom-4 right-4 w-14 h-14 max-w-[56px] cursor-pointer z-[999]"
        onClick={openWhatsApp}
      >
        <Image
          src="/images/wa.svg"
          alt="WhatsApp"
          layout="fill"
          objectFit="contain"
        />
      </button>
    </Layout>
  );
};

export default LayoutHome;
