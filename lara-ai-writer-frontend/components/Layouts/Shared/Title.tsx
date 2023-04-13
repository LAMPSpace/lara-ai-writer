import LinkButton from "./LinkButton";
import { FEATURE_BUTTONS } from "@/components/Constants/feature-buttons.constant";

type TitleProps = {
    title: string;
    buttons: string[];
};

const Title = ({ title, buttons }: TitleProps) => {
    return (
        <div className="d-flex">
            <div className="flex-grow-1">
                <h1 className="h2 mb-3 d-inline-block">{title}</h1>
            </div>
            {Object.keys(FEATURE_BUTTONS).filter(featureButtonName => buttons.includes(featureButtonName)).map((button, index) => {
                return (
                    <div className="ml-2" key={title + "_link_button_" + index}>
                        <LinkButton item={FEATURE_BUTTONS[button]} />
                    </div>
                );
            })}
        </div>
    );
};

export default Title;