import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Footer }from 'aether-marketing';


const FooterComponent = () => {

  const data = useStaticQuery(graphql`
  query {
    footerLinks {
      value
    }
  }`);

  return (
     <Footer data={JSON.parse(data.footerLinks.value)} />
  );
};


export default FooterComponent;
