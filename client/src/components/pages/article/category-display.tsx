import { cn } from "../../../lib/utils";

type SmallCategoryDisplayProps = {
    className?: string;
};

const logoSrc =
    "https://cdn.iconscout.com/icon/free/png-256/free-kotlin-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-3031901.png";

const CategoryDisplay = (props: SmallCategoryDisplayProps) => {
    return (
        <div className={cn("flex items-center space-x-2", props.className)}>
            <img className="size-4" src={logoSrc} />
            <div className="h-6 w-[0.01em] bg-black" />
            <span className="uppercase">Category place</span>
        </div>
    );
};

export { CategoryDisplay };
