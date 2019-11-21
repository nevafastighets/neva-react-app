import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import headerImage from "../assets/contact.jpg";
import { Layout } from "../components/Layout";
import Title from "../components/Title";
import styled from "styled-components";

const BannerMargin = styled.div`
  margin-top: 6rem;
`;

export default function Contact() {
  return (
    <React.Fragment>
      <Hero height="31" img={headerImage}>
        <div className="overlay"></div>
        <BannerMargin>
          <Banner title="Kontakta oss" subtitle="Vi hjälper dig gärna." />
        </BannerMargin>
      </Hero>
      <Layout>
        <Title
          title="Vi gillar nöjda kunder,"
          subtitle="därför har vi valt att digitalisera vår process."
        />
        <form name="contact">
          <div class="form-group row justify-content-center">
            <div className="col-md-8 col-lg-4 col-xl-4">
              <input
                type="email"
                class="form-control contact-input"
                name="email"
                placeholder="E-post"
              />
            </div>
          </div>
          <div class="form-group row justify-content-center">
            <div className="col-md-8 col-lg-4 col-xl-4">
              <textarea
                class="form-control contact-input"
                name="Message"
                rows="5"
                placeholder="Meddelande"
              ></textarea>
            </div>
          </div>
          <div className="row justify-content-center">
            <button type="submit" class="btn btn-primary contact-button">
              Skicka
            </button>
          </div>
        </form>
      </Layout>
    </React.Fragment>
  );
}
