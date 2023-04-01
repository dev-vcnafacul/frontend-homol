import Accordion from "components/Accordion";
import DashboardSubCard from "components/DashboardCard/DashboardSubCard";
import DashboardCard from "../../components/DashboardCard";
import { dashboardCardList } from "./data";
import { Menu } from "./styles";

function MenuDash() {
    return (
        <Menu>
            {dashboardCardList.map((dashcard) => (
                <Accordion
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
            ))}
        </Menu>
    );
}

export default MenuDash;
