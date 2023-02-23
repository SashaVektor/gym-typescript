import Logo from "@/assets/Logo.png"

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-center mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img src={Logo} alt="logo" />
                    <p className="my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque, debitis corrupti ea nemo, quos nostrum, sint
                        minima sed molestiae alias repellendus nesciunt. Voluptate
                        sit blanditiis molestias maiores officiis illum neque.
                    </p>
                    <p>@ Gym App All Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Lorem ipsum dolor sit amet.</p>
                    <p className="my-5">Lorem ipsum dolor sit amet.</p>
                    <p className="my-5">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">Lorem ipsum dolor sit amet.</p>
                    <p>+123456789</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
