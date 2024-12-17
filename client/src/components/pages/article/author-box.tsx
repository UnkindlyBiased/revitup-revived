import { Link } from "react-router-dom";

import { UserAuthor } from "../../../../utils/types/user/user-author.type";
import { AuthorRole } from "./author-role";

const AuthorBox = ({ author }: { author: UserAuthor }) => {
    return (
        <div className="flex items-center space-x-2 md:space-x-3">
            <img
                className="size-10 rounded-full md:size-12"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/1200px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg"
            />
            <div className="flex flex-col">
                <div className="flex size-fit items-center gap-2">
                    <Link
                        to={`/profile/${author.nickname}`}
                        className="font-bold"
                    >
                        {author.username}
                    </Link>
                    <img className="h-4" title={author.country.name} src={author.country.flagLink} />
                </div>
                <AuthorRole roles={author.roles} />
            </div>
        </div>
    );
};

export { AuthorBox };
