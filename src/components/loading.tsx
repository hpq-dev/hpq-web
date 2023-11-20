
import '@/styles/loading.css'
const Loading = () => {

    return <div id='show_loading' className="fixed w-full h-full top-0 left-0 bg-[#000] z-[999] ">
        <img
            className="fixed left-1/2 h-[12vh] top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
            src="/logo.layout.svg"
            alt="logo"
        />
    </div>
}

export default Loading