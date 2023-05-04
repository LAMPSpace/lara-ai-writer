import { getColorCode, getIconBackgroundColor } from "@/helpers/color.helper";

type BadgeProps = {
    content: string;
    color: string;     //Hex color
    fontSize: number;
}

const Badge = ({ content, color, fontSize }: BadgeProps) => {
    return (
        <div className="d-flex">
            <p style={{
                color: getColorCode(color),
                fontWeight: "bold",
                fontSize: fontSize,
                backgroundColor: getIconBackgroundColor(color),
                borderRadius: 5,
                padding: "0px 5px 0px 5px",
                marginBottom: 0
            }}
            >{content}</p>
        </div>
    );
}

export default Badge;