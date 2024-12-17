import { getTimeStringWithoutZone } from "../../../../utils/funcs/HelperFunctions";

type DateTimeStampProps = {
    className?: string;
    date: Date;
};

const DateTimeStamp = ({ date, className }: DateTimeStampProps) => {
    const epochTime = date.valueOf();
    const timezoneOffset = new Date().getTimezoneOffset();

    const finalDate = new Date(0);
    finalDate.setUTCSeconds(epochTime / 1000 + timezoneOffset);

    return (
        <span className={className}>{getTimeStringWithoutZone(finalDate)}</span>
    );
};

export { DateTimeStamp };
