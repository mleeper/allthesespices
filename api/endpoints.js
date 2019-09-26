const prefix = 'http://allthesespices.com/wp-json/api/v1';
const contentUrl = (type, name) => `${prefix}/${type}${slug ? `/${slug}` : ''}`;

export default {
    homepage: `${prefix}/homepage`,
    recipes: name => contentUrl('recipes', name),
    articles: name => contentUrl('articles', name)
}