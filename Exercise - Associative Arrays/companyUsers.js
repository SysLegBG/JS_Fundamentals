function companyUsers(input) {
    let companies = {};

    for (const line of input) {
        const [company, id] = line.split(" -> ");
        if (!companies.hasOwnProperty(company))
            companies[company] = new Set();

        companies[company].add(id);
    }

    Object
        .entries(companies)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(company => {
            console.log(company[0]);
            Array.from(company[1]).forEach(id => console.log(`-- ${id}`))
        })
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
])