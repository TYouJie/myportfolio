import React from "react";
import GithubIcon from "../public/github-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import GmailIcon from "../public/gmail-icon.svg";

const EmailSection = () => {
    return (
        <main className="grid md:grid-cols-2 my-12 md:my-12 py-24 md:py-24 gap-4 relative" id="contact">
            <div className="z-10">
                <h5 className="text-4xl font-bold text-white my-2">Let's Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md mt-8 text-justify">
                    I'm always keen to learn new things and make new friends. Do connect with me and share your experiences!
                </p>
                <h4 className="pb-3 mt-6">Let's get in touch!</h4>
                <div className="flex flex-row gap-4 mt-6">
                    <Link href="http">
                        <Image src={GithubIcon} alt = "Github Icon" />
                    </Link>
                    <Link href="http">
                        <Image src={LinkedinIcon} alt = "Linkedin Icon" />
                    </Link>
                    <Link href="mailto:yiling13579@gmail.com" className="mt-1">
                        <Image src={GmailIcon} alt = "Email" />
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default EmailSection;