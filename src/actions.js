export const fetchRecordHistory = async (sobjectName, recordId, serviceId) => {
    try {
        // const loginResponse = await fetch('https://dev-oz.own-backup-dev.com/api/auth/v1/login', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         password: '123789987321',
        //         email: 'oz@ownbackup.com'
        //     })
        // });
        // const jsonLoginResponse = await loginResponse.json();
    
    
        const response = await fetch(`https://dev-oz.own-backup-dev.com/api/v1/services/${serviceId}/sobject/${sobjectName}/fetch_record/${recordId}`, {
            method: 'GET',
            headers: {
                'X-SESSION-ID': 'd6ab771097f3a779d6a41846c3a9f78f'
            }
        });
    
        const jsonResponse = await response.json();
    
        return jsonResponse;
    } catch (ex) {
        console.log(ex);
    }

};

export default {
    fetchRecordHistory
}