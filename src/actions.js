export const fetchRecordHistory = async () => {
    const response = await fetch('http://localhost:4000/sample-json');

    const jsonResponse = await response.json();

    return jsonResponse;
};

export default {
    fetchRecordHistory
}