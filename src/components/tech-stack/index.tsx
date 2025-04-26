"use client";

import Marquee from "react-fast-marquee";
import {
  Badge,
  Column,
  Flex,
  Grid,
  HoloFx,
  IconButton,
  Row,
  SmartImage,
  Text,
  useTheme,
} from "@/once-ui/components";
import { techStacks } from "./tech-stack.data";
import { useState } from "react";

export const TechStackMarquee = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const { theme } = useTheme();

  return (
    <Grid rows={1} fillWidth columns={1} gap="l">
      <Column fillWidth>
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
                <Column
                  key={techStack.name}
                  paddingX="l"
                  onMouseEnter={() => setHoveredIcon(techStack.name)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <Flex
                    vertical="center"
                    gap="m"
                    direction="column"
                    horizontal="center"
                  >
                    <SmartImage
                      src={`/images/icons/tech-stacks/${techStack.icon}`}
                      alt={techStack.name}
                      width={6}
                      height={6}
                      aspectRatio="1/1"
                      grayscale={
                        hoveredIcon !== techStack.name && theme !== "light"
                          ? true
                          : false
                      }
                    />
                    <Text variant="code-default-s">{techStack.name}</Text>
                  </Flex>
                </Column>
              ))}
            </Marquee>
            <Row padding="m">
              <Text>
                Primarily focused on the JavaScript ecosystem, yet always
                feeling there's more to learn and eager to explore new
                technologies.
              </Text>
            </Row>
          </Column>
        </HoloFx>
      </Column>
    </Grid>
  );
};
