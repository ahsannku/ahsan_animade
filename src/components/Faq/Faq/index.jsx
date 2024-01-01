import * as React from "react";
import { Accordion } from "../..";
const Faq = () => {
  const accordianData = [
    {
      title: "How do I Cancel my Subscription",
      description:
        `To cancel a subscription, just message our support and let us know. You can
        contact us on the contact-us form on our site, or via email at
        animade.world@gmail.com.
        `,
      delay: "300",
    },
    {
      title: "How can I Upgrade my Plan?",
      description:
        `Visit this page to upgrade your plan. We have many packages to suit all of your
        needs!`,
      delay: "600",
    },
    {
      title: "What makes a good prompt?",
      description:
        `Be creative and let your imagination run wild. We find that a good prompt is
        imaginative and detailed, with clear descriptive words. You should also specify
        the style, and experiment to see what works best!`,
      delay: "900",
    },
    {
      title: "What is Printful?",
      description:
        `Printful is a Print-On-Demand provider that prints and ships orders directly to
        your customers worldwide. Printful allows you to create E-Commerce products
        with no upfront cost, connecting to over 20 stores including Shopify, Etsy and
        Amazon.`,
      description2: "Learn more button (affiliate link)",
      delay: "1200",
    },
    {
      title: "How do I create a Printful Account?",
      description:
        `Follow this link and Sign Up to start your journey`,
      description2: "Affiliate Link",
      delay: "1500",
    },
    {
      title: "How do I Link my Animade and Printful Accounts?",
      description:
        `Once you have signed up, as part of the product creation process on Animade,
        you will be prompted to link your Printful account. For more information on the
        product creation process, see the how-it-works page`,
      delay: "1500",
    },
    {
      title: "How do I Create a Store on Printful?",
      description:
        `Log in to your Printful account, go to the side menu in your Dashboard, and click
        Stores > Choose platform to see your options and find a platform that suits your
        needs. Simple as that! You can then customise your store to connect with your
        target audience.`,
      delay: "1500",
    },
  ];

  return <Accordion items={accordianData} />;
};
export default Faq;
