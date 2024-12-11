type PreivewTextProps = {
    pretext: string;
};

const PreivewText = (props: PreivewTextProps) => {
    return (
        <p className="text-lg font-medium leading-[1.6rem] md:text-[1.40rem]">
            {props.pretext}
        </p>
    );
};

export { PreivewText };
