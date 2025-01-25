import { isNumber } from "@/lib/utils";

export const GET_TOP_STORY_LIST = `*[_type == "article"] | order(publishedDate desc)[0...6]{
    "slug": slug.current, 
    title, 
    description, 
    publishedDate, 
    "heroImage": heroImage.asset,
    "author": author -> name, 
    "category": category -> name
}`;

export const GET_ARTICLE = (
  slug: string
) => `*[_type == "article" && slug.current == "${slug}" ]{
    "slug": slug.current, 
    title, 
    description, 
    publishedDate, 
    "heroImage": heroImage.asset,
    "author": author -> name, 
    "category": category -> name,
    body
}`;

export const GET_ALL_CATEGORIES = `*[_type == "category"]{
    "slug": slug.current, 
    name, 
    description,
}`;

export const GET_ARTICLES_BY_CATEGORY = ({
  slug,
  from,
  to,
}: any) => `*[_type == "article" && category->slug.current == "${slug}"] ${isNumber(from) && isNumber(to) ? `[${from}...${to}]` : ""} {
    "slug": slug.current, 
    title, 
    description, 
    publishedDate, 
    "heroImage": heroImage.asset,
    "author": author -> name, 
    "category": category -> name
}`;
