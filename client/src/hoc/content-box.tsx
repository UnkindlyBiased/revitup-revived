const ContentBox = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="px-6 sm:px-8 transition-all font-medium h-full">
            {children}
        </div>
    )
}

export default ContentBox