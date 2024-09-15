import { Loader } from "lucide-react"

const Loading = () => {
    return (
        <div className="flex h-full justify-center items-center">
            <Loader className="animate-spin" size={50} />
        </div>
    )
}

export default Loading