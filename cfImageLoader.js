// cfImageLoader.js
export default function cfImageLoader({ src, width, quality }) {
    const params = [`width=${width}`, `quality=${quality || 75}`, 'format=auto']
    return `https://www.urlnolongerlong.com/cdn-cgi/image/${params.join(',')}/${src}`
}
