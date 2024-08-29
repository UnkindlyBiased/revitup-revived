const ContentBox = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="px-5 py-3 sm:px-8 sm:py-4">
            {children}
        </div>
    )
}

export default ContentBox