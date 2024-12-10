import { ComponentPropsWithoutRef } from "react";

const ArticleTitleSpan = ({ children }: ComponentPropsWithoutRef<"h1">) => {
    return <h1 className="font-oswald text-3xl sm:text-4xl lg:text-5xl">{children}</h1>;
};

export { ArticleTitleSpan };
