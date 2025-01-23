export const GET_TOP_STORY_LIST = `*[_type == "article"] | order(publishedDate desc)[0...6]{
    title, 
    description, 
    slug, 
    publishedDate, 
    "heroImage": heroImage.asset,
    "author": author -> name, 
    "category": category -> name
}`;
