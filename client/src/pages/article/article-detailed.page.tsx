import { Helmet } from "react-helmet-async"

import { TextSplitter } from "../../components/common/display/text-splitter"
import { DateTimeStamp } from "../../components/common/display/time-stamp"
import { AuthorBox } from "../../components/pages/article/author-box"
import { CategoryDisplay } from "../../components/pages/article/category-display"

const Comp = () => {
    return (
        <div className="hidden xl:flex flex-grow h-fit pt-4 sticky top-0">
            <div className="w-full h-36 bg-green-500 rounded-xl">
                <div className="flex flex-col h-full p-4 justify-between group">
                    <span className="group-hover:text-4xl font-bold text-3xl transition-all">Formula 1</span>
                    <span className="hover:underline w-fit">Check more</span>
                </div>
            </div>
        </div>
    )
}

const text = "Max Verstappen’s rocky relationship with \"Drive to Survive\" is well-documented. The three-time world champion offers very little when he’s mic’d up in front of the cameras, and even boycotted the series altogether for a time. So it might be surprising to learn that Verstappen has been getting candid on camera for years — just not for Netflix. Nick Hoedeman, who’s directed a series of documentaries about Verstappen since 2017, explained why he’s been able to paint such an intimate portrait of the Red Bull driver when other documentarians have failed. \\sp“We never stage anything,” Hoedeman told Motorsport. “It’s all authentic. If I don’t capture it, he’s never going to do it again. What you see is what you get.” The Dutch filmmaker, who admitted he wasn’t a fan of Formula 1 before he was tapped to work with a then-teenaged Verstappen, said it took years to build trust with him and his tight-knit inner circle.\\sp“It wasn’t the first day, it wasn’t even the first year, it took time for him to trust me,” Hoedeman explained. “And I think it’s a big plus that I wasn’t a fan because I really couldn't do the job I did for the last few years if I was,” he went on. “Now Max knows that we’re not manipulating the story … and he knows that when I’m around, I’ll be there for him.”"
const pretext = "It was a hard weekend for Norris and company: a lost pole, hard start, terrible weather, unjustified \"papaya rules\""

const ArticleDetailedPage = () => {
    return (
        <>
            <Helmet>
                <title>REVITUP: Article test</title>
            </Helmet>
            <article className="flex gap-4 pb-4">
                <div className="flex flex-col space-y-1 lg:space-y-2 mt-4">
                    <div>
                        <div className="flex items-center space-x-2 w-fit">
                            <CategoryDisplay />
                            <DateTimeStamp className="hidden lg:block" date={new Date()} />
                        </div>
                        <h1 className="font-oswald text-3xl sm:text-4xl lg:text-5xl">Verstappen on his 4th WDC with Red Bull: "Simply Lovely"</h1>
                    </div>
                    <div className="flex justify-between items-center pt-1 lg:w-fit">
                        <AuthorBox />
                        <DateTimeStamp className="lg:hidden" date={new Date()} />
                    </div>
                    <div className="pt-1 justify-center md:block">
                        <img className="rounded-xl sm:w-[90%] md:w-[75%] lg:w-[60%] xl:w-[55%] transition-all" src="https://cdn.racingnews365.com/2024/Norris/_1092x683_crop_center-center_85_none/Norris-FP1-Brazil.jpeg?v=1730475181" />
                    </div>
                    <div className="gap-2 flex flex-col sm:w-[100%] md:w-[80%] lg:w-[65%] xl:w-[60%]">
                        <p className="font-semibold text-lg leading-[1.6rem] pt-1 sm:text-xl sm:font-bold md:text-2xl">{pretext}</p>
                        <div className="flex flex-col gap-2">
                            <TextSplitter text={text} splitSymbol="\sp" />
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export { ArticleDetailedPage }