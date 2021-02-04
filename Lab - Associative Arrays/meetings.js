function meetings(data) {
    let calendar = new Map();

    data.forEach(meeting =>{
        const [day, name] = meeting.split(" ");

        if(!calendar.has(day)){
            calendar.set(day, name);
            console.log(`Scheduled for ${day}`);            
        }else{
            console.log(`Conflict on ${day}!`);            
        }
    })

    for (const [day, name] of calendar) {
        console.log(`${day} -> ${name}`)
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])