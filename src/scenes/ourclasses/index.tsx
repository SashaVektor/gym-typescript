import { ClassType, SelectedPage } from "@/shared/types"
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from "framer-motion"
import HText from "@/shared/HText"
import Class from "./Class"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const classes: Array<ClassType> = [
    {
        name: "Weight training classes",
        description: "Deadlifts - strengthen multiple muscle groups and improve posture and form.",
        image: image1
    },
    {
        name: "Weight training classes",
        image: image2
    },
    {
        name: "Weight training classes",
        description: "Deadlifts - strengthen multiple muscle groups and improve posture and form.",
        image: image3
    },
    {
        name: "Weight training classes",
        description: "Deadlifts - strengthen multiple muscle groups and improve posture and form.",
        image: image4
    },
    {
        name: "Weight training classes",
        description: "Deadlifts - strengthen multiple muscle groups and improve posture and form.",
        image: image5
    },
    {
        name: "Weight training classes",
        description: "Deadlifts - strengthen multiple muscle groups and improve posture and form.",
        image: image6
    }
]

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section className="w-full bg-primary-100 py-40" id="ourclasses">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <motion.div className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: .5 }}
                    transition={{ delay: .3, duration: .5 }}
                    variants={{
                        hidden: { opacity: 0, x: 80 },
                        visible: { opacity: 1, x: 0 }
                    }}>
                    <div className="md:w-3/5">
                        <HText>Our classes</HText>
                        <p className="py-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Saepe dolor alias maiores temporibus maxime itaque
                            aliquam quam explicabo sunt harum! Tenetur nihil libero porro
                            molestiae eligendi sequi. Velit, ipsam quo.
                        </p>
                    </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classes.map((item, i) => (
                            <Class 
                            key={`${item.name} - ${i}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default OurClasses
