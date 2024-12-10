import { useTranslation } from "react-i18next";
import { useShallow } from "zustand/react/shallow";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import useAuthStore from "../stores/auth.store";
import { YPadding } from "../hoc/ypadding";
import { useGetArticles } from "../hooks/article/use-get-articles";

const StartPage = () => {
    const { i18n, t } = useTranslation();
    const { user, isAuthed, isCheckingAuthFinished } = useAuthStore(
        useShallow((state) => ({
            user: state.user,
            isAuthed: state.isAuthed,
            isCheckingAuthFinished: state.isCheckingAuthFinished,
        })),
    );
    const { data: articles } = useGetArticles();

    const changeLanguage = () => {
        i18n.changeLanguage("ua");
        localStorage.setItem("langCode", "ua");
    };

    return (
        <YPadding>
            <div className="flex flex-col gap-1">
                <Helmet>
                    <title>REVITUP: Motorsport in one place</title>
                    <meta
                        name="description"
                        content="Everything about motorsport worldwide"
                    />
                </Helmet>
                <span>{t("hello")}</span>
                <button className="size-fit" onClick={changeLanguage}>
                    Change
                </button>
                {isAuthed && isCheckingAuthFinished && (
                    <span>Користувач: {user?.username || "відсутній"}</span>
                )}
                <div className="flex flex-col gap-2">
                    {articles?.map((art) => (
                        <Link
                            className="font-bold"
                            to={`/articles/${art.link}`}
                            key={art.id}
                        >
                            {art.title}
                        </Link>
                    ))}
                </div>
            </div>
        </YPadding>
    );
};

export default StartPage;
