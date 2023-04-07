import LinkButton, { LinkButtonInformation } from "./LinkButton";

type TitleProps = {
    title: string;
    buttons: LinkButtonInformation[];
};

const Title = ({ title, buttons }: TitleProps) => {
    return (
        <div className="d-flex">
            <div className="flex-grow-1">
                <h1 className="h2 mb-3 d-inline-block">{title}</h1>
            </div>
            {buttons.map((button, index) => {
                return (
                    <div className="ml-2" key={"dashboard_link_button_" + index}>
                        <LinkButton item={button} />
                    </div>
                );
            })}
        </div>
    );
};

export default Title;