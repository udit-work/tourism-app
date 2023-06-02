const baseUrl = 'https://web-dev.dev.kimo.ai/v1';
export const triggerFetch = async (url: string) => {
    const updatedUrl = baseUrl + url;
    const res = fetch(updatedUrl, {
        method: 'get'
    }).then(res => res.json());
    return await res;
}