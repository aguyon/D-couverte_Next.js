// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'GET') {
        const filePath = path.join(process.cwd(), 'data', 'vocabulary.json');
        const fileData = fs.readFileSync(filePath);
        const data = JSON.parse(fileData);

        res.status(200).json(data);
    } else if (req.method === 'POST') {
        const category = req.body.category;
        const enWord = req.body.en;
        const frWord = req.body.fr;

        const newWord = {
            en: enWord,
            fr: frWord,
        };

        const filePath = path.join(process.cwd(), 'data', 'vocabulary.json');
        const fileData = fs.readFileSync(filePath);
        const data = JSON.parse(fileData);
        const currentList = data.englishList.find(list => list.name === category);
        currentList.data.push(newWord);
        fs.writeFileSync(filePath, JSON.stringify(data));

        res.status(201).json({ message: "Succès !" });
    }
}