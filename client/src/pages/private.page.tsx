import RequireAuth from "../hoc/require-auth";

const PrivatePage = () => {
    return <RequireAuth>should be accessed with authorized user</RequireAuth>;
};

export default PrivatePage;
