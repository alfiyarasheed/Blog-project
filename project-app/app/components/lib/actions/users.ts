

'use server';
export async function getUsers() {
    try {
        let response = await fetch('http://raw.githubusercontent.com/DarkPhoenix2704/json-host/main/news.json');
        let data = await response.json();
        return data;
    } catch (error:any) {
        console.error('Error fetching data:', error);
        return { error: error.message };
    }
}
