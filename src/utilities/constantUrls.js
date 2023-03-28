
import { BsGraphUp,BsEmojiSunglassesFill,BsDoorOpen,BsClipboardData, BsGrid,BsFileBarGraph, BsGear,BsBook,BsInfoCircleFill,BsFillHouseDoorFill,BsCardChecklist,BsFillQuestionOctagonFill } from "react-icons/bs";

const baseUrl="https://motiveminds-consulting-private-limited-motiveminds-dev-557e685e.cfapps.ap11.hana.ondemand.com";

 export const routes = [
     
    {
      path: "/",
      name: "Home",
      icon: <BsFillHouseDoorFill />,
    },
    {
      path: "/TheIndustryMap",
      name: "The Industry Map",
      icon: <BsGraphUp />,
    },
    {
      path: "/MyPerformance",
      name: "My Performance",
      icon: <BsGrid />,
    },
    {
      path: "/MyPlan",
      name: "My Plan",
      icon: <BsBook />,
    },
    {
      path: "/RetailerInformation",
      name: "Retailer Information",
      icon: <BsClipboardData />,
    },
    {
      path: "/SalesPerformance",
      name: "Sales Performance",
      icon: <BsFileBarGraph />,
    },
    {
      path: "/MyCustomers",
      name: "My Customers",
      icon: <BsEmojiSunglassesFill />,
    },
    {
      path: "/Database",
      name: "Database",
      icon: <BsDoorOpen />,
    },
    {
      path: "/MyNotification",
      name: "My Notification",
      icon: <BsInfoCircleFill />,
    },
    {
      path: "/PublicForum",
      name: "Public Forum",
      icon: <BsCardChecklist />,
    },
    {
      path: "/QuestionnaireSurvey",
      name: "Questionnaire Survey",
      icon: <BsFillQuestionOctagonFill />,
    },
    {
      path: "/master/user ",
      name: "User",
      icon: <BsGear />,
    }
  ];