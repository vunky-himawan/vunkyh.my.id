"use client";

import {
  Badge,
  Column,
  HoloFx,
  Row,
  Text,
  useTheme,
} from "@/once-ui/components";
import Marquee from "react-fast-marquee";
import StackIcon from "tech-stack-icons";
import { techStacks } from "./tech-stack.data";

const TechStackBentoItem = () => {
  const { theme } = useTheme();

  return (
    <HoloFx
      radius="l"
      fillHeight
      fillWidth
      shine={{
        blending: "hard-light",
        opacity: 50,
      }}
      texture={{
        blending: "lighten",
        opacity: 0,
      }}
    >
      <Column
        overflow="hidden"
        fillWidth
        fillHeight
        radius="l"
        background="surface"
        gap="m"
        border="neutral-alpha-weak"
      >
        <Row padding="m">
          <Badge>Tech Stack</Badge>
        </Row>
        <Marquee gradient gradientColor="surface" speed={100}>
          {techStacks.map((techStack, index) => (
            <Column key={techStack} padding="l" gap="l">
              <StackIcon name={techStack} grayscale={theme === "dark"} />
            </Column>
          ))}
        </Marquee>
        <Row padding="m">
          <Text>
            Primarily focused on the JavaScript ecosystem, but always eager to
            explore and learn new technologies.
          </Text>
        </Row>
      </Column>
    </HoloFx>
  );
};

export default TechStackBentoItem;
