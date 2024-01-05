import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import bgImage from "../../assets/star-bgPro.png";

import {
  conditonsList1,
  conditonsList2,
  conditonsList3,
  conditonsList4,
  conditonsList5,
  conditonsList6,
  conditonsList7,
  conditonsList8,
  privacyList8,
  privacyList9,
  privacyListFive,
  privacyListFour,
  privacyListOne,
  privacyListSeven,
  privacyListSix,
  privacyListThree,
  privacyListTwo,
} from "../../utils/data";

const Privacy = () => {
  const navigate = useNavigate();
  const [currentActive, setCurrentActive] = useState(null);

  return (
    <div
      className="min-h-screen bg-[#2c3135]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <header className="flex items-center gap-10 left-5 top-5 z-10 py-5 ml-2s">
        <button className="back__btn" onClick={() => navigate(-1)}>
          <IoIosArrowBack className="text-3xl" />
        </button>
        <Link to="/" className="h-[40px]">
          <img src={Logo} alt="logo" className="h-full w-full object-contain" />
        </Link>
        <h1 className="text-3xl font-bold font-poppins">Legal Information</h1>
      </header>
      <div className="flex flex-col gap-2">
        <div className="bg-dark-blue-1">
          <button
            className="w-full flex items-center py-5 font-poppins text-3xl font-bold"
            onClick={() =>
              currentActive !== 2 ? setCurrentActive(2) : setCurrentActive(null)
            }
          >
            Animade Terms & Conditions{" "}
          </button>
          {currentActive === 2 && (
            <div className="p-14 text-base font-light">
              <p className="mb-8 font-bold">Last updated December 13, 2023</p>
              <div className="font-light">
                <p className="mb-4">
                  Welcome to Animade (
                  <a
                    href="https://www.animade.world"
                    target="_blank"
                    className="font-semibold text-[#3498db]"
                  >
                    www.animade.world
                  </a>
                  ), an online platform that enables users to produce and upload
                  designs to Print-On-Demand (e-commerce) platforms for the
                  purposes of buying, selling, and showcasing. I am privileged
                  to present to you this document which outlines the terms and
                  conditions ("T&Cs") that govern the use of our platform.
                </p>
                <p className="mb-4">
                  Throughout these terms and conditions, the expressions "we,"
                  "us,", “the platform” and "our" refer to Animade, while "you"
                  and "user" denote individuals who utilise our platform. By
                  utilising our platform, you enter into a legally binding
                  agreement to comply with these T&Cs. It is mandatory that you
                  carefully read and comprehend these terms before creating an
                  account with us. Should you find that you do not concur with
                  any of the conditions stipulated herein, we respectfully
                  request that you do not proceed with the use of our platform.
                </p>
                <p className="mb-4">
                  As a user of our platform, you have the obligation to provide
                  accurate information when creating an account, maintain the
                  security and confidentiality of your login credentials, and
                  promptly report any unauthorised use of your account. We
                  reserve the right to refuse service to any person, monitor
                  user activities on the platform, and collect and process data
                  concerning user access and use of the platform. In the event
                  of any disputes with third-party providers, you, as a user,
                  are responsible for resolving them. The platform cannot be
                  held responsible for any claims or damages.
                </p>
                <p className="mb-4">
                  We may display advertisements, use your data for marketing
                  purposes, and share your data with third-party providers.
                  However, you have the right to opt out of any marketing
                  communications from our platform at any time. Additionally,
                  you may request the deletion of your account and data, except
                  for data that is owned by the platform in accordance with this
                  document. Please note that we are not liable for any loss or
                  damage resulting from a data breach, and you assume full
                  responsibility for the security of your account and data.
                  Please review the full details of the terms and conditions
                  provided below.
                </p>
              </div>
              <div className="mb-1">
                <ol>
                  <li className="">
                    Account Creation and Use
                    <ol>
                      {conditonsList1.map((item, i) => (
                        <li key={i} className="pl-5 py-1">
                          {item}
                        </li>
                      ))}
                    </ol>
                  </li>
                  <li>
                    Pricing and Design Packages
                    <ol>
                      {conditonsList2.map((item, i) => (
                        <li key={i} className="pl-5 py-1">
                          {item?.text}
                          {item?.array && (
                            <ol>
                              {item?.array.map((nestedItem, j) => (
                                <li key={j}>{nestedItem}</li>
                              ))}
                            </ol>
                          )}
                        </li>
                      ))}
                    </ol>
                  </li>

                  <li>
                    User Responsibilities
                    <ol>
                      {conditonsList3.map((item, i) => (
                        <li key={i} className="pl-5 py-1">
                          {item}
                        </li>
                      ))}
                    </ol>
                  </li>
                  <li>
                    Changes and Termination
                    <ol>
                      {conditonsList4.map((item, i) => (
                        <li key={i} className="pl-5 py-1">
                          {item?.text}
                          {item?.array && (
                            <ol>
                              {item?.array.map((nestedItem, j) => (
                                <li key={j}>{nestedItem}</li>
                              ))}
                            </ol>
                          )}
                        </li>
                      ))}
                    </ol>
                  </li>
                  <li>
                    The Reclamation Process
                    <ol>
                      {conditonsList5.map((item, i) => (
                        <li key={i} className="pl-5 py-1">
                          {item?.text}
                          {item?.array && (
                            <ol>
                              {item?.array.map((nestedItem, j) => (
                                <li key={j}>{nestedItem}</li>
                              ))}
                            </ol>
                          )}
                        </li>
                      ))}
                    </ol>
                  </li>
                  <li>
                    Additional Terms
                    <ol>
                      {conditonsList6.map((item, i) => (
                        <li key={i} className="pl-5 py-1">
                          {item?.text}
                          {item?.array && (
                            <ol>
                              {item?.array.map((nestedItem, j) => (
                                <li key={j}>{nestedItem}</li>
                              ))}
                            </ol>
                          )}
                        </li>
                      ))}
                    </ol>
                  </li>
                  <li>
                    Disclaimers and Limitations of Liability
                    <ol>
                      {conditonsList7.map((item, i) => (
                        <li key={i} className="pl-5 py-1">
                          {item}
                        </li>
                      ))}
                    </ol>
                  </li>
                  <li>
                    Governing Law and Jurisdiction
                    <ol>
                      {conditonsList8.map((item, i) => (
                        <li key={i} className="pl-5 py-1">
                          {item?.text}
                          {item?.array && (
                            <ol>
                              {item?.array.map((nestedItem, j) => (
                                <li key={j}>{nestedItem}</li>
                              ))}
                            </ol>
                          )}
                        </li>
                      ))}
                    </ol>
                  </li>
                </ol>

                <p>
                  In conclusion, the terms and conditions outlined above serve
                  as the legal agreement between Animade, the online platform
                  for design production and upload, and its users. By creating
                  an account on the platform, users agree to comply with the
                  provisions set forth in these T&Cs. It is mandatory for users
                  to read and comprehend these terms in full before proceeding
                  with the use of the platform. The provisions include account
                  creation and use, pricing and design packages, among others.
                  Any disputes shall be resolved in accordance with the
                  governing law and jurisdiction specified in the agreement.
                </p>
                <p className="mt-5">
                  Please contact us via email:{" "}
                  <a
                    href="mailto:animade.world@gmail.com"
                    className="font-semibold text-[#3498db]"
                  >
                    animade.world@gmail.com
                  </a>
                  , or on the ‘contact us’ form on our website
                  <a
                    href="https://www.animade.world"
                    target="_blank"
                    className="font-semibold text-[#3498db]"
                  >
                    www.animade.world
                  </a>
                  . if you have any questions or concerns, we hope to clear any
                  issues up.
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="bg-dark-blue-1">
          <button
            className="w-full flex items-center py-5 font-poppins text-3xl font-bold"
            onClick={() =>
              currentActive !== 1 ? setCurrentActive(1) : setCurrentActive(null)
            }
          >
            Animade Privacy Policy
          </button>
          {currentActive === 1 && (
            <div className="p-14 text-base font-light">
              <p className="mb-8 font-bold">Last updated December 13, 2023</p>
              <div className="font-light">
                <p className="mb-4">
                  This privacy policy shall govern the relationship between the
                  User of this Website and Animade, the proprietor and provider
                  of this Website. Animade is committed to upholding the privacy
                  of your information and this policy shall apply to any and all
                  Data collected by us or provided by you, in relation to your
                  use of the Website.
                </p>
                <p className="mb-4">
                  It is important to note that this privacy policy should be
                  read in conjunction with our Terms and Conditions, which can
                  be accessed at{" "}
                  <a
                    className="text-blue-500 font-bold"
                    href="https://animade.world/legal"
                    target="_blank"
                  >
                    https://animade.world/legal.
                  </a>
                </p>
              </div>
              <ol className="privacy_ol">
                <li>
                  The following definitions shall be applied throughout this
                  privacy policy:
                  <ul className="pl-14 list-lower-alpha">
                    {privacyListOne.map((item, i) => (
                      <li key={i} className="py-1">
                        {item}
                      </li>
                    ))}
                    <li>
                      "Website" refers to the website that you are currently
                      using,
                      <a
                        href="https://www.animade.world"
                        target="_blank"
                        className="text-blue-500 font-bold"
                      >
                        https://www.animade.world
                      </a>
                      , and any sub-domains of this site unless expressly
                      excluded by their own terms and conditions.
                    </li>
                  </ul>
                </li>
                <li>
                  Throughout this privacy policy, unless the context requires
                  otherwise:
                  <ul className="pl-14 list-lower-alpha">
                    {privacyListTwo.map((item, i) => (
                      <li key={i} className="py-1">
                        {typeof item === "string" ? (
                          item
                        ) : Array.isArray(item) ? (
                          <ul className="pl-14 list-decimal">
                            {item.map((nestedItem, j) => (
                              <li key={j}>{nestedItem}</li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </li>
                <p className="font-bold mb-3">Scope of this Privacy Policy</p>
                <li>
                  This Privacy Policy applies only to the actions of Animade and
                  Users with respect to this Website. It does not extend to any
                  websites that can be accessed from this Website including, but
                  not limited to, any links we may provide to social media
                  websites.
                </li>
                <li>
                  For purposes of the applicable Data Protection Laws, Animade
                  is the "data controller". This means that Animade determines
                  the purposes for which, and the manner in which, your Data is
                  processed.
                </li>
                <p className="font-bold mb-3">Data Collected</p>
                <li>
                  The following data may be collected, including personal data,
                  from you:
                  <ul className="pl-8 list-lower-alpha">
                    {privacyListThree.map((li, i) => (
                      <li key={i} className="mb-3">
                        {li}
                      </li>
                    ))}
                  </ul>
                </li>
                <p className="mb-3">
                  All of the data collected will be processed in accordance with
                  this privacy policy.
                </p>
                <p className="font-bold mb-3">How we Collect Data</p>
                <li className="mb-3">
                  We collect data in the following ways:
                  <ul className="pl-8 list-lower-alpha">
                    {privacyListFour.map((li, i) => {
                      if (li.list) {
                        return (
                          <li key={i} className="pl-8 list-lower-alpha">
                            {li.text}
                            <ul className="pl-8">
                              {li.list.map((liOfLi, index) => (
                                <li key={index} className="list-disc mb-3">
                                  {liOfLi}
                                </li>
                              ))}
                            </ul>
                          </li>
                        );
                      } else {
                        return <li key={i}>{li.text}</li>;
                      }
                    })}
                  </ul>
                </li>
                <p className="mb-3">
                  We collect Data in accordance with this privacy policy and any
                  applicable laws and regulations.
                </p>
                <p className="font-bold mb-3">Our use of Data</p>
                <li className="">
                  Any or all of the above Data may be required by us from time
                  to time in order to provide you with the best possible service
                  and experience when using our Website. Specifically, Data may
                  be used by us for the following reasons:
                  <ul className="pl-8 list-lower-alpha mb-3">
                    {privacyListFive.map((li, i) => (
                      <li key={i} className="mb-3">
                        {li}
                      </li>
                    ))}
                  </ul>
                </li>
                <p className="mb-8">
                  In each case, in accordance with this privacy policy.
                </p>
                <li>
                  We may use your Data for the above purposes if we deem it
                  necessary to do so for our legitimate interests. If you are
                  not satisfied with this, you have the right to object in
                  certain circumstances (see the section headed "Your rights"
                  below).
                </li>
                <li>
                  For the delivery of direct marketing to you via e-mail, we'll
                  need your consent, whether via an opt-in or soft-opt-in:
                  <ul className="pl-8 list-lower-alpha">
                    {privacyListSix.map((li, i) => (
                      <li key={i} className="mb-3">
                        {li}
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  When you register with us and set up an account to receive our
                  services, the legal basis for this processing is the
                  performance of a contract between you and us and/or taking
                  steps, at your request, to enter into such a contract.
                </li>
                <li>
                  We may use your Data to show you Animade adverts and other
                  content on other websites. If you do not want us to use your
                  data to show you Animade adverts and other content on other
                  websites, please turn off the relevant cookies (please refer
                  to the section headed "Cookies" below).
                </li>
                <p className="font-bold">Who we Share Data With</p>
                <li>
                  We may share your Data with the following groups of people for
                  the following reasons:
                  <ul className="pl-8 list-lower-alpha">
                    {privacyListSeven.map((li, i) => (
                      <li key={i} className="mb-3">
                        {li}
                      </li>
                    ))}
                  </ul>
                </li>
                <p className="mb-8">
                  in each case, in accordance with this privacy policy.
                </p>
                <p className="font-bold">Keeping Data secure</p>
                <li>
                  We will use technical and organisational measures to safeguard
                  your Data, for example:
                  <ul className="pl-8 list-lower-alpha">
                    {privacyList8.map((li, i) => (
                      <li key={i} className="mb-3">
                        {li}
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  Technical and organisational measures include measures to deal
                  with any suspected data breach. If you suspect any misuse or
                  loss or unauthorised access to your Data, please let us know
                  immediately by contacting us via this e-mail address:{" "}
                  <a
                    href="mailto:animade.world@gmail.com"
                    target="_blank"
                    className="text-blue-500 font-bold"
                  >
                    animade.world@gmail.com
                  </a>
                  .
                </li>
                <li>
                  If you want detailed information from Get Safe Online on how
                  to protect your information and your computers and devices
                  against fraud, identity theft, viruses and many other online
                  problems, please visit www.getsafeonline.org. Get Safe Online
                  is supported by HM Government and leading businesses.
                </li>
                <p className="font-bold">Data Retention</p>
                <li>
                  Unless a longer retention period is required or permitted by
                  law, we will only hold your Data on our systems for the period
                  necessary to fulfil the purposes outlined in this privacy
                  policy or until you request that the Data be deleted.
                </li>
                <li>
                  Even if we delete your Data, it may persist on backup or
                  archival media for legal, tax, billing or regulatory purposes.
                </li>
                <p className="font-bold">Your Rights</p>
                <li>
                  You have the following rights in relation to your Data:
                  <ul className="pl-8 list-lower-alpha">
                    {privacyList9.map((li, i) => (
                      <li key={i} className="mb-3">
                        {li}
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  To make enquiries, exercise any of your rights set out above,
                  or withdraw your consent to the processing of your Data (where
                  consent is our legal basis for processing your Data), please
                  contact us via this e-mail address: animade.world@gmail.com.
                </li>
                <li>
                  If you are not satisfied with the way a complaint you make in
                  relation to your Data is handled by us, you may be able to
                  refer your complaint to the relevant data protection
                  authority. For the UK, this is the Information Commissioner's
                  Office (ICO). The ICO's contact details can be found on their
                  website at{" "}
                  <a
                    href="https://ico.org.uk/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 font-bold"
                  >
                    https://ico.org.uk/
                  </a>
                  .
                </li>
                <li>
                  It is important that the Data we hold about you is accurate
                  and current. Please keep us informed if your Data changes
                  during the period for which we hold it.
                </li>
                <p className="font-bold">Links to Other Websites</p>
                <li>
                  This Website may, from time to time, provide links to other
                  websites. We have no control over such websites and are not
                  responsible for the content of these websites. This privacy
                  policy does not extend to your use of such websites. You are
                  advised to read the privacy policy or statement of other
                  websites prior to using them.
                </li>
                <p className="font-bold">
                  Change of Buisness Ownership and Control
                </p>
                <li>
                  Animade may, from time to time, expand or reduce our business
                  and this may involve the sale and/or the transfer of control
                  of all or part of Animade. Data provided by Users will, where
                  it is relevant to any part of our business so transferred, be
                  transferred along with that part and the new owner or newly
                  controlling party will, under the terms of this privacy
                  policy, be permitted to use the Data for the purposes for
                  which it was originally supplied to us.
                </li>
                <li>
                  We may also disclose Data to a prospective purchaser of our
                  business or any part of it.
                </li>
                <li>
                  In the above instances, we will take steps with the aim of
                  ensuring your privacy is protected.
                </li>
                <p className="font-bold">Cookies</p>
                <li>
                  This Website may place and access certain Cookies on your
                  computer. Animade uses Cookies to improve your experience of
                  using the Website and to improve our range of services.
                  Animade has carefully chosen these Cookies and has taken steps
                  to ensure that your privacy is protected and respected at all
                  times.
                </li>
                <li>
                  All Cookies used by this Website are used in accordance with
                  current UK and EU Cookie Law.
                </li>
                <li>
                  Before the Website places Cookies on your computer, you will
                  be presented with a message bar requesting your consent to set
                  those Cookies. By giving your consent to the placing of
                  Cookies, you are enabling Animade to provide a better
                  experience and service to you. You may, if you wish, deny
                  consent to the placing of Cookies; however certain features of
                  the Website may not function fully or as intended.
                </li>
                <li>This Website may place the following Cookies:</li>
                <table className="table my-5">
                  <thead>
                    <tr>
                      <th className="p-4">Type of Cookie</th>
                      <th className="p-4">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2">Strictly necessary cookies</td>
                      <td className="p-2">
                        These are cookies that are required for the operation of
                        our website. They include, for example, cookies that
                        enable you to log into secure areas of our website, use
                        a shopping cart or make use of e-billing services.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">Analytical/performance cookies</td>
                      <td className="p-2">
                        They allow us to recognise and count the number of
                        visitors and to see how visitors move around our website
                        when they are using it. This helps us to improve the way
                        our website works, for example, by ensuring that users
                        are finding what they are looking for easily.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">Functionality cookies</td>
                      <td className="p-2">
                        These are used to recognise you when you return to our
                        website. This enables us to personalise our content for
                        you, greet you by name and remember your preferences
                        (for example, your choice of language or region). By
                        using the Website, you agree to our placement of
                        functionality cookie.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">Targeting cookies</td>
                      <td className="p-2">
                        These cookies record your visit to our website, the
                        pages you have visited and the links you have followed.
                        We will use this information to make our website and the
                        advertising displayed on it more relevant to your
                        interests. We may also share this information with third
                        parties for this purpose.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <li>
                  You can choose to enable or disable Cookies in your internet
                  browser. By default, most internet browsers accept Cookies but
                  this can be changed. For further details, please see the help
                  menu in your internet browser. You can switch off Cookies at
                  any time, however, you may lose any information that enables
                  you to access the Website more quickly and efficiently.
                </li>
                <li>
                  You can choose to delete Cookies at any time; however, you may
                  lose any information that enables you to access the Website
                  more quickly and efficiently including, but not limited to,
                  personalisation settings.
                </li>
                <li>
                  It is recommended that you ensure that your internet browser
                  is up-to-date and that you consult the help and guidance
                  provided by the developer of your internet browser if you are
                  unsure about adjusting your privacy settings.
                </li>
                <li>
                  For more information generally on cookies, including how to
                  disable them, please refer to{" "}
                  <a
                    className="text-blue-500 font-bold"
                    href="https://www.aboutcookies.org"
                    target="_blank"
                  >
                    www.aboutcookies.org
                  </a>
                  . You will also find details on how to delete cookies from
                  your computer.
                </li>
                <p>
                  Below is a list of the cookies that we use. We have tried to
                  ensure this is complete and up to date, but if you think that
                  we have missed a cookie or there is any discrepancy, please
                  let us know.
                </p>
                <li> We use the following strictly necessary cookies:</li>
                <table className="table my-5">
                  <thead>
                    <tr>
                      <th className="p-4">Description</th>
                      <th className="p-4">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2">Session cookies</td>
                      <td className="p-2">
                        These cookies are used to maintain a user's session on
                        the website, allowing them to remain logged in and
                        navigate
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">Load balancing cookies</td>
                      <td className="p-2">
                        These cookies are used to distribute traffic across
                        multiple servers to ensure the website remains available
                        and responsive.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">Security cookies</td>
                      <td className="p-2">
                        These cookies are used to protect the website and its
                        users from malicious activities, such as hacking, fraud,
                        or other security threats.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">Image generation cookies</td>
                      <td className="p-2">
                        These cookies are used to store images that a user has
                        generated on the platform, ensuring that their
                        selections are retained as they navigate through
                        different pages or complete the product upload process.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">Language preference cookies</td>
                      <td className="p-2">
                        These cookies are used to remember a user's language
                        preferences, ensuring that they are shown content in
                        their preferred language.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">Template information cookies</td>
                      <td className="p-2">
                        To store Printful templates so the user can upload new
                        designs on that product.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">Financial Tracking cookies</td>
                      <td className="p-2">
                        Collect and store Printful information to provice
                        financial tracking and billing features.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">Authentication cookies</td>
                      <td className="p-2">
                        These cookies verify the user's identity and ensure that
                        they are authorized to access certain parts of the
                        website.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">Form submission cookies</td>
                      <td className="p-2">
                        These cookies remember information that the user has
                        entered into a form, ensuring that it is not lost if the
                        user navigates away from the page.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">Error reporting cookies</td>
                      <td className="p-2">
                        These cookies collect information about errors that
                        occur on the website, allowing developers to quickly
                        identify and fix any issues.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">Site preference cookies</td>
                      <td className="p-2">
                        These cookies remember the user's preferences for the
                        website, such as layout, colors, and font size.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">Time zone cookies</td>
                      <td className="p-2">
                        These cookies remember the user's time zone, allowing
                        the website to display time-sensitive information
                        correctly.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <li>We use the following functionality cookies:</li>
                <table className="table my-5">
                  <thead>
                    <tr>
                      <th className="p-4">Description</th>
                      <th className="p-4">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2">Notification cookie</td>
                      <td className="p-2">
                        Stores user preferences for receiving notifications or
                        alerts on the website.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">User preference cookie</td>
                      <td className="p-2">
                        Stores user preferences such as theme or layout options.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">Saved metadata cookie</td>
                      <td className="p-2">
                        Allows users to save Printful templates, and Opensea
                        upload metadata to use in future product uploads.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">Session ID cookie</td>
                      <td className="p-2">
                        Identifies a user's current session on the website to
                        allow for continuous browsing and functionality.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">Language preference cookie</td>
                      <td className="p-2">
                        Stores the language preference of the user to display
                        the website in the preferred language.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">Financial Tracking cookie</td>
                      <td className="p-2">
                        To track Printful data to ensure up-to-date financial
                        tracking and billing features.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">Analytics cookie</td>
                      <td className="p-2">
                        We use this cookie to identify your computer and analyse
                        traffic patterns on our website.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <li>We use the following analytical/performance cookies:</li>
                <table className="table my-5">
                  <thead>
                    <tr>
                      <th className="p-4">Description</th>
                      <th className="p-4">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 md:w-44">
                        Google Analytics <br /> <br />
                        Performance Cookies
                      </td>
                      <td className="p-2">
                        This cookie tracks user behavior on the website and
                        provides insights into how users interact with the site,
                        which pages they visit, and how long they stay on each
                        page
                        <br /> <br />
                        To provide crash reports and report performance
                        information such as error codes to developers to reduce
                        website down time
                      </td>
                    </tr>
                  </tbody>
                </table>
                <li> We use the following targeting cookies:</li>
                <table className="table my-5">
                  <thead>
                    <tr>
                      <th className="p-4">Description</th>
                      <th className="p-4">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2">Google Analytics</td>
                      <td className="p-2">
                        We use this cookie to enable us to show you adverts
                        while you are browsing our website and other websites on
                        the internet
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="font-bold">General</p>
                <li>
                  You may not transfer any of your rights under this privacy
                  policy to any other person. We may transfer our rights under
                  this privacy policy where we reasonably believe your rights
                  will not be affected.
                </li>
                <li>
                  If any court or competent authority finds that any provision
                  of this privacy policy (or part of any provision) is invalid,
                  illegal or unenforceable, that provision or part-provision
                  will, to the extent required, be deemed to be deleted, and the
                  validity and enforceability of the other provisions of this
                  privacy policy will not be affected.
                </li>
                <li>
                  Unless otherwise agreed, no delay, act or omission by a party
                  in exercising any right or remedy will be deemed a waiver of
                  that, or any other, right or remedy.
                </li>
                <li>
                  This Agreement will be governed by and interpreted according
                  to the law of England and Wales. All disputes arising under
                  the Agreement will be subject to the exclusive jurisdiction of
                  the English and Welsh courts.
                </li>
                <p className="font-bold">Changes to this Privacy Policy</p>
                <li>
                  Animade reserves the right to change this privacy policy as we
                  may deem necessary from time to time or as may be required by
                  law. Any changes will be immediately posted on the Website and
                  you are deemed to have accepted the terms of the privacy
                  policy on your first use of the Website following the
                  alterations. You may contact Animade by email a{" "}
                  <a
                    href="mailto:animade.world@gmail.com"
                    target="_blank"
                    className="text-blue-500 font-bold"
                  >
                    animade.world@gmail.com
                  </a>
                  .
                </li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Privacy;
