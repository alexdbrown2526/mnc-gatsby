import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const Index = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>something</p>

      <StaticImage
        alt="logo image"
        src="https://cdn.imgbin.com/24/22/3/imgbin-skateboarding-companies-brand-business-logo-skateboard-ATh9tnQqktBSzLedrjjfKv9Uc.jpg"
      />
    </Layout>
  );
};

export default Index;
