import Link from "next/link";

type TitleProps = {
    title: string;
    buttonLink?: string;
    buttonTitle?: string;
};

const Title = ({ title, buttonLink, buttonTitle }: TitleProps) => {
    return (
        <div className="d-flex">
            <div className="flex-grow-1">
                <h1 className="h2 mb-3 d-inline-block">{ title }</h1>
            </div>
            <div>
                {buttonLink && buttonTitle && (
                    <Link href={buttonLink} className="btn btn-primary mb-3">{buttonTitle}</Link>
                )}
            </div>
        </div>
    );
};

export default Title;