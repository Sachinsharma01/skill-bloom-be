import fs from 'fs';
import csv from 'csv-parser';
import { DB } from '../database/index';
import path from 'path';
import { swapKeyValues } from './generalUtils';
import constants from './constants';

const scrapper = async () => {
    const folderPath = path.join(__dirname, '../csv/');
    const jsonPath = path.join(__dirname, '../static/resource_data.json');
    const data: any[] = [];

    let existingData: any[] = [];
    if (fs.existsSync(jsonPath)) {
        try {
            const fileContent = fs.readFileSync(jsonPath, 'utf-8');
            existingData = JSON.parse(fileContent);
            console.log(
                `Found existing data with ${existingData.length} records`,
            );
        } catch (error) {
            console.error('Error reading existing JSON file:', error);
        }
    }

    fs.readdirSync(folderPath).forEach(file => {
        console.log('File: ', file);
        fs.createReadStream(path.join(folderPath, file))
            .pipe(csv())
            .on('data', row => {
                console.log('ROW ', row);
                const resource: any = {
                    course_id: constants.CSV_FILES_MAPPING[file as keyof typeof constants.CSV_FILES_MAPPING],
                    company_name: row['Company Name'] ?? row['Organization Name'] ?? row['Name'],
                    industry: row['Sector'] ?? row['Industry Sector'],
                    location: row['Address'] ?? row['Headquarters Locaiton'],
                    careers_url: row['Career Website'] ?? row['Website'] ?? row['Careers Portal'],
                    linkedin_url: row['LinkedIn Profile'] ?? row['LinkedIn'],
                };
                console.log('Resource created', resource);
                data.push(resource);
            })
            .on('end', async () => {
                console.log('CSV processing completed');

                const combinedData = [...existingData, ...data];

                try {
                    fs.writeFileSync(
                        jsonPath,
                        JSON.stringify(combinedData, null, 2),
                    );
                    console.log(
                        `Successfully wrote ${combinedData.length} records to ${jsonPath}`,
                    );
                } catch (error) {
                    console.error('Error writing to JSON file:', error);
                }
            })
            .on('error', error => {
                console.error('Error processing CSV:', error);
            });
    });
};

export default scrapper;
