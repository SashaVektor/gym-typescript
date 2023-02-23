import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}
const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: .3 }
    }
}
const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Combined, these words suggest that a gym provides opportunities for physical improvement, mental well-being, social connections, and personal growth."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Combined, these words suggest that a gym provides opportunities for physical improvement, mental well-being, social connections, and personal growth."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and pro trainers",
        description: "Combined, these words suggest that a gym provides opportunities for physical improvement, mental well-being, social connections, and personal growth."
    },
]

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section
            id="benefits"
            className="mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                <motion.div className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: .5 }}
                    transition={{ delay: .2, duration: .5 }}
                    variants={{
                        hidden: { opacity: 0, x: -80 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <HText>
                        More then just a gym.
                    </HText>
                    <p className="my-5 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id a voluptatibus suscipit ullam dolorum ducimus temporibus,
                        esse ea adipisci
                        doloribus architecto dolores sapiente ipsa inventore repellendus
                        necessitatibus nam delectus possimus.
                    </p>
                </motion.div>
                <motion.div className="md:flex items-center justify-between gap-8 mt-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: .5 }}
                    variants={container}>
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    <img src={BenefitsPageGraphic} alt="benefits img" className="mx-auto" />
                    <div>
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: .5 }}
                                    transition={{ delay: .2, duration: .5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 80 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                >
                                    <HText>
                                        Millions of happy members getting{" "}
                                        <span className="text-primary-500">Fit</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>
                        <motion.div
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: .5 }}
                         transition={{ delay: .4, duration: .5 }}
                         variants={{
                             hidden: { opacity: 0, x: 80 },
                             visible: { opacity: 1, x: 0 }
                         }}
                        >
                            <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Rem aliquam vitae doloremque. Nihil voluptatibus consequuntur
                                accusantium cupiditate pariatur
                                perferendis consequatur voluptas neque quia? Voluptatum veritatis
                                at quam nulla reiciendis soluta?
                            </p>
                            <p className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Asperiores error nihil at facere corrupti earum voluptas
                                pariatur nam, doloremque dignissimos!
                            </p>
                        </motion.div>
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits
