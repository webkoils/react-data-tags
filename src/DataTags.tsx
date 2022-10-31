import React, { useMemo } from "react";
import { paramCase } from "param-case";
import { safeStringify } from "./utils";

export type DataTagAttributes = Record<`data-${string}`, string>;

export const propsToDataTags = (
  tags: Record<string, any>
): DataTagAttributes => {
  return {
    ...Object.fromEntries(
      Object.entries(tags || {}).map(([k, v]) => [
        `data-${paramCase(k).replace(/^data-/, "")}`,
        typeof v !== "object" ? String(v) : safeStringify(v),
      ])
    ),
  };
};

const DataTags = ({
  children,
  ...tags
}: {
  children: JSX.Element | JSX.Element[];
} & Record<string, any>) => {
  const dataTags = useMemo(() => {
    return propsToDataTags(tags);
  }, [tags]);

  if (Array.isArray(children)) {
    return (
      <>
        {children.map((child) =>
          React.cloneElement(child, { ...child.props, ...dataTags })
        )}
      </>
    );
  }
  return React.cloneElement(children, { ...children.props, ...dataTags });
};
export default DataTags;
