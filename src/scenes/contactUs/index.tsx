import { SelectedPage } from "@/shared/types"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HText from "@/shared/HText"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder:text-white`
    const { register, trigger, formState: { errors } } = useForm();
    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    return (
        <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
                <motion.div className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: .5 }}
                    transition={{ delay: .3, duration: .5 }}
                    variants={{
                        hidden: { opacity: 0, x: -80 },
                        visible: { opacity: 1, x: 0 }
                    }}>
                    <HText>
                        <span className="text-primary-500">Join Now</span>{" "}
                        To get in Shape
                    </HText>
                    <p className="my-5">Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Sit sequi odit dignissimos incidunt modi. Nesciunt dolores sapiente vero libero aliquam!
                        Pariatur ullam harum vitae quo voluptas deserunt earum, culpa neque.
                    </p>
                </motion.div>
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div className="mt-10 basis-3/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: .5 }}
                        transition={{ delay: .3, duration: .5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}>
                        <form
                            target="_blank"
                            onSubmit={onSubmit}
                            method="POST"
                            action="https://formsubmit.co/aveklic@gmail.com"
                        >
                            <input type="text"
                                className={`${inputStyles}`}
                                placeholder="NAME"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100
                                })} />
                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.name.type === "required" && "This field is required"}
                                    {errors.name.type === "maxLength" && "Max length is 100 char"}
                                </p>
                            )}
                            <input type="email"
                                className={`${inputStyles}`}
                                placeholder="EMAIL"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })} />
                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.name.type === "required" && "This field is required"}
                                    {errors.name.type === "pattern" && "Invalid email address"}
                                </p>
                            )}
                            <textarea rows={4} cols={50}
                                className={`${inputStyles} resize-none`}
                                placeholder="MESSAGE"
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000
                                })} />
                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.name.type === "required" && "This field is required"}
                                    {errors.name.type === "maxLength" && "Max length is 2000 char"}
                                </p>
                            )}
                            <button
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>
                    <motion.div className="relative mt-16 basis-2/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: .5 }}
                    transition={{ delay: .3, duration: .5 }}
                    variants={{
                        hidden: { opacity: 0, y: -80 },
                        visible: { opacity: 1, y: 0 }
                    }}>
                        <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                            <img src={ContactUsPageGraphic} alt="contactUs img" className="w-full"/>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default ContactUs 
