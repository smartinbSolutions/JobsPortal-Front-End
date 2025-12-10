"use client";

export default function DescriptionClient({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
