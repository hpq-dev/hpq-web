
import { useCursor } from "@/components/cursor"

const About = () => {

    const { useCursorEvent } = useCursor()

    return <div className='w-full pt-[40vh] pb-[10vh]'>
        <div className="w-fit m-auto">
            <div className="relative flex items-end gap-4">
                <div className="absolute left-0 -translate-x-28 flex gap-4 items-center" {...useCursorEvent('I am', 60)}>
                    <img
                        className="rotate-[-15deg] w-20 h-auto border-2 border-white shadow-lg pointer-events-none"
                        src="/profile.png"
                    />
                    <span className="font-pain">Full stack developer</span>
                </div>
                <h1 className="text-black font-bold uppercase text-5xl">Lungu Ionut</h1>
                <h3 className="bg-gradient-to-r from-[#00000080] to-transparent inline-block text-transparent bg-clip-text text-3xl font-[500]">of 2 years experience</h3>
            </div>
            <div className="relative w-[660px] text-justify mt-6 text-xl font-[500] text-[#00000060]">
                <p
                    {...useCursorEvent('- 07 2023', 30)}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p
                    className="mt-6"
                    {...useCursorEvent('- 04 2023', 30)}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p
                    className="mt-6"
                    {...useCursorEvent('- 01 2023', 30)}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    </div>
}

export default About