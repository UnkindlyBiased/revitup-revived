const AuthorBox = () => {
    return (
        <div className="flex space-x-2 md:space-x-3 items-center">
            <img className="size-10 rounded-full md:size-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/1200px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg" />
            <div className="flex flex-col">
                <span className="font-bold">Brendan Eich</span>
                <span>Editor at REVITUP</span>
            </div>
        </div>
    )
}

export { AuthorBox }