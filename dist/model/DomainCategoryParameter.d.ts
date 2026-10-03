export declare type DomainCategoryParameter = {
    id: number;
    domain_id: number;
    domain_category_id: number;
    name: string;
    gettext_name: string;
};
export declare type DomainCategoryParameterValue = {
    id: number;
    parameter_id: number;
    name: string;
    gettext_name: string;
};
export declare type DomainCategoryParameterWithSelectedValue = {
    parameter: DomainCategoryParameter;
    value: DomainCategoryParameterValue;
};
