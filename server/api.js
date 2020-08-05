var express = require('express');
var cors = require('cors');

const app = express();
app.use(cors());

app.get('/sample-json', (req, res) => {
    setTimeout(() => {
        res.status(200).send(response);
    }, 3000);
});

app.listen(4000, () => console.log('server is up and listeting on port 4000c'));

const response = [
    {
        "backup_date": "2020/07/19 11:06:48", 
        "backup_name": "day_20200719_110648-7e2ab8", 
        "changed_fields": [
            {
                "field_name": "Name", 
                "new_value": "Ebonee Josephttttttt", 
                "old_value": "Ebonee Joseph"
            }, 
            {
                "field_name": "LastModifiedDate", 
                "new_value": "2020-07-19T11:06:29.000+0000", 
                "old_value": "2020-07-18T16:41:15.000+0000"
            }, 
            {
                "field_name": "SystemModstamp", 
                "new_value": "2020-07-19T11:06:29.000+0000", 
                "old_value": "2020-07-18T16:41:15.000+0000"
            }
        ]
    }, 
    {
        "backup_date": "2020/07/19 13:35:55", 
        "backup_name": "day_20200719_133555-a3eb8b", 
        "changed_fields": [
            {
                "field_name": "Name", 
                "new_value": "Ebonee blabka", 
                "old_value": "Ebonee Josephttttttt"
            }, 
            {
                "field_name": "Phone", 
                "new_value": "09990808765675", 
                "old_value": ""
            }, 
            {
                "field_name": "AccountNumber", 
                "new_value": "iuhiuhiuh", 
                "old_value": ""
            }, 
            {
                "field_name": "LastModifiedDate", 
                "new_value": "2020-07-19T13:35:23.000+0000", 
                "old_value": "2020-07-19T11:06:29.000+0000"
            }, 
            {
                "field_name": "SystemModstamp", 
                "new_value": "2020-07-19T13:35:23.000+0000", 
                "old_value": "2020-07-19T11:06:29.000+0000"
            }
        ]
    }
];