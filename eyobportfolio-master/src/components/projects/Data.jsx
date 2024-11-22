import Project2 from "../../assets/project-1.jpg";
import Project3 from "../../assets/project-2.png";
import Project1 from "../../assets/project-3.jpg";
import Project4 from "../../assets/project-4.png";
// import Project5 from "../../assets/project-5.png";
import Project7 from "../../assets/project-7.png";
import Project6 from "../../assets/book.jpg";
import Project8 from "../../assets/project-8.png";
import Project9 from "../../assets/attendance.png";
import Project10 from "../../assets/exit.jpg";
import Project11 from "../../assets/to-do.jpg";

export const projectsData = [
  {
    id: 1,
    image: Project9,
    title: "Clearance management system",
    category: "WebSite",
    techStack: [
      "PHP", "JavaScript", "bootstrap"
    ],
    description:
      "A clearance management system automates and streamlines the process of obtaining approvals for activities or projects. It reduces manual errors, minimizes delays, and improves efficiency by automating workflows, real-time tracking, and reporting. Organizations can speed up processes, cut costs, and ensure regulatory compliance.",
  },
  {
    id: 2,
    image: Project6,
    title: "Book store management",
    category: "WebSite",
    techStack: [
      "PHP", "JavaScript", "bootstrap"
    ], description:
      "A bookstore management system helps independent bookstores manage operations by automating tasks like inventory, sales tracking, and customer interactions. It streamlines processes, reduces costs, and improves customer experience with features like real-time inventory and sales reporting.",
  },

  {
    id: 3,
    image: Project10,
    title: "Exit Exam",
    category: "WebSite",
    techStack: [
      "Next.js", "JavaScript"
    ],
    description:
      "An exit exam project is a final assessment in higher education that evaluates students' knowledge and skills. It helps assess program effectiveness, provides feedback, supports accreditation, and prepares students for future careers or education, ensuring programs meet their goals.",
  },

  {
    id: 3,
    image: Project11,
    title: "To-Do-List",
    category: "WebSite",
    techStack: [
      "React", "JavaScript", "css"
    ],
    description:
      "The To-Do List Application is a helpful tool that makes it easier for people to keep track of their tasks. Users can create, update, and check off their daily, weekly, or long-term goals in a simple and easy-to-use way. This project emphasizes important features like managing tasks, setting priorities, and organizing them into categories, ensuring a smooth experience on various devices.",
  },

];

export const projectsNav = [
  {
    name: "All",
  },
  {
    name: "WebSite",
  },
  {
    name: "Mobile",
  },
  {
    name: "Backend",
  },
];
