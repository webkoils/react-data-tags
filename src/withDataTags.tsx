import React, { useMemo } from "react";
import { DataTagAttributes, propsToDataTags } from "./DataTags";
export type DataTagProps = { tags: Record<string, any> };
export function withDataTags<T>(
  WrappedComponent: React.ComponentType<T & { dataTags: DataTagAttributes }>,
  parentProps?: DataTagProps
) {
  // Try to create a nice displayName for React Dev Tools.
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  // Creating the inner component. The calculated Props type here is the where the magic happens.
  const ComponentWithDataTags: React.FC<T & DataTagProps> = ({
    tags,
    ...props
  }) => {
    // Fetch the props you want to inject. This could be done with context instead.
    const computedChildProps = useMemo(
      () =>
        propsToDataTags({
          ...parentProps?.tags,
          tags,
        }),
      [tags]
    );
    // props comes afterwards so the can override the default ones.
    return <WrappedComponent {...(props as T)} dataTags={computedChildProps} />;
  };

  ComponentWithDataTags.displayName = `withDataTags(${displayName})`;

  return ComponentWithDataTags;
}
