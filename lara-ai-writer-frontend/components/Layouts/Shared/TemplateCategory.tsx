import Badge from "./Badge";
import TemplateCardItem, { TemplateCardItemInformation } from "./TemplateCardItem";

export type TemplateCategoryInformation = {
    title: string;
    color: string;
    perRow: number;
    titleFontSize: number;
    items: TemplateCardItemInformation[];
}

type TemplateCategoryProps = {
    templateCategoryInformation: TemplateCategoryInformation
};

const TemplateCategory = ({ templateCategoryInformation }: TemplateCategoryProps) => {
    return (
        <div className="my-3">
            <Badge content={templateCategoryInformation.title} color={templateCategoryInformation.color} fontSize={templateCategoryInformation.titleFontSize} />
            <div className="row">
                {templateCategoryInformation.items.map((item, index) => {
                    return (
                        <div className={"col-12 col-md-6 col-lg-" + 12 / templateCategoryInformation.perRow + " py-2"}
                            key={"template_category_" + templateCategoryInformation.title.toLowerCase() + "_item_" + index}>
                            <TemplateCardItem templateCardItemInformation={item} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default TemplateCategory;