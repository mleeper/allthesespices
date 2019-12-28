const prefix = 'http://api.allthesespices.com/index.php/wp-json/api/v1';
const contentUrl = (type, name) => `${prefix}/${type}${name ? `/${name}` : ''}`;

export default {
    homepage: `${prefix}/homepage`,
    recipes: name => contentUrl('recipes', name),
    articles: name => contentUrl('articles', name),
    about: name => contentUrl('aboutus', name),
}