import { useEffect, useState } from "react";

import { UserRoles } from "../../../../utils/types/user/UserRoles";

export const AuthorRole = ({ roles }: { roles: UserRoles[] }) => {
    const [label, setLabel] = useState("");

    useEffect(() => {
        switch (roles.at(-1)) {
            case "editor": {
                setLabel("Editor at REVITUP");
                return;
            }
            case "admin": {
                setLabel("Administrator at REVITUP");
                return;
            }
            case "creator": {
                setLabel("The almighty creator of REVITUP");
                return;
            }
        }
    }, [roles]);

    return <span>{label}</span>;
};
