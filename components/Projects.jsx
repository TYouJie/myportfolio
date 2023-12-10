import React from "react";
import ProjectCard from "./ProjectCard";


const projectData = [
    {
        id: 1,
        title: "Cour des Vosges",
        description: "This is a Hotel Booking System project for Java assignment.",
        image: "/projects/hotel.png",
        gitUrl: "https://github.com/TYouJie/HotelBookingSystem"
    },
    {
        id: 2,
        title: "Yum Yum",
        description: "This is a Restaurant Finder System project created for FYP.",
        image: "/projects/yumyum.png",
        gitUrl: "https://github.com/khongbk-3422/YumYum"
    },
    {
        id: 3,
        title: "Cafeteria",
        description: "This is a cafeteria project created for Python assignment.",
        image: "/projects/cafeteria.png",
        gitUrl: "https://github.com/TYouJie/Online_Food_Order"
    },
    {
        id: 4,
        title: "Tic Tac Toe",
        description: "A mini game created to learn basic of Java.",
        image: "/projects/tictactoe.jpg",
        gitUrl: "https://github.com/TYouJie/Mini_Projects/blob/47bfeec9469f59fe35f283cab25a7e49d9eae009/Java/TicTacToe.java"
    },
];

const Projects = () => {
    return (
        <div id="projects">
            <div className="text-4xl font-semibold mb-8 text-center">My Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 h-full text-center">
                {projectData.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />))}
            </div>
        </div>
    );
};

export default Projects;