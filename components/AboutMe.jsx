import React from "react";
import { useTransition , useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2 font-bold text-base space-y-1">
                <li>HTML</li>
                <li>CSS</li>
                <li>Java</li>
                <li>SQL</li>
                <li>PHP</li>
                <li>Python</li>
            </ul>
        ),
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
            <ul className="list-disc pl-2 font-bold text-base space-y-1">
                <li>Project Management Intern | <span className="text-sm">APU</span></li>
                <li>Part Time Baker | <span className="text-sm">Il Marone by Michelle Young</span> </li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2 font-bold text-base space-y-1">
                <li>Asia Pacific University</li>
                <li>SMK Seri Kembangan</li>
            </ul>
        ),
    }
];

const AboutMe = () => {
    const[tab, setTab] = useState("skills");
    const[isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return(
        <section className="text-white grid" id="aboutMe">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
                <div>
                    <img src="/aboutMe.jpg" alt="About Me" width={450} height={450} style={{borderRadius: "25px"}}/>
                </div>

                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="text-4xl font-bold text-white mb-4 text-center">ABOUT ME</h1>
                    <p className="text-base text-justify lg:text-lg">I just finished my Diploma study in the field of Software Engineering. It was truly a meaningful and memorable education journey.
                    Although I'm in the IT field, I also love to involve in projects related to event management as it provide me a chance to deal with different people.
                    Facing the computer whole day might be boring and frustrated, yet, the process of solving the challenges faced along the way were truly exicitng and motivating.
                    </p>
                    <div className="flex flex-row mt-8 font-bold">
                        <TabButton
                        selectTab={() => handleTabChange("skills")}
                        active= {tab === "skills"}
                        >
                            SKILLS
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("experiences")}
                        active= {tab === "experiences"}
                        >
                            {" "}
                            EXPERIENCES{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("education")}
                        active= {tab === "education"}
                        >
                            {" "}
                            EDUCATION{" "}
                        </TabButton>
                        </div>
                        <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;