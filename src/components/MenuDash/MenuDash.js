import Accordion from "components/Accordion";
import DashboardSubCard from "components/DashboardCard/DashboardSubCard";
import DashboardCard from "../../components/DashboardCard";
import { dashboardCardList } from "./data";
import { Menu } from "./styles";
import { useState } from "react";

function MenuDash({ permission }) {
    const [accordionItemOpen, setAccordionItemOpen] = useState(0);

    const openAccordion = (item) => {
        if (accordionItemOpen === item) setAccordionItemOpen(0);
        else setAccordionItemOpen(item);
    };

    return (
        <Menu>
            {dashboardCardList.map((dashcard) => {
                if (dashcard.title === "Admin" && permission.aluno) return <div key={dashcard.title}></div>;
                else {
                    return (
                        <Accordion
                            setStateOpen={() => openAccordion(dashcard.id)}
                            isOpen={accordionItemOpen === dashcard.id}
                            key={dashcard.title}
                            titleClosed={
                                <DashboardCard
                                    bg={dashcard.bg}
                                    title={dashcard.title}
                                    image={dashcard.image}
                                    alt={dashcard.alt}
                                />
                            }
                            titleOpened={
                                <DashboardCard
                                    isOpened
                                    bg={dashcard.bg}
                                    title={dashcard.title}
                                    image={dashcard.image}
                                    alt={dashcard.alt}
                                />
                            }
                        >
                            {dashcard.subMenuList.map((item) => (
                                <DashboardSubCard
                                    key={item.text}
                                    title={item.text}
                                    image={item.icon}
                                    alt={item.alt}
                                    to={item.link}
                                />
                            ))}
                        </Accordion>
                    );
                }
            })}
        </Menu>
    );
}

export default MenuDash;
