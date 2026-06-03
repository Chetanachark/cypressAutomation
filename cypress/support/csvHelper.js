import papa from 'papaparse'
export const readCSV = (fileName)=>{
    return cy.readFile(`cypress\fixtures\${fileName}`).then((text)=>{
        return papa.parse(text,{
            header:true,
            skipEmptyLines:true
        }).data;
    });
};