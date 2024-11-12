type TextSplitterProps = {
    splitSymbol: string
    paragraphClassName?: string
    text?: string
}

const TextSplitter = ({ text, splitSymbol, paragraphClassName }: TextSplitterProps) => {
    return text?.split(splitSymbol).map((par, i) => (
        <p className={paragraphClassName} key={i}>{par}</p>
    ))
}

export { TextSplitter }