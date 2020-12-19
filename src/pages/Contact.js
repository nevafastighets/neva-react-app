import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Layout } from "../components/Layout";
import Title from "../components/Title";
import styled from "styled-components";

import { withPageConsumer } from "../PageContext";
import Preloader from "../components/Preloader";

import { Navigationbar } from "../components/Navigationbar";
import Footer from "../components/Footer";

const BannerMargin = styled.div`
  margin-top: 6rem;
`;

function Contact({ context }) {
  const { loading, contactpage } = context;
  if (loading) {
    return <Preloader />;
  }

  const ReactMarkdown = require('react-markdown')

  return (
    <React.Fragment>
      <Navigationbar />
      <Hero height="31" img={contactpage.headerImage}>
        <div className="overlay"></div>
        <BannerMargin>
          <Banner
            title={contactpage.headerTitle}
            subtitle={contactpage.headerSubtitle}
          />
        </BannerMargin>
      </Hero>
      <Layout>
      <ReactMarkdown className="textArea" source={contactpage.textArea} />
        <Title
          title={contactpage.contentTitle}
          subtitle={contactpage.contentSubtitle}
        />
        <form
          name="contact"
          data-netlify="true"
          netlify
          id="contactForm"
          method="POST"
        >
          <input type="hidden" name="form-name" value="contact" />
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
              <select
                class="form-control contact-input contact-select"
                name="type"
              >
                <option value="all">Alla ärendetyper</option>
                <option value="allman">Allmän</option>
                <option value="avlopp">Avlopp</option>
                <option value="belysning">Belysning</option>
                <option value="kranpackning">Byte kranpackning</option>
                <option value="dorrarfonster">Dörrar/Fönster</option>
                <option value="el">El</option>
                <option value="fuktvattenskada">Fukt/Vattenskada</option>
                <option value="hiss">Hiss</option>
                <option value="portar">Portar</option>
                <option value="sopor">Sopor</option>
                <option value="torkrum">Torkrum</option>
                <option value="tvattstugeutrustning">Tvättstugeutrustning</option>
                <option value="ventilation">Ventilation</option>
                <option value="vitvaror">Vitvaror</option>
                <option value="varme">Värme</option>
                <option value="averkanklotter">Åverkan/Klotter</option>
              </select>
            </div>
          </div>
          <div class="form-group row justify-content-center">
            <div className="col-md-8 col-lg-4 col-xl-4">
              <textarea
                class="form-control contact-input"
                name="message"
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
      <Footer />
    </React.Fragment>
  );
}

export default withPageConsumer(Contact);
