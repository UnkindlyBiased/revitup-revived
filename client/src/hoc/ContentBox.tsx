const ContentBox = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="px-5 py-3 sm:px-8 sm:py-4 transition-all h-full">
            {children}
        </div>
    )
}

export default ContentBox