"use client";

import {
  Badge,
  Column,
  Flex,
  Heading,
  SmartImage,
  SmartLink,
  Tag,
  Text,
} from "@/once-ui/components";
import styles from "./Posts.module.scss";
import { formatDate } from "@/app/utils/formatDate";
import { useEffect } from "react";

interface PostMetadata {
  title: string;
  publishedAt: string;
  image?: string;
  tag?: string[] | string;
  imageFrom?: string;
}

interface PostType {
  slug: string;
  metadata: PostMetadata;
}

interface PostProps {
  post: PostType;
  thumbnail: boolean;
  direction?: "row" | "column";
}

export default function Post({ post, thumbnail, direction }: PostProps) {
  const { title, publishedAt, image, tag, imageFrom } = post.metadata;

  const renderTags = () => {
    if (!tag) return null;

    if (Array.isArray(tag)) {
      return tag.map((t, index) => (
        <Tag key={index} className="mt-12" label={t} variant="neutral" />
      ));
    }

    return <Tag className="mt-12" label={tag} variant="neutral" />;
  };

  return (
    <SmartLink
      fillWidth
      unstyled
      style={{ borderRadius: "var(--radius-l)" }}
      href={`/blog/${post.slug}`}
    >
      <Flex
        position="relative"
        transition="micro-medium"
        direction={direction}
        radius="l"
        className={styles.hover}
        mobileDirection="column"
        fillWidth
      >
        {image && thumbnail && (
          <SmartImage
            priority
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 640px"
            border="neutral-alpha-weak"
            cursor="interactive"
            radius="l"
            objectFit="cover"
            src={image}
            alt={`Thumbnail of ${title}`}
            aspectRatio="16 / 9"
          />
        )}
        <Column
          position="relative"
          fillWidth
          gap="4"
          padding="24"
          vertical="center"
        >
          {thumbnail && imageFrom && (
            <Flex gap="4">
              Image from: <Tag>{imageFrom}</Tag>
            </Flex>
          )}
          <Heading as="h2" variant="heading-strong-l" wrap="balance">
            {title}
          </Heading>
          <Text variant="label-default-s" onBackground="neutral-weak">
            {formatDate(publishedAt, false)}
          </Text>
          <Flex gap="s" wrap>
            {renderTags()}
          </Flex>
        </Column>
      </Flex>
    </SmartLink>
  );
}
