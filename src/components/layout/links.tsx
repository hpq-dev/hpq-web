

const Links = () => {
    return <div className="fixed bottom-10 right-10 w-fit">
        <div className="flex text-[black] font-pain text-[15px] gap-6">
            <a href="#">Instagram</a>
            <a href="#">Github</a>
            <a href="#">Linkdin</a>
        </div>
        <div className="relative w-full h-2 bg-[#0000002B] rounded-full mt-2">
            <div
                className="absolute left-0 w-10 bg-[black] h-full rounded-full"
            />
        </div>
    </div>
}

export default Links