type BadgeProps = {
    content: string;
    color: string;
    fontSize: number;
}

const Badge = ({ content, color, fontSize }: BadgeProps) => {
    return (
        <div className="d-flex">
            <p style={{
                color: color,
                fontWeight: "bold",
                fontSize: fontSize,
                backgroundColor: color + "20",
                borderRadius: 5,
                padding: "0px 5px 0px 5px",
                marginBottom: 0
            }}
            >{content}</p>
        </div>
    );
}

export default Badge;