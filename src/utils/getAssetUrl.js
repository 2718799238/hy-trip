export function getAssetUrl(url) {
    return new URL(`../${url}`, import.meta.url).href
}
