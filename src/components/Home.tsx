import React from "react";
import {
  Animator,
  batch,
  Fade,
  Move,
  ScrollContainer,
  ScrollPage,
  Sticky,
} from "react-scroll-motion";
import styled from "styled-components";
import Section from "./Section";

const Home: React.FC = () => {
  return (
    <Container>
      <ScrollContainer snap="mandatory">
        <ScrollPage>
          <Animator animation={batch(Fade(), Move(), Sticky())}>
            <Section
              id="section-1"
              title="Model S"
              description="Order Online for Touchless Delivery"
              backgroundImg="model-s.jpg"
              leftBtnText="Custom Order"
              rightBtnText="Existing Inventory"
            />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Move(), Sticky())}>
            <Section
              id="section-2"
              title="Model Y"
              description="Order Online for Touchless Delivery"
              backgroundImg="model-y.jpg"
              leftBtnText="Custom Order"
              rightBtnText="Existing Inventory"
            />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Move(), Sticky())}>
            <Section
              title="Model 3"
              description="Order Online for Touchless Delivery"
              backgroundImg="model-3.jpg"
              leftBtnText="Custom Order"
              rightBtnText="Existing Inventory"
            />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Move(), Sticky())}>
            <Section
              title="Model X"
              description="Order Online for Touchless Delivery"
              backgroundImg="model-x.jpg"
              leftBtnText="Custom Order"
              rightBtnText="Existing Inventory"
            />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Move(), Sticky())}>
            <Section
              title="Solar for New Roofs"
              description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
              backgroundImg="solar-panel.jpg"
              leftBtnText="Custom Order"
              rightBtnText="Existing Inventory"
            />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Move(), Sticky())}>
            <Section
              title="Accessories"
              description=""
              backgroundImg="accessories.jpg"
              leftBtnText="Shop now"
            />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
