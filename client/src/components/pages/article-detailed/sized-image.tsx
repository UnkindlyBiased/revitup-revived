type SizedImageProps = {
    src: string;
    alt?: string;
};

const SizedImage = (props: SizedImageProps) => {
    return (
        <div className="pt-1">
            <img
                className="rounded-xl transition-all sm:w-[90%] md:w-[75%] lg:w-[60%] xl:w-[55%]"
                src={props.src}
                alt={props.alt}
            />
        </div>
    );
};

export { SizedImage };
