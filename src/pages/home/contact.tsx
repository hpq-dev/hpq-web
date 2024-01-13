import { SetBackground } from "@/app/background"
import { setAstronaut } from "@/hooks/astronaut"
import { Ref, forwardRef } from "react"
import { useDispatch } from "react-redux"

const Contact = ({ }, ref: Ref<HTMLDivElement>) => {
    const dispatch = useDispatch()


    const subject = encodeURIComponent('I am interested of you service');
    const body = encodeURIComponent(`Example:\nName: John\nEmail: john@example.com\nDescription: I need your service.`);

    return <SetBackground
        onObserver={() => dispatch(setAstronaut({
            x: 5,
            y: 200,
            scale: .6,
            rotate: -40
        }))}
    >
        <div className="relative w-full flex h-fit justify-center items-center pt-[20vh]" ref={ref}>
            <img
                className="w-full h-auto absolute bottom-0 pointer-events-none object-cover z-[-1] max-md:h-[50vh] max-md:w-auto"
                src="/contact.bg.webp"
                alt="contact background"
            />
            <div className="relative mt-32">
                <div className="flex gap-[2vh]">
                    <img
                        className="relative pointer-events-none max-md:hidden"
                        src="/contact.profile.webp"
                        alt="contact"
                    />
                    <div className="text-white max-md:w-[80%] m-auto max-md:mt-32">
                        <div className="flex gap-8 max-md:flex-wrap max-md:justify-center">
                            <h1 className="font-pain text-4xl tracking-[5px]">Let's Chat</h1>
                            <button className="font-inter font-bold tracking-[8px] border-2 border-[#fff] px-4 py-2 rounded-lg hover:bg-[#ffffff30] transition-colors duration-300">
                                Contact
                            </button>
                        </div>
                        <p className="w-96 text-justify mt-5 text-[#ffffff70] leading-8 text-1xl max-md:w-full">
                            {`Hello! I am a highly experienced web developer dedicated to crafting sophisticated and efficient web applications. With a strong foundation in both development and design, I approach each project with precision and creativity. My expertise covers a wide spectrum of web technologies, guaranteeing state-of-the-art solutions. Whether you need a stylish website, a robust e-commerce platform, or a complex application, I am passionate about delivering excellence in user experience. Let's connect and explore how we can enhance your digital presence. Feel free to reach out – I am here to turn your ideas into compelling and functional realities!`}
                        </p>
                    </div>
                </div>

                <div className="w-full flex justify-center mt-32">
                    <a href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=qclashofclans86@gmail.com&su=${subject}&body=${body}`} target="_blank">
                        <button className="text-[#ffffff50] font-pain text-2xl px-10 py-2 rounded-2xl bg-[#ffffff20] backdrop-blur-[6px] border-2 border-[#ffffff40] m-auto hover:bg-[#ffffff40] hover:text-[#ffffff80] transition-colors duration-300 mb-64">
                            Let's work together
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </SetBackground>
}

export default forwardRef(Contact)