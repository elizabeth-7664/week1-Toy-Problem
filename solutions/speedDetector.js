
function SpeedDetector(speed){
    const speedlimit = 70;
    const demeritPer5km = 1;

    if(speed<speedlimit){
        console.log('OK');
    }else{
        let demeritPoints = Math.floor((speed - speedlimit)/5);

        if(demeritPoints > 12){
            console.log('Licence suspended')
        }else{
            console.log(`Points: ${demeritPoints}`)
        }
    }
}
