export type DomainCategoryParameter = {
  id: number
  domain_id: number
  domain_category_id: number
  name: string
  gettext_name: string
}

export type DomainCategoryParameterValue = {
  id: number
  parameter_id: number
  name: string
  gettext_name: string
}

export type DomainCategoryParameterWithSelectedValue = {
  parameter: DomainCategoryParameter
  value: DomainCategoryParameterValue
}
