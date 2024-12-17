import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

import { TextSplitter } from "../../components/common/display/text-splitter";
import { DateTimeStamp } from "../../components/common/display/time-stamp";
import { AuthorBox } from "../../components/pages/article/author-box";
import { CategoryDisplay } from "../../components/pages/article/category-display";
import { PreivewText } from "../../components/pages/article-detailed/preview-text";
import { SizedImage } from "../../components/pages/article-detailed/sized-image";
import { ArticleTitleSpan } from "../../components/pages/article-detailed/article-title-span";
import { useGetArticleByLink } from "../../hooks/article/use-get-article-by-link";
import Loading from "../../components/common/indicators/loading";

const Comp = () => {
    return (
        <div className="sticky top-0 hidden h-fit w-[250px] pt-4 lg:flex">
            <div className="h-36 w-full rounded-xl bg-green-500">
                <div className="group flex h-full flex-col justify-between p-4">
                    <span className="text-3xl font-bold transition-all group-hover:text-4xl">
                        Formula 1
                    </span>
                    <span className="w-fit cursor-pointer hover:underline">
                        Check more
                    </span>
                </div>
            </div>
        </div>
    );
};

const imageSrc =
    "https://cdn.racingnews365.com/2024/Norris/_1092x683_crop_center-center_85_none/Norris-FP1-Brazil.jpeg?v=1730475181";

const ArticleDetailedPage = () => {
    const { link } = useParams() as { link: string };
    const { data: article, isLoading } = useGetArticleByLink(link!);

    if (!article || isLoading) {
        return <Loading />;
    }

    return (
        <>
            <Helmet>
                <title>REVITUP: {article.title}</title>
            </Helmet>
            <article className="flex gap-4 pb-4">
                <Comp />
                <div className="mt-4 flex flex-1 flex-col space-y-1 lg:space-y-2">
                    <div>
                        <div className="flex w-fit items-center gap-2">
                            <CategoryDisplay />
                            <DateTimeStamp
                                className="hidden lg:block"
                                date={new Date(article.publishingDate)}
                            />
                        </div>
                        <ArticleTitleSpan>{article.title}</ArticleTitleSpan>
                    </div>
                    <div className="flex items-center justify-between pt-1 lg:w-fit">
                        <AuthorBox author={article.author} />
                        <DateTimeStamp
                            className="lg:hidden"
                            date={new Date(article.publishingDate)}
                        />
                    </div>
                    <div className="justify-center md:block">
                        <SizedImage src={imageSrc} />
                    </div>
                    <div className="flex flex-col gap-2 sm:w-[100%] md:w-[80%] lg:w-[65%] xl:w-[60%]">
                        <PreivewText pretext={article.previewText} />
                        <div className="flex flex-col gap-2">
                            <TextSplitter
                                text={article.mainText}
                                splitSymbol="\sp"
                            />
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export { ArticleDetailedPage };
