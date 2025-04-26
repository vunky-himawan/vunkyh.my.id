"use client";

import { Column, Flex, Grid, Row } from "@/once-ui/components";
import TechStackBentoItem from "./tech-stack";

const BentoGrid = () => {
  return (
    <Grid rows={1} fillWidth columns={1} gap="l">
      <Column fillWidth>
        <TechStackBentoItem />
      </Column>
    </Grid>
  );
};

export default BentoGrid;
